import Resize from "@/views/Resize";
import StructuredData from "@/components/common/StructuredData";
import { pageMetadata, resizePageSchema } from "@/utils/seo";

export async function generateMetadata({
  searchParams,
}: PageProps<"/resize-image">) {
  const params = await searchParams;
  return pageMetadata({
    title: "Resize image online — JPG, PNG, WebP & AVIF",
    description:
      "Resize JPG, PNG, WebP and AVIF images to custom pixel dimensions. Keep the aspect ratio, preview the size, and download a resized copy.",
    path: "/resize-image",
    privatePage: params.imageId !== undefined,
  });
}

export default function Page() {
  return (
    <>
      <StructuredData data={resizePageSchema()} />
      <Resize />
    </>
  );
}
