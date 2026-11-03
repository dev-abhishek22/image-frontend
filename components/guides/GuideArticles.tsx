import Icon from "@/components/common/Icon";
import ToolLink from "@/components/tools/ToolLink";
import { imageTools } from "@/data/tools";
import { editingGuides } from "@/components/guides/data/articles";

export default function GuideArticles() {
  return (
    <div className="min-w-0 space-y-7">
      {editingGuides.map((guide, index) => (
        <article
          id={guide.id}
          key={guide.id}
          className="rounded-2xl border border-line bg-white p-6 sm:p-9"
          aria-labelledby={guide.id + "-title"}
        >
          <span className="text-[10px] font-semibold tracking-[0.12em] text-brand">
            0{index + 1} · {guide.label}
          </span>
          <h2
            id={guide.id + "-title"}
            className="mt-4 text-[26px] sm:text-[30px]"
          >
            {guide.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-foreground">
            {guide.intro}
          </p>
          <div className="mt-5 space-y-4 text-sm leading-8 text-muted sm:text-base">
            {guide.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 border-t border-line pt-5">
            <p className="mb-3 text-xs font-medium text-muted">Related tools</p>
            <div className="flex flex-wrap gap-2">
              {guide.tools.map((id) => {
                const tool = imageTools.find((entry) => entry.id === id)!;
                return (
                  <ToolLink
                    key={id}
                    tool={tool}
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-line px-3 text-xs font-medium text-brand hover:border-brand"
                  >
                    {tool.name}
                    <Icon name="diagonal" width="13" height="13" />
                  </ToolLink>
                );
              })}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
