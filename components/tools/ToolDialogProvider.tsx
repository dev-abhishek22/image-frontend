"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import ToolDetailsDialog from "@/components/tools/ToolDetailsDialog";
import type { ImageTool } from "@/types/image-tool";

const ToolDialogContext = createContext<((tool: ImageTool) => void) | null>(
  null,
);

export function useToolDialog() {
  const openTool = useContext(ToolDialogContext);
  if (!openTool)
    throw new Error("Tool entries must be inside ToolDialogProvider.");
  return openTool;
}

export default function ToolDialogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedTool, setSelectedTool] = useState<ImageTool | null>(null);
  return (
    <ToolDialogContext value={setSelectedTool}>
      {children}
      <ToolDetailsDialog
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
      />
    </ToolDialogContext>
  );
}
