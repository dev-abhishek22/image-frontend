"use client";

import { useRef } from "react";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import ResizeControls from "@/components/resize/ResizeControls";
import ResizePreview from "@/components/resize/ResizePreview";
import ResizeResult from "@/components/resize/ResizeResult";
import useResizeImage from "@/utils/hooks/useResizeImage";
import type { ResizeSource } from "@/types/processing";

export default function ResizeEditor({
  source,
  onSourceUploaded,
  onChooseAnother,
}: {
  source: ResizeSource;
  onSourceUploaded?: (imageId: string) => void;
  onChooseAnother?: () => void;
}) {
  const resize = useResizeImage(source, onSourceUploaded);
  const controlsRef = useRef<HTMLDivElement>(null);

  function adjustSize() {
    controlsRef.current
      ?.querySelector<HTMLInputElement>('input[type="number"]')
      ?.focus({ preventScroll: true });
    controlsRef.current?.scrollIntoView({ block: "start" });
  }

  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-[12px] text-muted">
        <span>
          Original: {source.width} × {source.height} px
        </span>
        {onChooseAnother ? (
          <button
            type="button"
            onClick={onChooseAnother}
            className="font-medium text-brand underline-offset-4 hover:underline"
          >
            Choose another image
          </button>
        ) : (
          <Link
            href="/resize-image"
            className="font-medium text-brand underline-offset-4 hover:underline"
          >
            Choose another image
          </Link>
        )}
      </div>
      <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(280px,0.85fr)] items-start gap-7 max-[850px]:grid-cols-1">
        <div className="min-w-0">
          {resize.result && (
            <ResizeResult
              key={resize.result.imageId}
              image={resize.result}
              originalName={source.name}
              onAdjustSize={adjustSize}
            />
          )}
          <details
            open={!resize.result}
            className={
              resize.result
                ? "group mt-4 rounded-2xl border border-line bg-white"
                : ""
            }
          >
            <summary
              className={
                resize.result
                  ? "flex min-h-14 list-none items-center justify-between gap-3 px-5 py-4 text-sm font-medium text-muted hover:text-brand [&::-webkit-details-marker]:hidden"
                  : "hidden"
              }
            >
              View original and resize preview
              <Icon
                name="plus"
                width="17"
                height="17"
                className="shrink-0 transition-transform group-open:rotate-45"
              />
            </summary>
            <div className={resize.result ? "px-4 pb-4" : ""}>
              <ResizePreview
                source={source}
                dimensions={resize.outputDimensions}
              />
            </div>
          </details>
        </div>
        <div ref={controlsRef} className="min-w-0 scroll-mt-2">
          <ResizeControls
            values={resize.values}
            dimensions={resize.outputDimensions}
            validationError={resize.validationError}
            processing={resize.processing}
            processingLabel={resize.processingLabel}
            error={resize.error}
            onChange={resize.updateValues}
            onReset={resize.reset}
            onProcess={resize.process}
          />
        </div>
      </div>
    </>
  );
}
