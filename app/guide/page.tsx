import Guide from "@/views/Guide";
import StructuredData from "@/components/common/StructuredData";
import { APP_NAME } from "@/utils/env";
import { contentPageSchema, pageMetadata } from "@/utils/seo";

const description =
  "Learn when to resize, crop or compress an image, preserve its proportions, prepare photos for forms, and choose between JPG, PNG, WebP and AVIF.";

export const metadata = pageMetadata({
  title: "Image editing guides",
  description,
  path: "/guide",
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={contentPageSchema({
          path: "/guide",
          label: "Guides",
          name: "Image editing guides | " + APP_NAME,
          description,
          type: "CollectionPage",
        })}
      />
      <Guide appName={APP_NAME} />
    </>
  );
}
