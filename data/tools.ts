import type { ImageTool, ToolCategory } from "@/types/image-tool";

export const toolCategories: readonly ToolCategory[] = [
  "All tools",
  "Everyday edits",
  "File tools",
  "Backgrounds",
  "Passport photos",
];

export const imageTools: readonly ImageTool[] = [
  {
    id: "compress",
    name: "Compress image",
    icon: "compress",
    color: "orange",
    category: "File tools",
    description:
      "Reduce image file size to make photos easier to upload, store and share.",
    features: [
      "Reduce image file size",
      "Adjust output quality",
      "Prepare smaller files for sharing",
    ],
    keywords: "reduce optimize smaller quality kb mb",
  },
  {
    id: "resize",
    name: "Resize image",
    href: "/resize-image",
    icon: "resize",
    color: "blue",
    category: "Everyday edits",
    description:
      "Change width and height in pixels, with an option to keep your original proportions.",
    features: [
      "Set custom pixel dimensions",
      "Keep the original proportions",
      "Preview and download a resized copy",
    ],
    keywords: "dimensions scale size resolution photo",
  },
  {
    id: "crop",
    name: "Crop image",
    icon: "crop",
    color: "yellow",
    category: "Everyday edits",
    description:
      "Trim the edges, adjust the composition and keep the part of your photo that matters.",
    features: [
      "Choose the area you want to keep",
      "Adjust image composition",
      "Crop for a different aspect ratio",
    ],
    keywords: "trim frame ratio cut photo",
  },
  {
    id: "convert",
    name: "Convert image",
    icon: "convert",
    color: "purple",
    category: "File tools",
    description:
      "Move between image formats to prepare a copy for your website, app or next upload.",
    features: [
      "Switch between image formats",
      "Choose an output format",
      "Prepare a separate copy of your image",
    ],
    keywords: "jpg jpeg png webp avif format",
  },
  {
    id: "background",
    name: "Remove background",
    icon: "background",
    color: "pink",
    category: "Backgrounds",
    description:
      "Separate the subject from its background for product photos, portraits and new designs.",
    features: [
      "Separate a subject from its background",
      "Create a transparent background",
      "Prepare images for a new backdrop",
    ],
    keywords: "transparent cutout erase replace product",
  },
  {
    id: "watermark",
    name: "Watermark image",
    icon: "watermark",
    color: "teal",
    category: "Everyday edits",
    description:
      "Add a text watermark to give your images a name, a credit or your own signature.",
    features: [
      "Add a text watermark",
      "Choose its placement",
      "Adjust the watermark appearance",
    ],
    keywords: "text protect brand signature overlay copyright",
  },
  {
    id: "rotate",
    name: "Rotate image",
    icon: "rotate",
    color: "lilac",
    category: "Everyday edits",
    description:
      "Correct the orientation and turn your image to the angle you need.",
    features: [
      "Rotate to a different angle",
      "Adjust image orientation",
      "Save a correctly oriented copy",
    ],
    keywords: "orientation angle straighten turn",
  },
  {
    id: "passport",
    name: "Passport photo",
    icon: "passport",
    color: "green",
    category: "Passport photos",
    description:
      "Prepare photos for India and the US, with separate digital and printable outputs.",
    features: [
      "India and United States profiles",
      "Separate digital and printable results",
      "Photo checks and framing guidance",
    ],
    keywords: "identity id document visa country print",
  },
];

export const toolGroups = [
  {
    label: "Edit & adjust",
    tools: imageTools.filter((tool) => tool.category === "Everyday edits"),
  },
  {
    label: "Optimize & convert",
    tools: imageTools.filter((tool) => tool.category === "File tools"),
  },
  {
    label: "Create & prepare",
    tools: imageTools.filter(
      (tool) =>
        tool.category === "Backgrounds" || tool.category === "Passport photos",
    ),
  },
];
