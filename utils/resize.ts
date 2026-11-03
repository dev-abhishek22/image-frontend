import type { ImageDimensions, ResizeValues } from "@/types/processing";

export const RESIZE_LIMITS = {
  width: 10_000,
  height: 10_000,
  pixels: 40_000_000,
};

function roundPixel(value: number): number {
  const lower = Math.floor(value);
  return value - lower === 0.5 ? lower + (lower % 2) : Math.round(value);
}

export function getResizeDimensions(
  values: ResizeValues,
  source: ImageDimensions,
): ImageDimensions | null {
  const width = Number(values.width);
  const height = Number(values.height);
  if (
    !values.width.trim() ||
    !values.height.trim() ||
    !Number.isSafeInteger(width) ||
    !Number.isSafeInteger(height) ||
    width < 1 ||
    height < 1
  )
    return null;

  if (!values.maintainAspectRatio) return { width, height };
  const scale = Math.min(width / source.width, height / source.height);
  return {
    width: roundPixel(source.width * scale),
    height: roundPixel(source.height * scale),
  };
}

export function getResizeError(
  values: ResizeValues,
  source: ImageDimensions,
): string | null {
  if (
    source.width > RESIZE_LIMITS.width ||
    source.height > RESIZE_LIMITS.height ||
    source.width * source.height > RESIZE_LIMITS.pixels
  ) {
    return "This original exceeds the processing limits. Choose an image up to 10,000 px per side and 40 megapixels.";
  }
  const dimensions = getResizeDimensions(values, source);
  if (!dimensions)
    return "Enter a positive whole number for both width and height.";
  const width = Number(values.width);
  const height = Number(values.height);
  if (
    width > RESIZE_LIMITS.width ||
    height > RESIZE_LIMITS.height ||
    width * height > RESIZE_LIMITS.pixels
  ) {
    return "Use dimensions up to 10,000 px per side and 40 megapixels in total.";
  }
  if (dimensions.width < 1 || dimensions.height < 1) {
    return "These dimensions would make one side smaller than a pixel. Choose larger dimensions.";
  }
  return null;
}

export function resizedFileName(
  originalName: string,
  image: ImageDimensions & { format: string },
): string {
  const base =
    originalName
      .replace(/\.[^.]+$/, "")
      .replace(/[\\/:*?"<>|]/g, "-")
      .slice(0, 120) || "image";
  const extension =
    image.format.toUpperCase() === "JPEG" ? "jpg" : image.format.toLowerCase();
  return (
    base + "-resized-" + image.width + "x" + image.height + "." + extension
  );
}
