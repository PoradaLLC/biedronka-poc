import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.GITHUB_PAGES === "true"
    ? "https://bzuracyber.github.io/biedronka-poc"
    : "http://localhost:3000";
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const display = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const ui = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Biedronka Deli - Authentic Polish Deli & Grocery in Stroudsburg, PA",
  description:
    "Authentic Polish deli and grocery store in Stroudsburg, PA. Fresh kielbasa, pierogi, smoked meats, Polish pastries from NYC bakeries, imported goods, and a hot food bar. Serving the Pocono Mountains region.",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: `${publicBasePath}/favicon.png`, type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: `${publicBasePath}/apple-touch-icon.png`, type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "Biedronka Deli",
    description:
      "Authentic Polish deli and grocery in Stroudsburg, PA. Fresh kielbasa, pierogi, pastries, imported groceries, and hot food.",
    url: siteUrl,
    siteName: "Biedronka Deli",
    images: [
      {
        url: `${siteUrl}/images/social-preview.png`,
        width: 1200,
        height: 630,
        alt: "Biedronka Deli logo and Polish deli preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biedronka Deli",
    description: "Authentic Polish deli and grocery in Stroudsburg, PA.",
    images: [`${siteUrl}/images/social-preview.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable}`}>
      <body>{children}</body>
    </html>
  );
}
