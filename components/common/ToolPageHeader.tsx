import Breadcrumbs from "@/components/common/Breadcrumbs";
import ToolIcon from "@/components/common/ToolIcon";
import type { ImageTool } from "@/types/image-tool";

export default function ToolPageHeader({
  title,
  description,
  icon,
  color = "green",
  breadcrumb,
}: {
  title: string;
  description: string;
  icon: ImageTool["icon"];
  color?: ImageTool["color"];
  breadcrumb: string;
}) {
  return (
    <div className="mb-9">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: breadcrumb }]}
      />
      <div className="flex items-start gap-4 sm:gap-5">
        <span className="mt-1 hidden sm:block">
          <ToolIcon name={icon} color={color} iconSize={25} />
        </span>
        <div className="min-w-0">
          <h1 className="text-[clamp(32px,4vw,44px)] leading-[1.15] font-semibold tracking-[-1.5px]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
