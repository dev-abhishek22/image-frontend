import Link from "next/link";
import Icon from "@/components/common/Icon";
import ToolIcon from "@/components/common/ToolIcon";
import type { ImageTool } from "@/types/image-tool";

export default function ToolCard({
  tool,
  onSelect,
}: {
  tool: ImageTool;
  onSelect: (tool: ImageTool) => void;
}) {
  const className =
    "group flex min-w-0 flex-col rounded-xl border border-line bg-white p-5 text-left transition-[border-color,box-shadow] duration-200 hover:border-[#9cbea9] hover:shadow-[0_8px_24px_#24362b0a] sm:p-6";
  const content = (
    <>
      <span className="mb-5 flex items-center justify-between gap-2">
        <ToolIcon name={tool.icon} color={tool.color} />
        <span
          className={
            "rounded-full px-2 py-1 text-[10px] font-medium " +
            (tool.href
              ? "bg-[#e3eedb] text-brand-dark"
              : "bg-[#f2f4ef] text-muted")
          }
        >
          {tool.href ? "Available now" : "Coming next"}
        </span>
      </span>
      <h3 className="text-lg font-semibold tracking-[-0.4px] text-foreground">
        {tool.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">
        {tool.description}
      </p>
      <span className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4 text-xs font-medium text-brand">
        {tool.href ? "Open tool" : "View planned features"}
        <Icon
          name={tool.href ? "arrow" : "plus"}
          width="17"
          height="17"
          className="shrink-0 transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </>
  );
  if (tool.href)
    return (
      <Link
        href={tool.href}
        className={className}
        aria-label={"Open " + tool.name}
      >
        {content}
      </Link>
    );
  return (
    <button
      type="button"
      className={className}
      onClick={() => onSelect(tool)}
      aria-label={"Learn about " + tool.name + " — coming next"}
    >
      {content}
    </button>
  );
}
