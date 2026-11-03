import ToolCatalog from "@/components/home/ToolCatalog";

export default function ToolsSection() {
  return (
    <section
      className="page-container pt-2 pb-14 sm:pb-16"
      id="tools"
      aria-labelledby="tools-title"
    >
      <h2 id="tools-title" className="sr-only">
        Explore all image tools
      </h2>
      <ToolCatalog />
      <p className="mt-6 text-center text-xs leading-6 text-muted">
        Start with an available tool, or explore the features of editors marked
        Coming next.
      </p>
    </section>
  );
}
