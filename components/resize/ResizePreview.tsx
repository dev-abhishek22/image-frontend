"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/common/Icon";
import { formatFileSize } from "@/utils/image";
import type { ImageDimensions, ResizeSource } from "@/types/processing";

export default function ResizePreview({
  source,
  dimensions,
}: {
  source: ResizeSource;
  dimensions: ImageDimensions | null;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showOriginal, setShowOriginal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const width = showOriginal || !dimensions ? source.width : dimensions.width;
  const height =
    showOriginal || !dimensions ? source.height : dimensions.height;

  useEffect(() => {
    const image = new Image();
    let cancelled = false;
    image.onload = () => {
      if (cancelled || !canvasRef.current) return;
      const canvas = canvasRef.current;
      const scale = Math.min(1000 / width, 380 / height, 1);
      canvas.width = Math.max(1, Math.round(width * scale));
      canvas.height = Math.max(1, Math.round(height * scale));
      const context = canvas.getContext("2d");
      if (!context) {
        setError("The preview could not be displayed in this browser.");
        return;
      }
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      setError(null);
    };
    image.onerror = () => {
      if (!cancelled)
        setError(
          "The preview could not be displayed. Try loading the image again.",
        );
    };
    image.src = source.previewUrl;
    return () => {
      cancelled = true;
      image.onload = null;
      image.onerror = null;
    };
  }, [source.previewUrl, width, height]);

  return (
    <section
      className="min-w-0 overflow-hidden rounded-2xl border border-line bg-white"
      aria-label="Resize preview"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
        <span className="inline-flex items-center gap-2 text-[12px] font-medium">
          <Icon name="image" width="16" height="16" /> Your image
        </span>
        <div
          className="flex gap-1 rounded-lg bg-background p-1 text-[11px]"
          role="group"
          aria-label="Preview mode"
        >
          <button
            type="button"
            aria-pressed={showOriginal}
            onClick={() => setShowOriginal(true)}
            className="rounded-md px-3 py-1.5 text-muted aria-pressed:bg-[#eaf1e4] aria-pressed:text-brand"
          >
            Original
          </button>
          <button
            type="button"
            aria-pressed={!showOriginal}
            onClick={() => setShowOriginal(false)}
            className="rounded-md px-3 py-1.5 text-muted aria-pressed:bg-[#eaf1e4] aria-pressed:text-brand"
          >
            Resize preview
          </button>
        </div>
      </div>
      <div className="flex min-h-[360px] items-center justify-center bg-[repeating-conic-gradient(#f1f4ed_0%_25%,#fbfcf8_0%_50%)] bg-size-[20px_20px] p-5 max-[620px]:min-h-[260px]">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={
            (showOriginal ? "Original image" : "Resize preview") +
            " at " +
            width +
            " by " +
            height +
            " pixels"
          }
          className="block max-h-[380px] max-w-full"
        />
      </div>
      {error && (
        <p className="px-5 py-3 text-[12px] text-[#8a4432]" role="alert">
          {error}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4 text-[11px] text-muted">
        <span className="min-w-0 max-w-full truncate">{source.name}</span>
        <span className="shrink-0">
          {source.width} × {source.height} px · {formatFileSize(source.size)}
        </span>
      </div>
    </section>
  );
}
