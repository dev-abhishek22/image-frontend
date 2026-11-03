import Icon from "@/components/common/Icon";
import ToolLink from "@/components/tools/ToolLink";
import { imageTools } from "@/data/tools";

export default function ToolToolbar({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  return (
    <div className="border-t border-line bg-[#f7f9f8]">
      <nav
        aria-label="Image tools toolbar"
        className="page-container overflow-x-auto"
      >
        <div className="flex w-max min-w-full items-center justify-between gap-1 py-1.5">
          {imageTools.map((tool) => (
            <ToolLink
              key={tool.id}
              tool={tool}
              onNavigate={onNavigate}
              className="inline-flex min-h-9 shrink-0 items-center justify-center gap-2 rounded-md px-2.5 text-xs font-medium whitespace-nowrap text-muted transition-colors hover:bg-[#e8efea] hover:text-brand"
            >
              <Icon name={tool.icon} width="15" height="15" />
              {tool.name}
            </ToolLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
