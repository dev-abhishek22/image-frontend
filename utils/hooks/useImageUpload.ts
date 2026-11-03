"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { uploadImage } from "@/utils/api/images";
import { prepareImageUpload, readImageDimensions } from "@/utils/image";
import type {
  ImageUploadStatus,
  SelectedImage,
  UploadedImage,
} from "@/types/image";

export default function useImageUpload(
  onUploaded?: (image: UploadedImage) => void,
) {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null,
  );
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(
    null,
  );
  const [status, setStatus] = useState<ImageUploadStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const previewUrl = useRef<string | null>(null);
  const selectedImageRef = useRef<SelectedImage | null>(null);
  const version = useRef(0);
  const uploadController = useRef<AbortController | null>(null);

  useLayoutEffect(() => {
    const selected = selectedImageRef.current;
    if (selected && !previewUrl.current) {
      const restored = {
        ...selected,
        previewUrl: URL.createObjectURL(selected.file),
      };
      previewUrl.current = restored.previewUrl;
      selectedImageRef.current = restored;
      setSelectedImage(restored);
    }

    return () => {
      version.current += 1;
      const controller = uploadController.current;
      uploadController.current = null;
      controller?.abort();
      if (previewUrl.current) URL.revokeObjectURL(previewUrl.current);
      previewUrl.current = null;
      const restingStatus = selectedImageRef.current ? "ready" : "idle";
      setStatus((current) =>
        current === "checking" || current === "uploading"
          ? restingStatus
          : current,
      );
    };
  }, []);

  function reset() {
    if (uploadController.current) return;
    version.current += 1;
    if (previewUrl.current) URL.revokeObjectURL(previewUrl.current);
    previewUrl.current = null;
    selectedImageRef.current = null;
    setSelectedImage(null);
    setUploadedImage(null);
    setError(null);
    setStatus("idle");
  }

  async function selectImages(files: File[]) {
    if (uploadController.current) return;
    reset();
    if (files.length === 0) return;
    if (files.length !== 1) {
      setError("Choose one image at a time.");
      return;
    }

    const currentVersion = version.current;
    let url: string | null = null;
    setStatus("checking");

    try {
      const file = prepareImageUpload(files[0]);
      url = URL.createObjectURL(file);
      const dimensions = await readImageDimensions(url);
      if (version.current !== currentVersion) {
        URL.revokeObjectURL(url);
        return;
      }
      const selected = { file, previewUrl: url, ...dimensions };
      previewUrl.current = url;
      selectedImageRef.current = selected;
      setSelectedImage(selected);
      setStatus("ready");
    } catch (cause) {
      if (url) URL.revokeObjectURL(url);
      if (version.current !== currentVersion) return;
      setError(
        cause instanceof Error
          ? cause.message
          : "Choose another image and try again.",
      );
      setStatus("idle");
    }
  }

  async function upload() {
    if (!selectedImage || uploadedImage || uploadController.current) return;
    const currentVersion = version.current;
    const controller = new AbortController();
    uploadController.current = controller;
    let timedOut = false;
    let result: UploadedImage | null = null;
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 120_000);

    setError(null);
    setStatus("uploading");

    try {
      result = await uploadImage(selectedImage.file, controller.signal);
      if (version.current !== currentVersion) return;
      setUploadedImage(result);
      setStatus("uploaded");
    } catch (cause) {
      if (version.current !== currentVersion) return;
      setError(
        timedOut
          ? "The upload took too long. Please try again."
          : cause instanceof Error
            ? cause.message
            : "Your image could not be uploaded. Please try again.",
      );
      setStatus("ready");
    } finally {
      window.clearTimeout(timeout);
      if (uploadController.current === controller)
        uploadController.current = null;
    }

    if (result && version.current === currentVersion) onUploaded?.(result);
  }

  return {
    selectedImage,
    uploadedImage,
    status,
    error,
    selectImages,
    upload,
    reset,
    busy: status === "checking" || status === "uploading",
  };
}
