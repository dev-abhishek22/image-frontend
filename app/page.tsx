import Home from "@/views/Home";
import StructuredData from "@/components/common/StructuredData";
import { APP_NAME } from "@/utils/env";
import { pageMetadata, websiteSchema } from "@/utils/seo";

export const metadata = pageMetadata({
  title: "Online image tools & photo editor",
  path: "/",
});

export default function Page() {
  return (
    <>
      <StructuredData data={websiteSchema()} />
      <Home appName={APP_NAME} />
    </>
  );
}
