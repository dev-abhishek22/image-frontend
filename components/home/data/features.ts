import type { IconName } from "@/components/common/Icon";

export const platformFeatures: readonly {
  title: string;
  text: string;
  icon: IconName;
}[] = [
  {
    title: "Made for your browser",
    text: "Open the website and get started. There’s no separate editing app to download or install.",
    icon: "image",
  },
  {
    title: "Familiar image formats",
    text: "The uploader accepts JPG, PNG, WebP and AVIF, so you can start with the image you already have.",
    icon: "convert",
  },
  {
    title: "Preview before uploading",
    text: "Check your selected image locally first. It uploads when you start the tool’s action or explicitly select Upload image.",
    icon: "search",
  },
  {
    title: "Keep your original",
    text: "Edits create a separate result. Your uploaded original stays available when you want to try another adjustment.",
    icon: "crop",
  },
  {
    title: "Know what you’re saving",
    text: "The current editor shows the finished dimensions, output format and file size alongside the download.",
    icon: "download",
  },
  {
    title: "Tools with a clear purpose",
    text: "Find a focused tool for each task, with practical guidance to help you understand which edit you need.",
    icon: "sliders",
  },
];
