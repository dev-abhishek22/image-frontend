import { imageFormats } from "@/data/image-formats";

export default function FormatGuide() {
  return (
    <section
      id="formats"
      className="border-y border-line bg-white py-14 sm:py-20"
      aria-labelledby="formats-title"
    >
      <div className="page-container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="eyebrow">KNOW YOUR FILE</span>
            <h2 id="formats-title" className="mt-3 text-[28px] sm:text-[36px]">
              Different formats. Different strengths.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted">
            These are the formats our uploader accepts. Always check the format
            required by the place your image is going.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {imageFormats.map((format) => (
            <article
              key={format.name}
              className="rounded-xl border border-line p-6"
            >
              <span
                className={
                  "inline-flex min-h-10 items-center rounded-lg px-3 font-mono text-sm font-semibold " +
                  format.color
                }
              >
                {format.name}
              </span>
              <p className="mt-4 font-mono text-[11px] text-muted">
                {format.extension}
              </p>
              <h3 className="mt-2 text-base font-semibold">{format.purpose}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{format.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-6 text-muted">
          Input support and export format can differ by tool. Check the finished
          result’s format before downloading.
        </p>
      </div>
    </section>
  );
}
