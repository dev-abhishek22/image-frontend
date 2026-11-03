import Icon from "@/components/common/Icon";
import type { FAQItem } from "@/types/content";

export default function FAQSection({
  id,
  title,
  description,
  items,
}: {
  id: string;
  title: string;
  description: string;
  items: readonly FAQItem[];
}) {
  return (
    <section
      id={id}
      className="page-container grid gap-8 py-14 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-20"
      aria-labelledby={id + "-title"}
    >
      <div>
        <span className="eyebrow">A LITTLE CLARITY</span>
        <h2
          id={id + "-title"}
          className="mt-3 max-w-sm text-[28px] sm:text-[32px]"
        >
          {title}
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
          {description}
        </p>
      </div>
      <div className="border-t border-line">
        {items.map((item) => (
          <details key={item.question} className="group border-b border-line">
            <summary className="flex min-h-16 list-none items-center justify-between gap-5 py-5 text-sm leading-6 font-medium [&::-webkit-details-marker]:hidden">
              {item.question}
              <Icon
                name="plus"
                width="18"
                height="18"
                className="shrink-0 text-muted transition-transform group-open:rotate-45"
              />
            </summary>
            <p className="mb-5 max-w-xl pr-7 text-sm leading-7 text-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
