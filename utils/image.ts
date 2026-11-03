export const MAX_IMAGE_UPLOAD_BYTES = 10 * 1024 * 1024;

const mimeTypes: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  avif: "image/avif",
};

export const IMAGE_UPLOAD_ACCEPT = [...new Set(Object.values(mimeTypes))].join(
  ",",
);

export function prepareImageUpload(file: File): File {
  if (file.size === 0) {
    throw new Error("This file is empty. Choose another image.");
  }

  if (file.size > MAX_IMAGE_UPLOAD_BYTES) {
    throw new Error("Your image is too large. Choose an image up to 10 MiB.");
  }

  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  const mimeType = file.type || mimeTypes[extension];

  if (!Object.values(mimeTypes).includes(mimeType)) {
    throw new Error("Choose a JPG, PNG, WebP or AVIF image.");
  }

  return file.type
    ? file
    : new File([file], file.name, {
        type: mimeType,
        lastModified: file.lastModified,
      });
}

export function readImageDimensions(
  url: string,
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const timeout = window.setTimeout(() => {
      image.onload = null;
      image.onerror = null;
      reject(
        new Error("This image could not be opened. Choose another image."),
      );
    }, 15_000);

    image.onload = () => {
      window.clearTimeout(timeout);
      if (image.naturalWidth < 1 || image.naturalHeight < 1) {
        reject(
          new Error("This image has invalid dimensions. Choose another image."),
        );
        return;
      }
      resolve({ width: image.naturalWidth, height: image.naturalHeight });
    };
    image.onerror = () => {
      window.clearTimeout(timeout);
      reject(
        new Error("This image could not be opened. Choose another image."),
      );
    };
    image.src = url;
  });
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  const value = bytes < 1024 * 1024 ? bytes / 1024 : bytes / (1024 * 1024);
  return (
    new Intl.NumberFormat("en", { maximumFractionDigits: 1 }).format(value) +
    (bytes < 1024 * 1024 ? " KB" : " MB")
  );
}
