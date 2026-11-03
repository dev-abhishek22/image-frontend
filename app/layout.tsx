import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppLayout from "@/components/Layout/AppLayout";
import { APP_DESCRIPTION, APP_NAME } from "@/utils/env";
import { SITE_INDEXABLE, SITE_URL } from "@/utils/seo";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: {
    default: APP_NAME + " | Online image tools",
    template: "%s | " + APP_NAME,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  robots: { index: SITE_INDEXABLE, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppLayout appName={APP_NAME}>{children}</AppLayout>
      </body>
    </html>
  );
}
