import axios from "axios";
import { API_BASE_URL } from "@/utils/env";

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120_000,
  adapter: "fetch",
  fetchOptions: { cache: "no-store" },
});

export function apiUrl(path: string): string {
  if (!API_BASE_URL)
    throw new Error("The image service is not configured yet.");
  return api.getUri({ url: path });
}

api.interceptors.request.use((config) => {
  if (!API_BASE_URL)
    throw new Error("The image service is not configured yet.");
  return config;
});

api.interceptors.response.use(
  (response) => {
    if (response.config.responseType !== "blob") {
      if (!isRecord(response.data) || !("data" in response.data)) {
        throw new Error("The image service returned an unexpected response.");
      }
      response.data = response.data.data;
    }
    return response;
  },
  async (error: unknown) => {
    if (axios.isCancel(error) || !axios.isAxiosError(error)) throw error;
    if (!error.response) {
      throw new Error(
        error.code === "ECONNABORTED" || error.code === "ETIMEDOUT"
          ? "The image service took too long. Please try again."
          : "We could not reach the image service. Please try again.",
      );
    }

    let payload: unknown = error.response.data;
    if (payload instanceof Blob) {
      payload = await payload
        .text()
        .then(JSON.parse)
        .catch(() => null);
    }
    const message = isRecord(payload) ? payload.message : null;
    const messages = Array.isArray(message)
      ? message.filter((value): value is string => typeof value === "string")
      : typeof message === "string"
        ? [message]
        : [];
    throw new Error(
      (error.response.status < 500 && messages.join(" ")) ||
        "The image service could not complete your request. Please try again.",
    );
  },
);
