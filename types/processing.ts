export type ImageInfo = {
  id: string;
  name: string;
  mimeType: string;
  size: number;
};

export type SourceImage = ImageInfo & {
  width: number;
  height: number;
  previewUrl: string;
};

export type ResizeSource = Omit<SourceImage, "id"> &
  ({ id: string; file?: never } | { id?: never; file: File });

export type ResizeValues = {
  width: string;
  height: string;
  maintainAspectRatio: boolean;
};

export type ImageDimensions = {
  width: number;
  height: number;
};

export type ProcessedImage = ImageDimensions & {
  imageId: string;
  format: string;
  size: number;
};
