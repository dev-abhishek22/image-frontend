import About from "@/views/About";
import StructuredData from "@/components/common/StructuredData";
import { APP_NAME } from "@/utils/env";
import { contentPageSchema, pageMetadata } from "@/utils/seo";

const description =
  "Learn about " +
  APP_NAME +
  ", our everyday image toolbox, the tools available today, and how previews, uploads and edited copies work.";

export const metadata = pageMetadata({
  title: "About",
  description,
  path: "/about",
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={contentPageSchema({
          path: "/about",
          label: "About",
          name: "About " + APP_NAME,
          description,
          type: "AboutPage",
        })}
      />
      <About appName={APP_NAME} />
    </>
  );
}
