import Link from "next/link";
import type { BreadcrumbItem } from "@/types/content";

export default function Breadcrumbs({
  items,
}: {
  items: readonly BreadcrumbItem[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7 text-xs leading-6 text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={item.label} className="inline-flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-[#9da894]">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
