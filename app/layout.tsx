import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AuthProvider from "@/app/components/AuthProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/** Absolute site URL for og:url and og:image on Vercel and custom domains. */
function getMetadataBase(): URL {
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return new URL(fromEnv.startsWith("http") ? fromEnv : `https://${fromEnv}`);
  }
  return new URL("https://www.mapleleaffoods.com");
}

const siteUrl = getMetadataBase();

const ogImage = {
  url: "/opengraph-image" as const,
  width: 1200,
  height: 630,
  type: "image/png" as const,
  alt: "Maple Leaf Foods | Raise the Good in Food",
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Maple Leaf Foods | Raise the Good in Food",
  description:
    "Maple Leaf Foods is on a journey to Raise the Good in Food through better nutrition, safer food, humane animal care, and sustainability.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Maple Leaf Foods | Raise the Good in Food",
    description:
      "Maple Leaf Foods is on a journey to Raise the Good in Food through better nutrition, safer food, humane animal care, and sustainability.",
    url: siteUrl,
    siteName: "Maple Leaf Foods",
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Leaf Foods | Raise the Good in Food",
    description:
      "Maple Leaf Foods is on a journey to Raise the Good in Food through better nutrition, safer food, humane animal care, and sustainability.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
