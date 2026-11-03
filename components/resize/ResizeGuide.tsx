import { resizeSteps } from "@/components/resize/data/steps";

export default function ResizeGuide() {
  return (
    <section
      id="resize-guide"
      className="border-y border-line bg-white py-14 sm:py-16"
      aria-labelledby="resize-guide-title"
    >
      <div className="page-container">
        <span className="eyebrow">A QUICK GUIDE</span>
        <h2 id="resize-guide-title" className="mt-3 text-[28px] sm:text-[32px]">
          How to resize an image online
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          Get the dimensions you need for a website, an email attachment, or a
          social post. Start with the largest original you have and resize a
          copy for each use.
        </p>
        <ol className="mt-9 grid list-none gap-7 md:grid-cols-3">
          {resizeSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-line bg-background p-6"
            >
              <span className="font-mono text-xs text-brand">0{index + 1}</span>
              <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-9 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 sm:gap-12">
          <article>
            <h3 className="text-base font-semibold">
              Resize, crop or compress?
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Resize changes the pixel dimensions of the whole image. Crop
              removes part of the picture to change its framing. Compress
              targets a smaller file size. Choose resize when the composition is
              right and the dimensions need to change.
            </p>
          </article>
          <article>
            <h3 className="text-base font-semibold">
              Keep the shape. Check the result.
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Use Keep aspect ratio for portraits, product photos and
              illustrations that should retain their shape. The preview helps
              you check the framing; the finished result shows the actual
              exported dimensions, format and file size.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
