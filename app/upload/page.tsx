import Upload from "@/views/Upload";
import { pageMetadata } from "@/utils/seo";

export const metadata = pageMetadata({
  title: "Upload an image",
  description:
    "Upload a JPG, PNG, WebP or AVIF image and preview your original before editing.",
  path: "/upload",
  privatePage: true,
});

export default function Page() {
  return <Upload />;
}
