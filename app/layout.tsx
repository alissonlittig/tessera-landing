import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE_URL, asset } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

const title = "Tessera: status pages your customers trust";
const description = "Monitor uptime, publish incident updates and keep customers informed. Tessera is a fictional SaaS landing page built with Next.js, Tailwind and MDX.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title: { default: title, template: "%s · Tessera" },
  description,
  alternates: { canonical: "./" },
  icons: { icon: asset("/icon.svg") },
  openGraph: { type: "website", siteName: "Tessera", title, description, url: SITE_URL + "/", images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: "Tessera status pages" }] },
  twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og.png`] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f6f4ee" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
