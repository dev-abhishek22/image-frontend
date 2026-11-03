import type { ReactNode } from "react";
import Navbar from "@/components/Layout/Navbar";
import ToolDialogProvider from "@/components/tools/ToolDialogProvider";
import Footer from "@/components/Layout/Footer";

export default function AppLayout({
  appName,
  children,
}: {
  appName: string;
  children: ReactNode;
}) {
  return (
    <ToolDialogProvider>
      <a
        className="fixed top-2.5 left-2.5 z-100 -translate-y-[160%] rounded-lg bg-brand-dark px-[18px] py-3 text-white focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <div id="top" />
      <Navbar appName={appName} />
      <main id="main" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer appName={appName} />
    </ToolDialogProvider>
  );
}
