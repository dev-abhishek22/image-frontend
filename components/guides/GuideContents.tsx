import Icon from "@/components/common/Icon";
import { editingGuides } from "@/components/guides/data/articles";

export default function GuideContents() {
  return (
    <nav
      aria-label="On this guide page"
      className="rounded-2xl border border-line bg-white p-5"
    >
      <h2 className="mb-4 text-sm font-semibold tracking-normal">
        In this guide
      </h2>
      <ol className="grid list-none gap-1">
        {editingGuides.map((guide, index) => (
          <li key={guide.id}>
            <a
              href={"#" + guide.id}
              className="flex min-h-12 items-start gap-3 rounded-lg px-2 py-3 text-sm leading-6 text-muted hover:bg-[#f0f5f1] hover:text-brand"
            >
              <span className="mt-0.5 font-mono text-[10px] text-brand">
                0{index + 1}
              </span>
              {guide.title}
            </a>
          </li>
        ))}
      </ol>
      <a
        href="#formats"
        className="mt-3 flex min-h-12 items-center gap-3 border-t border-line px-2 pt-3 text-sm font-medium text-brand hover:underline"
      >
        <Icon name="convert" width="17" height="17" />
        Image format reference
      </a>
    </nav>
  );
}
