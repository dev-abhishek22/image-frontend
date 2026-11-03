"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/common/Icon";
import { imageFileUrl } from "@/utils/api/images";
import { formatFileSize } from "@/utils/image";
import type { SelectedImage, UploadedImage } from "@/types/image";

export default function ImagePreview({
  image,
  uploadedImage,
}: {
  image: SelectedImage;
  uploadedImage: UploadedImage | null;
}) {
  const [savedPreviewFailed, setSavedPreviewFailed] = useState(false);
  const showSavedPreview = uploadedImage !== null && !savedPreviewFailed;
  const source = showSavedPreview
    ? imageFileUrl(uploadedImage.id)
    : image.previewUrl;

  return (
    <section
      aria-label="Image preview"
      className="min-w-0 overflow-hidden rounded-2xl border border-line bg-white"
    >
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4 text-[12px]">
        <span className="inline-flex items-center gap-2 font-medium text-foreground">
          <Icon name="image" width="16" height="16" /> Your original image
        </span>
        <span className="text-[10px] text-muted">
          {showSavedPreview ? "Saved preview" : "Local preview"}
        </span>
      </div>
      <div className="relative min-h-[340px] bg-[repeating-conic-gradient(#f1f4ed_0%_25%,#fbfcf8_0%_50%)] bg-size-[20px_20px] max-[620px]:min-h-[260px]">
        <Image
          src={source}
          alt={
            uploadedImage
              ? "Uploaded image: " + image.file.name
              : "Selected image: " + image.file.name
          }
          fill
          unoptimized
          crossOrigin="anonymous"
          sizes="(max-width: 850px) 100vw, 700px"
          className="object-contain p-5"
          onError={() => {
            if (showSavedPreview) setSavedPreviewFailed(true);
          }}
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4 text-[11px] text-muted">
        <span className="min-w-0 max-w-full truncate">{image.file.name}</span>
        <span className="shrink-0">
          {image.width} × {image.height} px · {formatFileSize(image.file.size)}
        </span>
      </div>
      {savedPreviewFailed && (
        <p
          className="border-t border-line px-5 py-3 text-[12px] leading-6 text-muted"
          role="status"
        >
          Your upload is saved. Showing the local preview because the saved
          preview could not be loaded.
        </p>
      )}
    </section>
  );
}
