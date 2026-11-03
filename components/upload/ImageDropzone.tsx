"use client";

import { useId, useState } from "react";
import Icon from "@/components/common/Icon";
import { IMAGE_UPLOAD_ACCEPT } from "@/utils/image";

export default function ImageDropzone({
  disabled,
  errorId,
  onImagesSelected,
}: {
  disabled: boolean;
  errorId?: string;
  onImagesSelected: (files: File[]) => void;
}) {
  const inputId = useId();
  const [dragging, setDragging] = useState(false);
  const hintId = inputId + "-hint";

  return (
    <label
      htmlFor={inputId}
      className={`flex min-h-[270px] flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors focus-within:outline-3 focus-within:outline-offset-4 focus-within:outline-[#72aa88] ${disabled ? "cursor-wait border-line bg-background opacity-60" : dragging ? "cursor-pointer border-brand bg-[#eef4e9]" : "cursor-pointer border-[#cbd8c5] bg-[#f7f9f3] hover:border-brand hover:bg-[#eef4e9]"}`}
      onDragOver={(event) => {
        event.preventDefault();
        if (!disabled) setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(event) => {
        event.preventDefault();
        setDragging(false);
        if (!disabled) onImagesSelected(Array.from(event.dataTransfer.files));
      }}
    >
      <input
        id={inputId}
        className="sr-only"
        type="file"
        accept={IMAGE_UPLOAD_ACCEPT}
        disabled={disabled}
        aria-label="Choose an image"
        aria-describedby={[hintId, errorId].filter(Boolean).join(" ")}
        onChange={(event) => {
          const files = Array.from(event.currentTarget.files ?? []);
          event.currentTarget.value = "";
          if (files.length) onImagesSelected(files);
        }}
      />
      <span className="pointer-events-none mb-5 grid size-14 place-items-center rounded-2xl border border-[#dce6d5] bg-white text-brand">
        <Icon name="upload" width="27" height="27" />
      </span>
      <span className="pointer-events-none text-[18px] font-[580] text-foreground">
        Drop your image here
      </span>
      <span className="pointer-events-none mt-2 text-[13px] text-muted">
        or{" "}
        <span className="font-semibold text-brand underline underline-offset-4">
          choose a file
        </span>
      </span>
      <span
        id={hintId}
        className="pointer-events-none mt-5 text-[11px] leading-6 text-muted"
      >
        JPG, PNG, WebP or AVIF · Up to 10 MiB · One image at a time
      </span>
    </label>
  );
}
