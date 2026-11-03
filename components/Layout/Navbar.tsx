"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/common/Logo";
import Icon from "@/components/common/Icon";
import ToolLink from "@/components/tools/ToolLink";
import ToolMenu from "@/components/Layout/ToolMenu";
import ToolToolbar from "@/components/Layout/ToolToolbar";
import { imageTools } from "@/data/tools";
import useToolMenu from "@/utils/hooks/useToolMenu";

export default function Navbar({ appName }: { appName: string }) {
  const pathname = usePathname();
  const {
    open: toolsOpen,
    headerRef,
    close: closeTools,
    toggle: toggleTools,
  } = useToolMenu();

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-line bg-white"
    >
      <div className="page-container flex h-[72px] items-center gap-6 max-[620px]:h-16 max-[620px]:gap-2">
        <Link
          href="/"
          aria-label={appName + " home"}
          onClick={closeTools}
          className="inline-flex min-w-0"
        >
          <Logo name={appName} />
        </Link>
        <nav
          className="ml-auto flex shrink-0 items-center gap-5 max-[620px]:gap-2"
          aria-label="Main navigation"
        >
          <div className="hidden items-center gap-5 min-[1200px]:flex">
            {imageTools.slice(0, 4).map((tool) => (
              <ToolLink
                key={tool.id}
                tool={tool}
                onNavigate={closeTools}
                className="inline-flex min-h-11 items-center text-xs font-medium text-muted hover:text-brand"
              >
                {tool.name}
              </ToolLink>
            ))}
          </div>
          <button
            type="button"
            aria-expanded={toolsOpen}
            aria-controls="all-tools-menu"
            className="hidden min-h-11 items-center gap-2 text-sm font-semibold hover:text-brand min-[621px]:inline-flex"
            onClick={(event) => toggleTools(event.currentTarget)}
          >
            All tools{" "}
            <Icon name={toolsOpen ? "close" : "menu"} width="16" height="16" />
          </button>
          <Link
            href="/guide"
            aria-current={pathname === "/guide" ? "page" : undefined}
            onClick={closeTools}
            className="hidden min-h-11 items-center text-sm text-muted hover:text-brand aria-[current=page]:font-semibold aria-[current=page]:text-brand min-[851px]:inline-flex"
          >
            Guides
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            onClick={closeTools}
            className="hidden min-h-11 items-center text-sm text-muted hover:text-brand aria-[current=page]:font-semibold aria-[current=page]:text-brand min-[851px]:inline-flex"
          >
            About
          </Link>
          <Link
            href="/upload"
            aria-label="Upload image"
            onClick={closeTools}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-brand px-4 text-xs font-semibold whitespace-nowrap text-white hover:bg-brand-dark max-[360px]:px-3"
          >
            <span className="max-[620px]:hidden">Upload image</span>
            <span className="min-[621px]:hidden">Upload</span>{" "}
            <Icon
              name="upload"
              width="15"
              height="15"
              className="max-[620px]:hidden"
            />
          </Link>
          <button
            type="button"
            aria-label={toolsOpen ? "Close tool menu" : "Open tool menu"}
            aria-expanded={toolsOpen}
            aria-controls="all-tools-menu"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg hover:bg-[#eef4f0] min-[621px]:hidden"
            onClick={(event) => toggleTools(event.currentTarget)}
          >
            <Icon name={toolsOpen ? "close" : "menu"} width="21" height="21" />
          </button>
        </nav>
      </div>
      <ToolToolbar onNavigate={closeTools} />
      {toolsOpen && (
        <>
          <button
            type="button"
            aria-label="Close tools overlay"
            tabIndex={-1}
            className="fixed inset-x-0 top-[120px] bottom-0 cursor-default bg-[#12271a33] max-[620px]:top-[112px]"
            onClick={closeTools}
          />
          <ToolMenu onNavigate={closeTools} />
        </>
      )}
    </header>
  );
}
