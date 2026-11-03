import { getFooterLinks } from "@/components/Layout/data/footer";
import { imageFormats } from "@/data/image-formats";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import Icon from "@/components/common/Icon";
import ToolLink from "@/components/tools/ToolLink";
import { toolGroups } from "@/data/tools";

export default function Footer({ appName }: { appName: string }) {
  return (
    <footer className="bg-[#172b23] text-[#c3d0c8]">
      <div className="page-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] lg:gap-7 lg:py-16">
        <div className="min-w-0">
          <Link
            href="/"
            className="inline-flex max-w-full text-white"
            aria-label={appName + " home"}
          >
            <Logo name={appName} compact />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7">
            {appName} brings everyday image tools together. Edit a photo,
            prepare a file, or find the right next step for your image.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-xs text-[#96b7a2]">
            <Icon name="image" width="16" height="16" />
            Made for your browser
          </span>
        </div>
        {toolGroups.map((group) => (
          <nav
            key={group.label}
            aria-label={group.label + " tools"}
            className="min-w-0"
          >
            <h2 className="mb-5 text-xs font-semibold tracking-[0.06em] text-white">
              {group.label}
            </h2>
            <ul className="grid gap-1">
              {group.tools.map((tool) => (
                <li key={tool.id}>
                  <ToolLink
                    tool={tool}
                    className="inline-flex min-h-10 items-center gap-2 text-left text-[13px] leading-6 transition-colors hover:text-white"
                  >
                    {tool.name}
                    {!tool.href && (
                      <span className="rounded border border-[#365244] px-1.5 text-[9px] leading-4 text-[#a6c6b1]">
                        Soon
                      </span>
                    )}
                  </ToolLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <nav aria-label="Explore and learn">
          <h2 className="mb-5 text-xs font-semibold tracking-[0.06em] text-white">
            Explore & learn
          </h2>
          <ul className="grid gap-1 text-[13px]">
            {getFooterLinks(appName).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-10 items-center leading-6 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-y border-[#31463b]">
        <div className="page-container flex flex-wrap items-center justify-between gap-4 py-5 text-xs leading-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[#91ad9b]">Supported uploads</span>
            {imageFormats.map(({ name: format }) => (
              <Link
                key={format}
                href="/guide#formats"
                className="font-mono hover:text-white"
              >
                {format}
              </Link>
            ))}
          </div>
          <Link
            href="/upload"
            className="inline-flex min-h-10 items-center gap-2 font-medium text-white"
          >
            Start with your image <Icon name="arrow" width="16" height="16" />
          </Link>
        </div>
      </div>
      <div className="page-container flex flex-wrap items-center justify-between gap-3 py-5 text-xs leading-6 text-[#a0b8a9]">
        <p>© {appName}. Your everyday image toolbox.</p>
        <a
          href="#top"
          className="inline-flex min-h-10 items-center gap-2 hover:text-white"
        >
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
