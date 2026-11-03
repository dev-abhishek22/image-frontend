import Link from "next/link";
import Icon from "@/components/common/Icon";
import { editingGuides } from "@/components/guides/data/articles";

export default function EditingGuides() {
  return (
    <section
      id="guides"
      className="page-container py-14 sm:py-20"
      aria-labelledby="guides-title"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <span className="eyebrow">A LITTLE KNOW-HOW GOES A LONG WAY</span>
          <h2 id="guides-title" className="mt-3 text-[28px] sm:text-[36px]">
            Make the right edit, first time.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Practical guides to help you choose your tool and understand the
            result.
          </p>
        </div>
        <Link
          href="/guide"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand hover:underline"
        >
          View all guides <Icon name="arrow" width="17" height="17" />
        </Link>
      </div>
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {editingGuides.slice(0, 3).map((guide) => (
          <article
            key={guide.id}
            className="flex flex-col rounded-2xl border border-line bg-white p-6 sm:p-7"
          >
            <span className="text-[10px] font-semibold tracking-[0.12em] text-brand">
              {guide.label}
            </span>
            <h3 className="mt-4 text-xl leading-7 font-semibold tracking-[-0.4px]">
              {guide.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">
              {guide.intro}
            </p>
            <Link
              href={"/guide#" + guide.id}
              className="mt-5 flex min-h-12 items-center justify-between gap-3 border-t border-line pt-3 text-sm font-semibold text-brand hover:underline"
            >
              Read the guide<span className="sr-only">: {guide.title}</span>
              <Icon name="arrow" width="17" height="17" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
