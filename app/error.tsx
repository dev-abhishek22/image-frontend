"use client";

import Link from "next/link";
import Button from "@/components/common/Button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="page-container py-20 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        This page couldn’t load.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted">
        Try again to reopen the page. You may need to choose your image again if
        the editor was interrupted.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-6">
        <Button onClick={reset}>Try again</Button>
        <Link
          href="/#tools"
          className="text-sm font-medium text-brand hover:underline"
        >
          Back to all tools
        </Link>
      </div>
    </section>
  );
}
