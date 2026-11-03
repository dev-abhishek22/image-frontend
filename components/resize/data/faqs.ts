import type { FAQItem } from "@/types/content";

export const resizeFaqs: readonly FAQItem[] = [
  {
    question: "How do I resize an image without stretching it?",
    answer:
      "Keep aspect ratio enabled. The image fits inside your chosen width and height while keeping its original proportions. For example, a 1600 × 900 image fitted into 800 × 800 becomes 800 × 450 pixels.",
  },
  {
    question: "Why is the output smaller than the dimensions I entered?",
    answer:
      "With Keep aspect ratio enabled, width and height define a bounding box. One edge can be shorter so the picture keeps its proportions. Turn this option off only if you need exact dimensions and accept that the image may stretch.",
  },
  {
    question: "Can I resize an image to a specific KB or MB size?",
    answer:
      "This tool changes pixel dimensions. The final file size depends on the image content and output format, so a specific size in KB or MB is not guaranteed. A dedicated compression tool is planned separately.",
  },
  {
    question: "Will enlarging an image add more detail?",
    answer:
      "Enlarging creates more pixels, but it cannot recover detail missing from the original. For sharper results, start with a larger source image and avoid unnecessary enlargement.",
  },
  {
    question: "What happens to transparent images?",
    answer:
      "Images with transparency are exported as PNG by the current processing engine, including transparent WebP and AVIF inputs. Check the format shown on the finished result before downloading.",
  },
  {
    question: "What are the resize limits?",
    answer:
      "The current editor supports dimensions up to 10,000 pixels per side and a requested area of up to 40 million pixels. Images must meet both the upload and processing limits. The editor shows a message when a requested size exceeds these limits.",
  },
  {
    question: "Does resizing replace my original image?",
    answer:
      "No. Resizing creates a separate processed image. You can adjust the dimensions again using the uploaded original. Changing the settings clears the previous result from the editor until you apply the new resize.",
  },
];
