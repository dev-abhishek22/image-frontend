import Icon from "@/components/common/Icon";
import ToolLink from "@/components/tools/ToolLink";
import { imageTools } from "@/data/tools";
import { imageUseCases } from "@/components/home/data/use-cases";

export default function UseCases() {
  return (
    <section
      className="border-y border-line bg-white py-14 sm:py-20"
      aria-labelledby="use-cases-title"
    >
      <div className="page-container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="eyebrow">START WITH WHAT YOU NEED</span>
          <h2 id="use-cases-title" className="mt-3 text-[28px] sm:text-[36px]">
            A toolkit for the photos in your day.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            From a product listing to a profile picture, different images need
            different finishing touches.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {imageUseCases.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-line bg-[#f8faf9] p-6 sm:p-7"
            >
              <span className="mb-6 inline-flex size-12 items-center justify-center rounded-xl border border-[#dbe7df] bg-white text-brand">
                <Icon name={item.icon} width="24" height="24" />
              </span>
              <h3 className="text-xl font-semibold tracking-[-0.5px]">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                {item.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tools.map((id) => {
                  const tool = imageTools.find((entry) => entry.id === id)!;
                  return (
                    <ToolLink
                      key={id}
                      tool={tool}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-xs font-medium text-brand hover:border-brand"
                    >
                      {tool.name}
                      <Icon name="diagonal" width="13" height="13" />
                    </ToolLink>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
