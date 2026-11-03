import { aboutPrinciples } from "@/components/about/data/principles";
import Icon from "@/components/common/Icon";
import ToolIcon from "@/components/common/ToolIcon";
import ToolLink from "@/components/tools/ToolLink";
import { imageTools } from "@/data/tools";

export default function AboutOverview({ appName }: { appName: string }) {
  const availableCount = imageTools.filter((tool) => tool.href).length;
  return (
    <>
      <section
        className="grid items-start gap-9 lg:grid-cols-[1fr_1fr] lg:gap-16"
        aria-labelledby="about-purpose-title"
      >
        <div>
          <h2
            id="about-purpose-title"
            className="max-w-md text-[28px] sm:text-[34px]"
          >
            Less time figuring out your next edit.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-muted">
            <p>
              A photo for a product listing. A picture for a profile. A file for
              an application. Small image tasks show up everywhere, and each one
              comes with different requirements.
            </p>
            <p>
              {appName} brings those tasks into a single toolbox. The aim is
              straightforward: help you find the right tool, understand the
              change and prepare a copy for wherever your image goes next.
            </p>
            <p>
              Our catalog covers everyday edits, file optimization, formats,
              backgrounds and passport photo preparation. A tool marked Coming
              next shows its planned features; a connected tool opens its
              editor.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-white p-5 sm:p-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-semibold">Inside the toolbox</h3>
            <span className="text-xs leading-6 text-muted">
              {availableCount} available · {imageTools.length - availableCount}{" "}
              coming next
            </span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {imageTools.map((tool) => (
              <ToolLink
                key={tool.id}
                tool={tool}
                className="flex min-h-20 items-center gap-3 rounded-xl border border-line p-3 text-left hover:border-[#9cbea9] hover:bg-[#f6f9f7]"
              >
                <ToolIcon name={tool.icon} color={tool.color} iconSize={20} />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{tool.name}</span>
                  <span className="mt-1 block text-[11px] text-muted">
                    {tool.href ? "Available now" : "Coming next"}
                  </span>
                </span>
              </ToolLink>
            ))}
          </div>
        </div>
      </section>
      <section
        className="grid gap-7 pt-12 sm:grid-cols-3 sm:gap-9 sm:pt-16"
        aria-label="Our approach"
      >
        {aboutPrinciples.map((principle) => (
          <article key={principle.title} className="border-t border-line pt-6">
            <Icon
              name={principle.icon}
              width="24"
              height="24"
              className="mb-4 text-brand"
            />
            <h2 className="text-lg font-semibold tracking-[-0.3px]">
              {principle.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              {principle.text}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
