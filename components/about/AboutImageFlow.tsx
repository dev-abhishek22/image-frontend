import { aboutImageSteps } from "@/components/about/data/image-flow";
import Link from "next/link";
import Icon from "@/components/common/Icon";

export default function AboutImageFlow() {
  return (
    <section
      className="mb-14 border-y border-line bg-white py-14 sm:mb-16 sm:py-16"
      aria-labelledby="about-image-flow-title"
    >
      <div className="page-container">
        <span className="eyebrow">FROM YOUR DEVICE TO YOUR NEXT EDIT</span>
        <h2
          id="about-image-flow-title"
          className="mt-3 text-[28px] sm:text-[34px]"
        >
          What happens to your image?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
          The current workflow uses a local preview followed by an upload for
          processing. Here is what each step does.
        </p>
        <ol className="mt-9 grid list-none gap-6 md:grid-cols-3">
          {aboutImageSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-line bg-background p-6"
            >
              <div className="mb-5 flex items-center justify-between text-brand">
                <span className="font-mono text-xs">0{index + 1}</span>
                <Icon name={step.icon} width="22" height="22" />
              </div>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <Link
          href="/guide"
          className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-brand hover:underline"
        >
          Explore the image editing guide{" "}
          <Icon name="arrow" width="17" height="17" />
        </Link>
      </div>
    </section>
  );
}
