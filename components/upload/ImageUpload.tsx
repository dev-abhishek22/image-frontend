"use client";

import { uploadStatusText } from "@/components/upload/data/status";

import { useId } from "react";
import Button from "@/components/common/Button";
import CheckBadge from "@/components/common/CheckBadge";
import Icon from "@/components/common/Icon";
import ImageDropzone from "@/components/upload/ImageDropzone";
import ImagePreview from "@/components/upload/ImagePreview";
import useImageUpload from "@/utils/hooks/useImageUpload";
import { imageFileUrl } from "@/utils/api/images";
import type { UploadedImage } from "@/types/image";

export default function ImageUpload({
  onUploaded,
}: {
  onUploaded?: (image: UploadedImage) => void;
}) {
  const {
    selectedImage,
    uploadedImage,
    status,
    error,
    selectImages,
    upload,
    reset,
    busy,
  } = useImageUpload(onUploaded);
  const errorId = useId();
  const statusText = uploadStatusText[status];

  return (
    <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(280px,0.85fr)] items-start gap-7 max-[850px]:grid-cols-1">
      <div>
        {selectedImage ? (
          <ImagePreview
            key={uploadedImage?.id ?? selectedImage.previewUrl}
            image={selectedImage}
            uploadedImage={uploadedImage}
          />
        ) : (
          <ImageDropzone
            disabled={busy}
            errorId={error ? errorId : undefined}
            onImagesSelected={selectImages}
          />
        )}
      </div>
      <section
        className="rounded-2xl border border-line bg-white p-7 max-[620px]:p-5"
        aria-labelledby="upload-status-title"
      >
        <span className="eyebrow">YOUR NEXT STEP</span>
        <h2
          id="upload-status-title"
          className="mt-3 text-[23px] tracking-[-0.7px]"
        >
          {uploadedImage
            ? "All uploaded."
            : selectedImage
              ? "Ready when you are."
              : "Start with an image."}
        </h2>
        <p
          className="mt-3 flex items-start gap-2 text-[13px] leading-7 text-muted"
          role="status"
          aria-live="polite"
        >
          {uploadedImage && (
            <span className="mt-[5px]">
              <CheckBadge />
            </span>
          )}
          {(status === "checking" || status === "uploading") && (
            <span
              className="mt-[7px] size-3.5 shrink-0 animate-spin rounded-full border-2 border-line border-t-brand"
              aria-hidden="true"
            />
          )}
          {statusText}
        </p>
        {error && (
          <p
            id={errorId}
            role="alert"
            className="mt-4 rounded-lg border border-[#ecd4ca] bg-[#fff6f1] px-4 py-3 text-[12px] leading-6 text-[#8a4432]"
          >
            {error}
          </p>
        )}
        {selectedImage && !uploadedImage && (
          <Button
            className="mt-6 w-full"
            onClick={upload}
            disabled={busy}
            aria-busy={status === "uploading"}
          >
            {status === "uploading"
              ? "Uploading…"
              : error
                ? "Try upload again"
                : "Upload image"}
            <Icon name="upload" width="17" height="17" />
          </Button>
        )}
        {uploadedImage && !onUploaded && (
          <Button
            href={
              "/resize-image?imageId=" + encodeURIComponent(uploadedImage.id)
            }
            className="mt-5 w-full"
          >
            Resize this image <Icon name="resize" width="17" height="17" />
          </Button>
        )}
        {uploadedImage && (
          <a
            href={imageFileUrl(uploadedImage.id)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-brand underline-offset-4 hover:underline"
          >
            View saved image <Icon name="diagonal" width="15" height="15" />
          </a>
        )}
        {selectedImage && (
          <button
            type="button"
            className="mt-4 block text-[12px] font-medium text-muted underline-offset-4 hover:text-brand hover:underline disabled:cursor-not-allowed disabled:opacity-50"
            onClick={reset}
            disabled={busy}
          >
            {uploadedImage ? "Upload another image" : "Choose another image"}
          </button>
        )}
        <p className="mt-6 border-t border-line pt-5 text-[11px] leading-6 text-muted">
          Your image uploads only when you select Upload image. The original
          file is saved without applying edits.
        </p>
      </section>
    </div>
  );
}
