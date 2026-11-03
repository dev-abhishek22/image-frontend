import HeroSection from "@/components/home/HeroSection";
import ToolsSection from "@/components/home/ToolsSection";
import UseCases from "@/components/home/UseCases";
import PlatformFeatures from "@/components/home/PlatformFeatures";
import HowItWorks from "@/components/home/HowItWorks";
import FormatGuide from "@/components/guides/FormatGuide";
import EditingGuides from "@/components/home/EditingGuides";
import FAQs from "@/components/home/FAQs";
import CallToAction from "@/components/home/CallToAction";

export default function Home({ appName }: { appName: string }) {
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_top,#e9f2ed,transparent_65%)]">
        <HeroSection />
        <ToolsSection />
      </div>
      <UseCases />
      <PlatformFeatures appName={appName} />
      <HowItWorks />
      <FormatGuide />
      <EditingGuides />
      <FAQs appName={appName} />
      <CallToAction />
    </>
  );
}
