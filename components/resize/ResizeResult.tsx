"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "@/components/common/Button";
import CheckBadge from "@/components/common/CheckBadge";
import Icon from "@/components/common/Icon";
import { getImageFile, imageFileUrl } from "@/utils/api/images";
import { formatFileSize } from "@/utils/image";
import { resizedFileName } from "@/utils/resize";
import type { ProcessedImage } from "@/types/processing";

export default function ResizeResult({
  image,
  originalName,
  onAdjustSize,
}: {
  image: ProcessedImage;
  originalName: string;
  onAdjustSize: () => void;
}) {
  const [previewFailed, setPreviewFailed] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const activeDownload = useRef<AbortController | null>(null);
  const resultRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
    resultRef.current?.scrollIntoView({ block: "start" });
  }, []);

  useLayoutEffect(
    () => () => {
      const controller = activeDownload.current;
      activeDownload.current = null;
      if (controller) {
        controller.abort();
        setDownloading(false);
      }
    },
    [],
  );

  async function download() {
    if (activeDownload.current) return;
    const controller = new AbortController();
    activeDownload.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 120_000);
    setDownloading(true);
    setError(null);
    try {
      const blob = await getImageFile(image.imageId, controller.signal);
      if (activeDownload.current !== controller) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = resizedFileName(originalName, image);
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (cause) {
      if (activeDownload.current === controller) {
        setError(
          controller.signal.aborted
            ? "The download took too long. Please try again."
            : cause instanceof Error
              ? cause.message
              : "Your image could not be downloaded.",
        );
      }
    } finally {
      window.clearTimeout(timeout);
      if (activeDownload.current === controller) {
        activeDownload.current = null;
        setDownloading(false);
      }
    }
  }

  return (
    <section
      ref={resultRef}
      className="scroll-mt-2 overflow-hidden rounded-2xl border border-[#bcd5c1] bg-white shadow-[0_4px_20px_#24362b08]"
      aria-labelledby="resize-result-title"
    >
      <div className="border-b border-line bg-[#f0f7f1] px-5 py-5">
        <h2
          ref={headingRef}
          id="resize-result-title"
          tabIndex={-1}
          className="flex items-center gap-2 text-[20px] leading-7 font-semibold tracking-[-0.4px]"
        >
          <CheckBadge /> Your resized image is ready.
        </h2>
        <p className="mt-2 text-xs leading-6 text-muted" role="status">
          {image.width} × {image.height} px · {image.format} ·{" "}
          {formatFileSize(image.size)}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button
            className="max-[620px]:w-full"
            onClick={download}
            disabled={downloading}
            aria-busy={downloading}
          >
            {downloading ? "Downloading…" : "Download image"}{" "}
            <Icon name="download" width="17" height="17" />
          </Button>
          <button
            type="button"
            onClick={onAdjustSize}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#c8dbcc] bg-white px-4 text-sm font-medium text-brand hover:bg-[#e8f1e9] max-[620px]:w-full"
          >
            Adjust size <Icon name="sliders" width="16" height="16" />
          </button>
        </div>
      </div>
      <div className="relative h-[280px] bg-[repeating-conic-gradient(#f1f4ed_0%_25%,#fbfcf8_0%_50%)] bg-size-[20px_20px] sm:h-[340px]">
        {previewFailed ? (
          <p className="px-6 py-14 text-center text-[12px] leading-6 text-muted">
            The saved preview could not be loaded. You can still try downloading
            the image.
          </p>
        ) : (
          <Image
            src={imageFileUrl(image.imageId)}
            alt="Resized image"
            fill
            unoptimized
            crossOrigin="anonymous"
            sizes="(max-width: 850px) 100vw, 700px"
            className="object-contain p-5"
            onError={() => setPreviewFailed(true)}
          />
        )}
      </div>
      {error && (
        <p
          className="border-t border-line px-5 py-4 text-[12px] text-[#8a4432]"
          role="alert"
        >
          {error}
        </p>
      )}
    </section>
  );
}
