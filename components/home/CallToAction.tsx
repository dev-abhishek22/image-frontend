import Icon from "@/components/common/Icon";
import Button from "@/components/common/Button";

export default function CallToAction() {
  return (
    <section
      className="page-container mb-16 flex flex-col items-start justify-between gap-7 rounded-2xl border border-[#d4e2d9] bg-[#e8f1eb] p-7 sm:p-10 md:flex-row md:items-center"
      aria-labelledby="closing-title"
    >
      <div>
        <span className="eyebrow text-brand">
          ONE TOOLBOX. PLENTY OF POSSIBILITIES.
        </span>
        <h2 id="closing-title" className="mt-3 text-[28px] sm:text-[36px]">
          What will you do with your next image?
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Explore everyday edits, file tools, backgrounds and passport photo
          preparation.
        </p>
      </div>
      <Button href="/#tools">
        Explore all tools <Icon name="arrow" width="18" height="18" />
      </Button>
    </section>
  );
}
