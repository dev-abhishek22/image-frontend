import type { ImageUploadStatus } from "@/types/image";

export const uploadStatusText: Record<ImageUploadStatus, string> = {
  idle: "Choose an image to get started.",
  checking: "Opening your image…",
  ready: "Your image is ready to upload.",
  uploading: "Uploading and saving your original image…",
  uploaded: "Your image has been uploaded successfully.",
};
