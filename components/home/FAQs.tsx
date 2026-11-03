import FAQSection from "@/components/common/FAQSection";
import { getHomeFaqs } from "@/components/home/data/faqs";

export default function FAQs({ appName }: { appName: string }) {
  return (
    <FAQSection
      id="questions"
      title="Good questions. Clear answers."
      description="Know what to expect before your first upload."
      items={getHomeFaqs(appName)}
    />
  );
}
