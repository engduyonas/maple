"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
