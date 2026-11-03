export type SelectedImage = {
  file: File;
  previewUrl: string;
  width: number;
  height: number;
};

export type UploadedImage = {
  id: string;
};

export type ImageUploadStatus =
  "idle" | "checking" | "ready" | "uploading" | "uploaded";
