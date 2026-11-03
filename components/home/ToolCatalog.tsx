"use client";

import useToolCatalog from "@/utils/hooks/useToolCatalog";
import Icon from "@/components/common/Icon";
import ToolIcon from "@/components/common/ToolIcon";
import ToolCard from "@/components/home/ToolCard";
import { useToolDialog } from "@/components/tools/ToolDialogProvider";
import ToolFilters from "@/components/home/ToolFilters";

export default function ToolCatalog() {
  const {
    category,
    setCategory,
    search,
    setSearch,
    visibleTools,
    resetFilters,
  } = useToolCatalog();

  const openTool = useToolDialog();

  return (
    <>
      <ToolFilters
        category={category}
        search={search}
        onCategoryChange={setCategory}
        onSearchChange={setSearch}
      />
      <p className="sr-only" role="status">
        {visibleTools.length} {visibleTools.length === 1 ? "tool" : "tools"}{" "}
        found
      </p>
      <div className="grid grid-cols-1 gap-4 min-[540px]:grid-cols-2 min-[1000px]:grid-cols-4">
        {visibleTools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} onSelect={openTool} />
        ))}
      </div>
      {visibleTools.length === 0 && (
        <div className="flex flex-col items-center px-5 pt-[45px] pb-[60px] text-center">
          <ToolIcon name="search" iconSize={24} />
          <h3 className="mt-4 mb-[6px] text-[18px] font-medium">
            No tools found this time.
          </h3>
          <p className="mb-5 text-[13px] text-muted">
            Try another word or explore the full toolbox.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2.5 bg-transparent p-0 text-[12px] font-[550] text-[#4b5a4c] hover:text-brand"
            onClick={resetFilters}
          >
            Show all tools <Icon name="arrow" width="16" height="16" />
          </button>
        </div>
      )}
    </>
  );
}
