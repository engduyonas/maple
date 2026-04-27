import Link from "next/link";
import MapleLeafLogo from "@/app/components/MapleLeafLogo";

const footerColumns = [
  {
    title: "About Us",
    links: [
      { label: "History", href: "/about-us/our-history" },
      { label: "Values", href: "/about-us" },
      { label: "Locations", href: "/contact" },
      { label: "Leadership Team", href: "/about-us/our-leadership" },
      { label: "Board of Directors", href: "/about-us/our-leadership" },
      { label: "Corporate Governance", href: "/about-us/our-leadership" },
      { label: "Doing Business with Us", href: "/about-us" },
    ],
  },
  {
    title: "Our Commitments",
    links: [
      { label: "Our Commitments", href: "/sustainability" },
      { label: "Environment", href: "/sustainability/smart-sustainable-farming" },
      { label: "Animal Care", href: "/sustainability/resource-efficient-operations" },
      { label: "Good Food", href: "/sustainability/good-food" },
      { label: "Safe Food", href: "/sustainability/good-food" },
      { label: "People", href: "/sustainability/thriving-communities" },
      { label: "Communities", href: "/sustainability/thriving-communities" },
      { label: "Downloads", href: "/sustainability/reports-downloads" },
      { label: "Integrated Report", href: "/sustainability/reports-downloads" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "Brands", href: "/about-us/our-business-brands" },
      { label: "Maple Leaf®", href: "/about-us/our-business-brands" },
      { label: "Schneiders®", href: "/about-us/our-business-brands" },
      { label: "Greenfield Natural Meat Co.®", href: "/about-us/our-business-brands" },
      { label: "Mighty Protein™", href: "/about-us/our-business-brands" },
      { label: "Field Roast™", href: "/about-us/our-business-brands" },
      { label: "LightLife®", href: "/about-us/our-business-brands" },
      { label: "Mina®", href: "/about-us/our-business-brands" },
      { label: "Think FOODSERVICE", href: "/about-us/our-business-brands" },
    ],
  },
  {
    title: "Stories",
    links: [
      { label: "Feature Articles", href: "/information-centre/news" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Careers", href: "https://www.mapleleaffoods.com/careers/" },
      { label: "Job Search", href: "https://www.mapleleaffoods.com/careers/" },
      { label: "Job Alerts", href: "https://www.mapleleaffoods.com/careers/" },
      { label: "Career Paths", href: "https://www.mapleleaffoods.com/careers/" },
      { label: "Company Culture", href: "https://www.mapleleaffoods.com/careers/" },
      { label: "Career Development", href: "https://www.mapleleaffoods.com/careers/" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Investor Information", href: "https://www.mapleleaffoods.com/investors/" },
      { label: "Canada Packers Spin-Off", href: "https://www.canadapackers.com/" },
    ],
  },
  {
    title: "Media",
    links: [
      { label: "Media", href: "/information-centre/news" },
      { label: "News Releases", href: "/information-centre/news" },
      { label: "Photos", href: "/information-centre/news" },
      { label: "Fact Sheets", href: "/information-centre/news" },
      { label: "Logos", href: "/information-centre/news" },
      { label: "Protein Power Guide", href: "/information-centre/news" },
    ],
  },
];

const legalLinks = [
  { label: "Consumer Alerts", href: "#" },
  { label: "Terms of Use", href: "https://www.mapleleaffoods.com/terms-of-use/" },
  { label: "Accessibility", href: "https://www.mapleleaffoods.com/accessibility/" },
  { label: "Accessibility Plan", href: "https://www.mapleleaffoods.com/accessibility/" },
  { label: "Privacy Policy", href: "https://www.mapleleaffoods.com/privacy-policy/" },
  { label: "Employee Privacy Notice", href: "https://www.mapleleaffoods.com/privacy-policy/" },
  { label: "Social Media House Rules", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-mccain-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <MapleLeafLogo className="text-mccain-green" size={48} />
              <div>
                <p className="text-2xl font-black tracking-tight">Maple Leaf Foods</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-mccain-green">
                  Raise the Good in Food
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
              World&apos;s first major carbon neutral food company on a journey to be the most sustainable protein company on earth.
            </p>
          </div>

          <div className="lg:text-right">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Stay in Touch</p>
            <div className="mt-4 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="https://x.com/"
                target="_blank"
                aria-label="X / Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white hover:bg-white hover:text-mccain-dark"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/maple-leaf-foods-inc-/"
                target="_blank"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white hover:bg-white hover:text-mccain-dark"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm12.5 10.27h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition-colors hover:border-white hover:bg-white hover:text-mccain-dark"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      className="block text-xs leading-relaxed text-white/55 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-5 pt-8 text-xs text-white/50">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="max-w-3xl leading-relaxed">
            Maple Leaf Foods Inc. (&quot;Maple Leaf Foods&quot;) is a carbon neutral company with a vision to be the most sustainable protein company on earth, responsibly producing food products under leading brands.
          </p>
          <p>&copy;2009&ndash;{new Date().getFullYear()} Maple Leaf Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
