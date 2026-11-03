import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: breadcrumb }]}
      />
      <span className="eyebrow text-brand">{eyebrow}</span>
      <h1 className="mt-4 max-w-4xl text-[clamp(34px,4.5vw,52px)] leading-[1.1] font-semibold tracking-[-1.5px] sm:tracking-[-2px]">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}
