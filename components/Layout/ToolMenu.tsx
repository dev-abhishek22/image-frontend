import Link from "next/link";
import Icon from "@/components/common/Icon";
import ToolIcon from "@/components/common/ToolIcon";
import ToolLink from "@/components/tools/ToolLink";
import { toolGroups } from "@/data/tools";

export default function ToolMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div
      id="all-tools-menu"
      className="absolute inset-x-0 top-full max-h-[calc(100dvh-120px)] overflow-y-auto border-y border-line bg-white shadow-[0_20px_40px_#142c201a]"
    >
      <div className="page-container grid gap-7 py-7 md:grid-cols-3 md:gap-8">
        {toolGroups.map((group) => (
          <div key={group.label}>
            <h2 className="mb-3 border-b border-line pb-3 text-xs font-semibold tracking-[0.08em] text-muted uppercase">
              {group.label}
            </h2>
            <ul className="grid gap-1">
              {group.tools.map((tool) => (
                <li key={tool.id}>
                  <ToolLink
                    tool={tool}
                    onNavigate={onNavigate}
                    className="flex min-h-16 w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-[#f2f6f3]"
                  >
                    <ToolIcon
                      name={tool.icon}
                      color={tool.color}
                      iconSize={20}
                    />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">
                        {tool.name}
                      </span>
                      <span className="mt-1 block text-[11px] text-muted">
                        {tool.href
                          ? "Open the editor"
                          : "Coming next · see details"}
                      </span>
                    </span>
                  </ToolLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line bg-[#f7f9f8]">
        <div className="page-container flex flex-wrap items-center justify-between gap-4 py-4 text-xs text-muted">
          <p>One place for everyday edits, file tools and photo preparation.</p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/guide"
              onClick={onNavigate}
              className="inline-flex min-h-10 items-center hover:text-brand"
            >
              Guides
            </Link>
            <Link
              href="/about"
              onClick={onNavigate}
              className="inline-flex min-h-10 items-center hover:text-brand"
            >
              About
            </Link>
            <Link
              href="/#tools"
              onClick={onNavigate}
              className="inline-flex min-h-10 items-center gap-2 font-semibold text-brand"
            >
              Explore all tools <Icon name="arrow" width="16" height="16" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
