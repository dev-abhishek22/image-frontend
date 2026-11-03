import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";

export default function NotFound() {
  return (
    <section className="page-container py-24 text-center">
      <span className="eyebrow">PAGE NOT FOUND · 404</span>
      <h1 className="mt-5 text-4xl font-semibold tracking-[-1.5px] sm:text-5xl">
        A little outside the frame.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted">
        We couldn’t find that page. Head back to the toolbox to find your next
        edit.
      </p>
      <Button href="/#tools" className="mt-8">
        Explore image tools <Icon name="arrow" width="18" height="18" />
      </Button>
    </section>
  );
}
