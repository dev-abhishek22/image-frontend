import Icon from "@/components/common/Icon";
import { homeSteps } from "@/components/home/data/steps";

export default function HowItWorks() {
  return (
    <section
      className="border-y border-line bg-[#f2f5ed] py-14 sm:py-16"
      id="how-it-works"
      aria-labelledby="how-title"
    >
      <div className="page-container">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">FROM ORIGINAL TO READY</span>
            <h2 id="how-title" className="mt-3 text-[28px] sm:text-[32px]">
              From idea to image, in three steps.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted">
            Choose a task, bring your image and work towards the result you
            need.
          </p>
        </div>
        <ol className="grid list-none gap-8 md:grid-cols-3 md:gap-12">
          {homeSteps.map((step) => (
            <li key={step.number} className="border-t border-[#dce3d3] pt-5">
              <div className="mb-5 flex items-center justify-between text-brand">
                <span className="font-mono text-xs text-muted">
                  {step.number}
                </span>
                <Icon name={step.icon} width="23" height="23" />
              </div>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
