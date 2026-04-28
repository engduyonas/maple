"use client";

import { usePathname } from "next/navigation";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

/** Standalone registration only when `/apply/:token` — plain `/apply` keeps header/footer */
function isApplyRegistrationRoute(pathname: string | null): boolean {
  if (!pathname || !pathname.startsWith("/apply/")) return false;
  const rest = pathname.slice("/apply/".length);
  return rest.length > 0 && !rest.includes("/");
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
