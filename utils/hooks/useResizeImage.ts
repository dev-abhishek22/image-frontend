"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { uploadImage } from "@/utils/api/images";
import { resizeImage } from "@/utils/api/processing";
import { getResizeDimensions, getResizeError } from "@/utils/resize";
import type {
  ProcessedImage,
  ResizeValues,
  ResizeSource,
} from "@/types/processing";

export default function useResizeImage(
  source: ResizeSource,
  onSourceUploaded?: (imageId: string) => void,
) {
  const initialValues = {
    width: String(source.width),
    height: String(source.height),
    maintainAspectRatio: true,
  };
  const [values, setValues] = useState<ResizeValues>(initialValues);
  const [result, setResult] = useState<ProcessedImage | null>(null);
  const [stage, setStage] = useState<"idle" | "uploading" | "resizing">("idle");
  const [error, setError] = useState<string | null>(null);
  const activeRequest = useRef<AbortController | null>(null);
  const uploadedId = useRef<string | null>(source.id ?? null);
  const validationError = getResizeError(values, source);
  const outputDimensions = validationError
    ? null
    : getResizeDimensions(values, source);

  useLayoutEffect(
    () => () => {
      const controller = activeRequest.current;
      activeRequest.current = null;
      if (controller) {
        controller.abort();
        setStage("idle");
      }
    },
    [],
  );

  function updateValues(changes: Partial<ResizeValues>) {
    if (activeRequest.current) return;
    setValues((current) => ({ ...current, ...changes }));
    setResult(null);
    setError(null);
  }

  function reset() {
    updateValues(initialValues);
  }

  async function process() {
    if (activeRequest.current || validationError) return;
    const controller = new AbortController();
    activeRequest.current = controller;
    let timedOut = false;
    let uploading = uploadedId.current === null;
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 120_000);
    setStage(uploading ? "uploading" : "resizing");
    setError(null);
    setResult(null);

    try {
      if (!uploadedId.current) {
        if (!source.file) throw new Error("Choose an image before resizing.");
        const uploaded = await uploadImage(source.file, controller.signal);
        if (activeRequest.current !== controller) return;
        uploadedId.current = uploaded.id;
        onSourceUploaded?.(uploaded.id);
      }
      controller.signal.throwIfAborted();
      uploading = false;
      setStage("resizing");
      const resized = await resizeImage(
        uploadedId.current,
        values,
        controller.signal,
      );
      if (activeRequest.current === controller) setResult(resized);
    } catch (cause) {
      if (activeRequest.current === controller) {
        setError(
          timedOut
            ? uploading
              ? "Uploading your image took too long. Please try again."
              : "Resizing took too long. Please try again."
            : cause instanceof Error
              ? cause.message
              : "Your image could not be resized. Please try again.",
        );
      }
    } finally {
      window.clearTimeout(timeout);
      if (activeRequest.current === controller) {
        activeRequest.current = null;
        setStage("idle");
      }
    }
  }

  return {
    values,
    result,
    processing: stage !== "idle",
    processingLabel: stage === "uploading" ? "Uploading image…" : "Resizing…",
    error,
    validationError,
    outputDimensions,
    updateValues,
    reset,
    process,
  };
}
