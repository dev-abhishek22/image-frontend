export const APP_NAME = process.env.APP_NAME?.trim() || "Pixelroom";

export const APP_DESCRIPTION =
  "Explore image tools for resizing, compression, cropping, conversion, backgrounds, watermarks, rotation and passport photos. Find the right tool for your next edit.";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/+$/, "") || "";
