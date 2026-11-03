"use client";

import useSearchShortcut from "@/utils/hooks/useSearchShortcut";
import Icon from "@/components/common/Icon";
import { toolCategories } from "@/data/tools";
import type { ToolCategory } from "@/types/image-tool";

type ToolFiltersProps = {
  category: ToolCategory;
  search: string;
  onCategoryChange: (category: ToolCategory) => void;
  onSearchChange: (search: string) => void;
};

export default function ToolFilters({
  category,
  search,
  onCategoryChange,
  onSearchChange,
}: ToolFiltersProps) {
  const searchRef = useSearchShortcut();
  return (
    <div className="mt-5 mb-5 flex flex-wrap items-center justify-between gap-4">
      <div
        className="flex flex-wrap gap-1"
        role="group"
        aria-label="Filter image tools"
      >
        {toolCategories.map((item) => (
          <button
            key={item}
            type="button"
            className="min-h-11 rounded-lg px-3 text-xs font-medium text-muted transition-colors hover:bg-[#f0f4eb] hover:text-brand aria-pressed:bg-[#eaf1e4] aria-pressed:text-brand-dark sm:text-[13px]"
            aria-pressed={category === item}
            onClick={() => onCategoryChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex h-11 w-full items-center gap-2.5 rounded-lg border border-line bg-background px-3 text-muted focus-within:border-brand sm:w-60">
        <Icon name="search" width="18" height="18" />
        <label className="sr-only" htmlFor="tool-search">
          Search image tools
        </label>
        <input
          id="tool-search"
          ref={searchRef}
          className="w-full min-w-0 bg-transparent text-base text-foreground outline-none placeholder:text-muted focus-visible:outline-none sm:text-sm"
          type="search"
          placeholder="Search tools…"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        {!search && (
          <kbd
            className="hidden size-5 shrink-0 place-items-center rounded border border-line text-xs sm:grid"
            aria-hidden="true"
          >
            /
          </kbd>
        )}
      </div>
    </div>
  );
}
