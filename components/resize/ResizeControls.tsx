import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import { RESIZE_LIMITS } from "@/utils/resize";
import type { ImageDimensions, ResizeValues } from "@/types/processing";

export default function ResizeControls({
  values,
  dimensions,
  validationError,
  processing,
  processingLabel = "Resizing…",
  error,
  onChange,
  onReset,
  onProcess,
}: {
  values: ResizeValues;
  dimensions: ImageDimensions | null;
  validationError: string | null;
  processing: boolean;
  processingLabel?: string;
  error: string | null;
  onChange: (changes: Partial<ResizeValues>) => void;
  onReset: () => void;
  onProcess: () => void;
}) {
  return (
    <form
      className="rounded-2xl border border-line bg-white p-7 max-[620px]:p-5"
      onSubmit={(event) => {
        event.preventDefault();
        onProcess();
      }}
      aria-labelledby="resize-settings-title"
    >
      <span className="eyebrow">MAKE IT FIT</span>
      <h2
        id="resize-settings-title"
        className="mt-3 text-[23px] tracking-[-0.7px]"
      >
        Resize your image.
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="resize-width"
            className="mb-2 block text-[12px] font-medium"
          >
            Width (px)
          </label>
          <input
            id="resize-width"
            type="number"
            inputMode="numeric"
            min="1"
            max={RESIZE_LIMITS.width}
            step="1"
            required
            value={values.width}
            disabled={processing}
            onChange={(event) => onChange({ width: event.target.value })}
            aria-invalid={!!validationError}
            aria-describedby={
              validationError ? "resize-validation" : "resize-mode-hint"
            }
            className="w-full min-w-0 rounded-lg border border-[#dce5d6] bg-background px-3 py-3 text-base disabled:opacity-60"
          />
        </div>
        <div>
          <label
            htmlFor="resize-height"
            className="mb-2 block text-[12px] font-medium"
          >
            Height (px)
          </label>
          <input
            id="resize-height"
            type="number"
            inputMode="numeric"
            min="1"
            max={RESIZE_LIMITS.height}
            step="1"
            required
            value={values.height}
            disabled={processing}
            onChange={(event) => onChange({ height: event.target.value })}
            aria-invalid={!!validationError}
            aria-describedby={
              validationError ? "resize-validation" : "resize-mode-hint"
            }
            className="w-full min-w-0 rounded-lg border border-[#dce5d6] bg-background px-3 py-3 text-base disabled:opacity-60"
          />
        </div>
      </div>
      <label className="mt-5 flex min-h-11 cursor-pointer items-center gap-2.5 text-[12px] font-medium">
        <input
          type="checkbox"
          checked={values.maintainAspectRatio}
          disabled={processing}
          onChange={(event) =>
            onChange({ maintainAspectRatio: event.target.checked })
          }
          className="size-4 accent-brand"
        />
        Keep aspect ratio
      </label>
      <p
        id="resize-mode-hint"
        className="mt-3 text-[11px] leading-6 text-muted"
      >
        {values.maintainAspectRatio
          ? "Your image fits inside both dimensions without cropping or stretching."
          : "Your image uses these exact dimensions. Its proportions may change."}
      </p>
      {validationError ? (
        <p
          id="resize-validation"
          className="mt-4 text-[12px] leading-6 text-[#8a4432]"
          role="alert"
        >
          {validationError}
        </p>
      ) : (
        dimensions && (
          <p
            className="mt-4 rounded-lg bg-[#f1f6eb] px-4 py-3 text-[12px] text-brand"
            role="status"
          >
            Output:{" "}
            <strong className="font-semibold">
              {dimensions.width} × {dimensions.height} px
            </strong>
          </p>
        )
      )}
      {error && (
        <p
          className="mt-4 rounded-lg border border-[#ecd4ca] bg-[#fff6f1] px-4 py-3 text-[12px] leading-6 text-[#8a4432]"
          role="alert"
        >
          {error}
        </p>
      )}
      <Button
        type="submit"
        className="mt-6 w-full"
        disabled={processing || !!validationError}
        aria-busy={processing}
      >
        {processing
          ? processingLabel
          : error
            ? "Try resizing again"
            : "Resize image"}
        {processing ? (
          <span
            className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            aria-hidden="true"
          />
        ) : (
          <Icon name="resize" width="17" height="17" />
        )}
      </Button>
      <button
        type="button"
        disabled={processing}
        onClick={onReset}
        className="mt-4 text-[12px] font-medium text-muted underline-offset-4 hover:text-brand hover:underline disabled:opacity-50"
      >
        Reset to original dimensions
      </button>
      <p className="mt-5 border-t border-line pt-4 text-[11px] leading-6 text-muted">
        Select Resize image to save your original in cloud storage and create a
        resized copy. Transparent images may be saved as PNG.
      </p>
    </form>
  );
}
