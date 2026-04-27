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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mapleleaffoods.com"),
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
    url: "https://www.mapleleaffoods.com",
    siteName: "Maple Leaf Foods",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Leaf Foods | Raise the Good in Food",
    description:
      "Maple Leaf Foods is on a journey to Raise the Good in Food.",
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
