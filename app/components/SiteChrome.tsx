"use client";

import { usePathname } from "next/navigation";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

function isApplyRegistrationRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname === "/apply" || pathname.startsWith("/apply/");
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (isApplyRegistrationRoute(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
