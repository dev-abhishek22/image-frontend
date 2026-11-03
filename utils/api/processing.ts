import { api, isRecord } from "@/utils/api/client";
import type { ProcessedImage, ResizeValues } from "@/types/processing";

export async function resizeImage(
  imageId: string,
  values: ResizeValues,
  signal: AbortSignal,
): Promise<ProcessedImage> {
  const { data } = await api.post<unknown>(
    "process-image/" + encodeURIComponent(imageId) + "/process",
    {
      operations: [
        {
          type: "resize",
          params: {
            width: Number(values.width),
            height: Number(values.height),
            maintain_aspect_ratio: values.maintainAspectRatio,
          },
        },
      ],
    },
    { signal },
  );
  const output = isRecord(data) ? data.output : null;
  if (
    !isRecord(data) ||
    data.success !== true ||
    !Array.isArray(data.errors) ||
    data.errors.length !== 0 ||
    typeof data.processed_image_id !== "string" ||
    !data.processed_image_id.trim() ||
    !isRecord(output) ||
    !["width", "height", "size_bytes"].every(
      (key) => Number.isSafeInteger(output[key]) && Number(output[key]) > 0,
    ) ||
    typeof output.format !== "string" ||
    !/^[A-Za-z0-9]+$/.test(output.format)
  )
    throw new Error(
      "Resizing did not return a complete image. Please try again.",
    );

  return {
    imageId: data.processed_image_id,
    width: Number(output.width),
    height: Number(output.height),
    size: Number(output.size_bytes),
    format: output.format,
  };
}
