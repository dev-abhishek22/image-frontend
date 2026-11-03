"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useToolDialog } from "@/components/tools/ToolDialogProvider";
import type { ImageTool } from "@/types/image-tool";

export default function ToolLink({
  tool,
  className,
  children,
  onNavigate,
}: {
  tool: ImageTool;
  className?: string;
  children?: ReactNode;
  onNavigate?: () => void;
}) {
  const openTool = useToolDialog();
  if (tool.href)
    return (
      <Link href={tool.href} className={className} onClick={onNavigate}>
        {children ?? tool.name}
      </Link>
    );
  return (
    <button
      type="button"
      className={className}
      aria-label={tool.name + " — coming next"}
      onClick={() => openTool(tool)}
    >
      {children ?? tool.name}
    </button>
  );
}
