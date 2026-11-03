import { getAboutHeader } from "@/components/about/data/page";
import PageHeader from "@/components/common/PageHeader";
import AboutOverview from "@/components/about/AboutOverview";
import AboutImageFlow from "@/components/about/AboutImageFlow";
import CallToAction from "@/components/home/CallToAction";

export default function About({ appName }: { appName: string }) {
  return (
    <>
      <div className="page-container py-9 sm:py-12">
        <PageHeader {...getAboutHeader(appName)} />
        <AboutOverview appName={appName} />
      </div>
      <AboutImageFlow />
      <CallToAction />
    </>
  );
}
