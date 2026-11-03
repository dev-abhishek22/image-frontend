import { api, apiUrl, isRecord } from "@/utils/api/client";
import type { UploadedImage } from "@/types/image";
import type { ImageInfo } from "@/types/processing";

const imagePath = (imageId: string) => "images/" + encodeURIComponent(imageId);

export async function uploadImage(
  file: File,
  signal: AbortSignal,
): Promise<UploadedImage> {
  const form = new FormData();
  form.append("file", file, file.name);
  const { data } = await api.postForm<unknown>("images/upload", form, {
    signal,
  });
  if (!isRecord(data) || typeof data.id !== "string" || !data.id.trim()) {
    throw new Error("The upload service did not return an image ID.");
  }
  return { id: data.id };
}

export function imageFileUrl(imageId: string): string {
  return apiUrl(imagePath(imageId) + "/file");
}

export async function getImageInfo(
  imageId: string,
  signal: AbortSignal,
): Promise<ImageInfo> {
  const { data } = await api.get<unknown>(imagePath(imageId), { signal });
  if (
    !isRecord(data) ||
    data.id !== imageId ||
    typeof data.originalName !== "string" ||
    !data.originalName ||
    typeof data.mimeType !== "string" ||
    typeof data.size !== "string" ||
    !/^\d+$/.test(data.size) ||
    !Number.isSafeInteger(Number(data.size)) ||
    Number(data.size) < 1
  )
    throw new Error("The image service returned incomplete image details.");

  return {
    id: imageId,
    name: data.originalName,
    mimeType: data.mimeType,
    size: Number(data.size),
  };
}

export async function getImageFile(
  imageId: string,
  signal: AbortSignal,
): Promise<Blob> {
  const { data } = await api.get<Blob>(imagePath(imageId) + "/file", {
    signal,
    responseType: "blob",
  });
  if (
    !(data instanceof Blob) ||
    !data.size ||
    !data.type.startsWith("image/")
  ) {
    throw new Error("The image service did not return a readable image file.");
  }
  return data;
}
