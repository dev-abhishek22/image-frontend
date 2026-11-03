import Link from "next/link";
import Icon from "@/components/common/Icon";
import { imageTools } from "@/data/tools";
import { platformFeatures } from "@/components/home/data/features";

export default function PlatformFeatures({ appName }: { appName: string }) {
  return (
    <section
      id="about"
      className="page-container py-14 sm:py-20"
      aria-labelledby="about-title"
    >
      <div className="grid items-start gap-7 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <span className="eyebrow">MEET {appName.toUpperCase()}</span>
          <h2
            id="about-title"
            className="mt-3 max-w-xl text-[30px] sm:text-[40px]"
          >
            Your images have places to go.
            <br />
            <span className="text-brand">Get them ready here.</span>
          </h2>
        </div>
        <div className="text-base leading-8 text-muted">
          <p>
            {appName} is a home for the image tasks that come up every day:
            making a photo fit, preparing a file to share, changing its format
            or getting it ready for a document.
          </p>
          <p className="mt-4">
            Browse {imageTools.length} focused tools in one place. Connected
            editors open directly; upcoming editors show their planned features
            so you know what’s available before you begin.
          </p>
        </div>
      </div>
      <div className="mt-11 grid gap-x-9 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {platformFeatures.map((feature) => (
          <article key={feature.title} className="border-t border-line pt-6">
            <Icon
              name={feature.icon}
              width="25"
              height="25"
              className="mb-4 text-brand"
            />
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{feature.text}</p>
          </article>
        ))}
      </div>
      <Link
        href="/about"
        className="mt-8 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-brand hover:underline"
      >
        More about {appName}
        <Icon name="arrow" width="17" height="17" />
      </Link>
    </section>
  );
}
