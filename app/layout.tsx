import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import AuthProvider from "@/app/components/AuthProvider";
import SiteChrome from "@/app/components/SiteChrome";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description =
  "Maple Leaf Foods is on a journey to Raise the Good in Food through better nutrition, safer food, humane animal care, and sustainability.";

const ogImage = {
  url: "/opengraph-image" as const,
  width: 1200,
  height: 630,
  type: "image/png" as const,
  alt: "Maple Leaf Foods | Raise the Good in Food",
};

/**
 * Vercel sets VERCEL_URL to the *deployment* hostname (e.g. my-app-abc123.vercel.app),
 * not the project alias (e.g. my-app.vercel.app). Public scrapers (Telegram, etc.) often
 * need og:image and og:url on the same host as the shared link — so we prefer the
 * request Host (and forwarded headers behind proxies) over process.env.VERCEL_URL.
 */
function metadataBaseFromEnv(): URL {
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return new URL(fromEnv.startsWith("http") ? fromEnv : `https://${fromEnv}`);
  }
  return new URL("https://www.mapleleaffoods.com");
}

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host =
    h.get("x-forwarded-host")?.split(",")[0]?.trim() ||
    h.get("host") ||
    null;
  const proto = h.get("x-forwarded-proto")?.split(",")[0]?.trim() || "https";

  const siteUrl = host
    ? new URL(`${proto}://${host}`)
    : metadataBaseFromEnv();

  return {
    metadataBase: siteUrl,
    title: "Maple Leaf Foods | Raise the Good in Food",
    description,
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: "Maple Leaf Foods | Raise the Good in Food",
      description,
      url: siteUrl,
      siteName: "Maple Leaf Foods",
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: "Maple Leaf Foods | Raise the Good in Food",
      description,
      images: [ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          <SiteChrome>{children}</SiteChrome>
        </AuthProvider>
      </body>
    </html>
  );
}
