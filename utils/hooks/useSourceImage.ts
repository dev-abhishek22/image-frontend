"use client";

import { useEffect, useState } from "react";
import { getImageFile, getImageInfo } from "@/utils/api/images";
import { readImageDimensions } from "@/utils/image";
import type { SourceImage } from "@/types/processing";

type SourceState = {
  image: SourceImage | null;
  loading: boolean;
  error: string | null;
};

export default function useSourceImage(imageId: string) {
  const [state, setState] = useState<SourceState>({
    image: null,
    loading: true,
    error: null,
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;
    let url: string | null = null;
    let timedOut = false;
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 120_000);

    async function load() {
      try {
        const [info, blob] = await Promise.all([
          getImageInfo(imageId, controller.signal),
          getImageFile(imageId, controller.signal),
        ]);
        if (cancelled) return;
        url = URL.createObjectURL(blob);
        const dimensions = await readImageDimensions(url);
        if (cancelled) return;
        setState({
          image: {
            ...info,
            ...dimensions,
            previewUrl: url,
            size: blob.size,
            mimeType: blob.type || info.mimeType,
          },
          loading: false,
          error: null,
        });
      } catch (cause) {
        if (cancelled) return;
        controller.abort();
        if (url) URL.revokeObjectURL(url);
        setState({
          image: null,
          loading: false,
          error: timedOut
            ? "Loading your image took too long. Please try again."
            : cause instanceof Error
              ? cause.message
              : "Your image could not be loaded.",
        });
      } finally {
        window.clearTimeout(timeout);
      }
    }
    void load();
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      controller.abort();
      if (url) URL.revokeObjectURL(url);
    };
  }, [imageId, attempt]);

  function retry() {
    setState({ image: null, loading: true, error: null });
    setAttempt((current) => current + 1);
  }

  return { ...state, retry };
}
