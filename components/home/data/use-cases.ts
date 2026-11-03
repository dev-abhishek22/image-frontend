import type { IconName } from "@/components/common/Icon";
import type { ToolId } from "@/types/image-tool";

export const imageUseCases: readonly {
  title: string;
  description: string;
  icon: IconName;
  tools: readonly ToolId[];
}[] = [
  {
    title: "Images for your website",
    description:
      "Match the dimensions of a page, prepare product photos and choose a file format that suits your website.",
    icon: "image",
    tools: ["resize", "compress", "convert"],
  },
  {
    title: "Photos for posts & profiles",
    description:
      "Refine the framing, correct the orientation and add a recognizable signature to the photos you share.",
    icon: "crop",
    tools: ["crop", "rotate", "watermark"],
  },
  {
    title: "Photos for applications",
    description:
      "Check the requested dimensions and prepare a separate copy for online forms, documents and passport photo workflows.",
    icon: "passport",
    tools: ["passport", "background", "resize"],
  },
];
