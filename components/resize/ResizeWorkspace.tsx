"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/common/Button";
import ResizeStart from "@/components/resize/ResizeStart";
import useImageUpload from "@/utils/hooks/useImageUpload";
import ResizeEditor from "@/components/resize/ResizeEditor";
import useSourceImage from "@/utils/hooks/useSourceImage";

function StoredImage({ imageId }: { imageId: string }) {
  const { image, error, loading, retry } = useSourceImage(imageId);

  if (loading)
    return (
      <p
        className="rounded-2xl border border-line bg-white p-8 text-[13px] text-muted"
        role="status"
      >
        Loading your original image…
      </p>
    );
  if (error || !image) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8">
        <p role="alert" className="text-[13px] leading-7 text-[#8a4432]">
          {error || "Your image could not be loaded."}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-5">
          <Button onClick={retry}>Try loading again</Button>
          <Link
            href="/resize-image"
            className="text-[12px] font-medium text-brand hover:underline"
          >
            Choose another image
          </Link>
        </div>
      </div>
    );
  }
  return <ResizeEditor source={image} />;
}

function ImageSession({
  imageId,
  onSourceUploaded,
}: {
  imageId: string | null;
  onSourceUploaded: (imageId: string) => void;
}) {
  const selection = useImageUpload();

  function chooseAnother() {
    const url = new URL(window.location.href);
    url.searchParams.delete("imageId");
    window.history.replaceState(null, "", url);
    selection.reset();
  }

  if (selection.selectedImage) {
    const selected = selection.selectedImage;
    return (
      <ResizeEditor
        source={{
          file: selected.file,
          name: selected.file.name,
          mimeType: selected.file.type,
          size: selected.file.size,
          width: selected.width,
          height: selected.height,
          previewUrl: selected.previewUrl,
        }}
        onSourceUploaded={onSourceUploaded}
        onChooseAnother={chooseAnother}
      />
    );
  }
  if (!imageId) {
    return (
      <ResizeStart
        busy={selection.busy}
        error={selection.error}
        onImagesSelected={selection.selectImages}
      />
    );
  }
  return <StoredImage key={imageId} imageId={imageId} />;
}

export default function ResizeWorkspace() {
  const params = useSearchParams();
  const imageId = params.get("imageId")?.trim() || null;
  const [session, setSession] = useState({
    imageId,
    pendingImageId: null as string | null,
    version: 0,
  });

  if (session.imageId !== imageId) {
    const ownUpload =
      session.pendingImageId !== null && session.pendingImageId === imageId;
    setSession({
      imageId,
      pendingImageId: null,
      version: ownUpload ? session.version : session.version + 1,
    });
  }

  function rememberImage(id: string) {
    const url = new URL(window.location.href);
    const currentImageId = url.searchParams.get("imageId")?.trim() || null;
    if (currentImageId !== imageId) return;
    setSession((current) => ({ ...current, pendingImageId: id }));
    url.searchParams.set("imageId", id);
    window.history.replaceState(null, "", url);
  }

  return (
    <ImageSession
      key={session.version}
      imageId={imageId}
      onSourceUploaded={rememberImage}
    />
  );
}
