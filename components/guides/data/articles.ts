import type { ToolId } from "@/types/image-tool";

type EditingGuide = {
  id: string;
  label: string;
  title: string;
  intro: string;
  paragraphs: readonly string[];
  tools: readonly ToolId[];
};

export const editingGuides: readonly EditingGuide[] = [
  {
    id: "resize-crop-compress",
    tools: ["resize", "crop", "compress"],
    label: "CHOOSE YOUR EDIT",
    title: "Resize, crop or compress?",
    intro: "Three common tasks that solve three different problems.",
    paragraphs: [
      "Resize changes the width and height of the whole image. Use it when a website asks for specific pixel dimensions or when an image is larger than its intended display size.",
      "Crop changes the framing by removing part of the picture. Compress targets file size in KB or MB. A smaller image can also produce a smaller file, but pixel dimensions alone do not guarantee a particular file size.",
    ],
  },
  {
    id: "dimensions-and-proportions",
    tools: ["resize", "crop"],
    label: "KEEP IT LOOKING NATURAL",
    title: "Dimensions without distortion",
    intro: "Understand proportions before you change the size.",
    paragraphs: [
      "An image’s aspect ratio describes the relationship between its width and height. Keep that relationship when resizing a portrait, product photo or illustration to avoid stretching the subject.",
      "If you need a different shape, crop to that shape before resizing. Start with the largest original you have; enlarging an image cannot recover detail that was missing from the source.",
    ],
  },
  {
    id: "prepare-for-forms",
    tools: ["resize", "compress", "passport"],
    label: "GET READY TO UPLOAD",
    title: "Preparing an image for a form",
    intro: "Check the requirements before changing your photo.",
    paragraphs: [
      "Read the destination’s requirements for pixel dimensions, file format and maximum file size. These are separate checks: the right dimensions do not automatically mean the right file size.",
      "Save a separate copy and inspect the finished result before submitting it. Passport and identity photo requirements vary by destination and application type, so check the current instructions for the specific application.",
    ],
  },
  {
    id: "check-your-result",
    tools: ["resize", "convert"],
    label: "BEFORE YOU SHARE",
    title: "Check your result before sharing",
    intro: "A quick final check can save you another upload.",
    paragraphs: [
      "Review the finished image at a useful viewing size. Check the edges, the subject’s proportions and any text or fine detail. Confirm that the dimensions, file format and file size match the destination’s requirements.",
      "Keep your original separately from the finished copy. If you need another version, work from the original instead of repeatedly editing and saving an already processed file. In the current resize editor, each new resize uses the uploaded source image.",
    ],
  },
];
