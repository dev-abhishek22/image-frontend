import type { IconName } from "@/components/common/Icon";
export type ToolCategory =
  | "All tools"
  | "Everyday edits"
  | "Passport photos"
  | "Backgrounds"
  | "File tools";
export type ToolColor =
  "green" | "blue" | "orange" | "purple" | "pink" | "yellow" | "teal" | "lilac";
export type ToolId =
  | "compress"
  | "resize"
  | "crop"
  | "convert"
  | "background"
  | "watermark"
  | "rotate"
  | "passport";

export type ImageTool = {
  id: ToolId;
  name: string;
  description: string;
  icon: IconName;
  color: ToolColor;
  category: ToolCategory;
  features: readonly string[];
  keywords: string;
  href?: string;
};
