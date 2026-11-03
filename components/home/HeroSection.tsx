import Icon from "@/components/common/Icon";
import { homeHero } from "@/components/home/data/hero";

export default function HeroSection() {
  return (
    <section
      className="page-container pt-11 pb-2 text-center sm:pt-14"
      aria-labelledby="hero-title"
    >
      <p className="mb-4 text-[11px] font-semibold tracking-[0.16em] text-brand uppercase">
        {homeHero.eyebrow}
      </p>
      <h1
        id="hero-title"
        className="mx-auto max-w-5xl text-[clamp(34px,3.8vw,50px)] leading-[1.15] font-semibold tracking-[-1.5px] sm:tracking-[-2px]"
      >
        {homeHero.title}{" "}
        <span className="text-brand">{homeHero.highlight}</span>
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {homeHero.description}
        <br className="hidden sm:block" /> {homeHero.detail}
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs leading-6 text-muted">
        {homeHero.features.map((feature) => (
          <span key={feature.text} className="inline-flex items-center gap-1.5">
            <Icon name={feature.icon} width="15" height="15" />
            {feature.text}
          </span>
        ))}
      </div>
    </section>
  );
}
