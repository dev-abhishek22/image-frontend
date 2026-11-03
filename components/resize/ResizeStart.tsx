import { resizeStart } from "@/components/resize/data/start";
import ImageDropzone from "@/components/upload/ImageDropzone";
import Icon from "@/components/common/Icon";

export default function ResizeStart({
  busy,
  error,
  onImagesSelected,
}: {
  busy: boolean;
  error: string | null;
  onImagesSelected: (files: File[]) => void;
}) {
  return (
    <div className="grid items-start gap-7 min-[851px]:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.85fr)]">
      <div>
        <ImageDropzone
          disabled={busy}
          errorId={error ? "resize-selection-error" : undefined}
          onImagesSelected={onImagesSelected}
        />
        {error && (
          <p
            id="resize-selection-error"
            role="alert"
            className="mt-4 rounded-lg border border-[#ecd4ca] bg-[#fff6f1] p-4 text-sm leading-6 text-[#8a4432]"
          >
            {error}
          </p>
        )}
        {busy && (
          <p role="status" className="mt-4 text-sm text-muted">
            Opening your image…
          </p>
        )}
      </div>
      <div className="rounded-2xl border border-line bg-white p-6 sm:p-7">
        <span className="eyebrow">{resizeStart.eyebrow}</span>
        <h2 className="mt-3 text-[24px]">{resizeStart.title}</h2>
        <ol className="mt-5 grid gap-4 text-sm leading-7 text-muted">
          {resizeStart.steps.map((step) => (
            <li key={step.text} className="flex gap-3">
              <Icon
                name={step.icon}
                width="20"
                height="20"
                className="mt-1 shrink-0 text-brand"
              />
              {step.text}
            </li>
          ))}
        </ol>
        <p className="mt-5 border-t border-line pt-4 text-xs leading-6 text-muted">
          {resizeStart.note}
        </p>
      </div>
    </div>
  );
}
