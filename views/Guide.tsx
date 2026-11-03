import { getGuideHeader } from "@/components/guides/data/page";
import PageHeader from "@/components/common/PageHeader";
import GuideContents from "@/components/guides/GuideContents";
import GuideArticles from "@/components/guides/GuideArticles";
import FormatGuide from "@/components/guides/FormatGuide";
import CallToAction from "@/components/home/CallToAction";

export default function Guide({ appName }: { appName: string }) {
  return (
    <>
      <div className="page-container py-9 sm:py-12">
        <PageHeader {...getGuideHeader(appName)} />
        <div className="grid items-start gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-40">
            <GuideContents />
          </aside>
          <GuideArticles />
        </div>
      </div>
      <FormatGuide />
      <div className="pt-14 sm:pt-16">
        <CallToAction />
      </div>
    </>
  );
}
