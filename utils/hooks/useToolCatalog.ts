"use client";

import { useState } from "react";
import { imageTools } from "@/data/tools";
import type { ToolCategory } from "@/types/image-tool";

export default function useToolCatalog() {
  const [category, setCategory] = useState<ToolCategory>("All tools");
  const [search, setSearch] = useState("");
  const query = search.trim().toLowerCase();
  const visibleTools = imageTools.filter(
    (tool) =>
      (category === "All tools" || tool.category === category) &&
      (tool.name + " " + tool.description + " " + tool.keywords)
        .toLowerCase()
        .includes(query),
  );

  const resetFilters = () => {
    setSearch("");
    setCategory("All tools");
  };

  return {
    category,
    setCategory,
    search,
    setSearch,
    visibleTools,
    resetFilters,
  };
}
