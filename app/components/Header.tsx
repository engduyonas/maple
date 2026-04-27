"use client";

import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { mainNav } from "@/app/data/navigation";
import MapleLeafLogo from "@/app/components/MapleLeafLogo";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const lastTapRef = useRef<number>(0);
  const router = useRouter();

  const handleLogoTap = useCallback(
    (e: React.MouseEvent) => {
      const now = Date.now();
      if (now - lastTapRef.current < 500) {
        e.preventDefault();
        router.push("/admin");
        lastTapRef.current = 0;
        return;
      }
      lastTapRef.current = now;
    },
    [router]
  );

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-9 items-center justify-end gap-6 text-xs font-semibold text-mccain-gray-dark">
            <Link href="https://www.mapleleaffoods.com/careers/" target="_blank" className="hover:text-mccain-green transition-colors">
              Job Search
            </Link>
            <Link href="https://www.mapleleaffoods.com/investors/" target="_blank" className="hover:text-mccain-green transition-colors">
              Investors
            </Link>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-1.5 hover:text-mccain-green transition-colors"
              aria-label="Search"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              Search
            </button>
            <span className="border-l border-gray-200 pl-6">Fr</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" onClick={handleLogoTap} className="shrink-0 flex items-center gap-3 group">
            <MapleLeafLogo className="text-mccain-green transition-transform group-hover:scale-110" size={44} />
            <div className="leading-none">
              <p className="text-lg font-black tracking-tight text-mccain-dark">Maple Leaf Foods</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-mccain-green">Raise the Good in Food</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center">
            {mainNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative block px-3 xl:px-4 py-7 text-[13px] font-bold uppercase tracking-[0.06em] text-mccain-dark hover:text-mccain-green transition-colors after:absolute after:bottom-4 after:left-3 after:right-3 xl:after:left-4 xl:after:right-4 after:h-0.5 after:bg-mccain-green after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                >
                  {item.label}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-2xl min-w-[260px] py-2 border-t-4 border-mccain-green animate-[heroFadeIn_0.2s_ease-out]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        target={child.href.startsWith("http") ? "_blank" : undefined}
                        className="block px-5 py-2.5 text-sm font-semibold text-mccain-dark hover:bg-mccain-gray hover:text-mccain-green transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex lg:hidden items-center gap-2">
            <button
              className="p-2 text-mccain-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            {mainNav.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-0">
                <Link
                  href={item.href}
                  className="block py-3 text-sm font-semibold text-mccain-dark hover:text-mccain-green"
                  onClick={() => setMobileMenuOpen(false)}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-mccain-gray-dark hover:text-mccain-green"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
