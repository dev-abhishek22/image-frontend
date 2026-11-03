import { resizeHeader } from "@/components/resize/data/page";
import { Suspense } from "react";
import { connection } from "next/server";
import ToolPageHeader from "@/components/common/ToolPageHeader";
import FAQSection from "@/components/common/FAQSection";
import ResizeWorkspace from "@/components/resize/ResizeWorkspace";
import ResizeGuide from "@/components/resize/ResizeGuide";
import { resizeFaqs } from "@/components/resize/data/faqs";

async function RequestWorkspace() {
  await connection();
  return <ResizeWorkspace />;
}

export default function Resize() {
  return (
    <>
      <section
        className="page-container py-9 sm:py-12"
        aria-label="Image resizer"
      >
        <ToolPageHeader {...resizeHeader} />
        <Suspense
          fallback={
            <div
              className="min-h-80 rounded-2xl border border-line bg-white p-8 text-sm text-muted"
              role="status"
            >
              Loading the resize tool…
            </div>
          }
        >
          <RequestWorkspace />
        </Suspense>
        <p className="mt-6 text-xs leading-6 text-muted">
          Choose your image and adjust the settings locally. Select Resize image
          to upload your original and create a separate result.
        </p>
      </section>
      <ResizeGuide />
      <FAQSection
        id="resize-questions"
        title="A few things about resizing."
        description="Dimensions, proportions, formats and what to expect from your result."
        items={resizeFaqs}
      />
    </>
  );
}
