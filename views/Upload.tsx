import { uploadHeader } from "@/components/upload/data/page";
import ToolPageHeader from "@/components/common/ToolPageHeader";
import ImageUpload from "@/components/upload/ImageUpload";

export default function Upload() {
  return (
    <section className="page-container py-9 sm:py-12" aria-label="Image upload">
      <ToolPageHeader {...uploadHeader} />
      <ImageUpload />
    </section>
  );
}
