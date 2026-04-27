export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "About us", href: "/about-us" },
      { label: "History", href: "/about-us/our-history" },
      { label: "Values", href: "/about-us" },
      { label: "Locations", href: "/contact" },
      { label: "Leadership Team", href: "/about-us/our-leadership" },
      { label: "Board of Directors", href: "/about-us/our-leadership" },
      { label: "Corporate Governance", href: "/about-us/our-leadership" },
    ],
  },
  {
    label: "Our Commitments",
    href: "/sustainability",
    children: [
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
    label: "Brands",
    href: "/about-us/our-business-brands",
    children: [
      { label: "Maple Leaf", href: "/about-us/our-business-brands" },
      { label: "Schneiders", href: "/about-us/our-business-brands" },
      { label: "Greenfield Natural Meat Co.", href: "/about-us/our-business-brands" },
      { label: "Field Roast", href: "/about-us/our-business-brands" },
      { label: "LightLife", href: "/about-us/our-business-brands" },
      { label: "Mina", href: "/about-us/our-business-brands" },
    ],
  },
  {
    label: "Stories",
    href: "/information-centre/news",
    children: [{ label: "Feature Articles", href: "/information-centre/news" }],
  },
  {
    label: "Careers",
    href: "https://www.mapleleaffoods.com/careers/",
    children: [
      { label: "Careers", href: "https://www.mapleleaffoods.com/careers/" },
      { label: "Job Search", href: "https://www.mapleleaffoods.com/careers/" },
      { label: "Job Alerts", href: "https://www.mapleleaffoods.com/careers/" },
      { label: "Career Paths", href: "https://www.mapleleaffoods.com/careers/" },
      { label: "Company Culture", href: "https://www.mapleleaffoods.com/careers/" },
    ],
  },
  {
    label: "Investors",
    href: "https://www.mapleleaffoods.com/investors/",
  },
  {
    label: "Media",
    href: "/information-centre/news",
    children: [
      { label: "Media Centre", href: "/information-centre/news" },
      { label: "Latest News", href: "/information-centre/news" },
      { label: "Photos", href: "/information-centre/news" },
      { label: "Fact Sheets", href: "/information-centre/news" },
      { label: "Logos", href: "/information-centre/news" },
      { label: "Protein Power Guide", href: "/information-centre/news" },
    ],
  },
  {
    label: "Canada Packers",
    href: "https://www.canadapackers.com/",
  },
];

export interface RegionLink {
  name: string;
  url: string;
}

export interface RegionGroup {
  region: string;
  links: RegionLink[];
}

export const retailLinks: RegionGroup[] = [
  {
    region: "Official Channels",
    links: [
      { name: "Corporate Website", url: "https://www.mapleleaffoods.com/" },
      { name: "Careers", url: "https://www.mapleleaffoods.com/careers/" },
      { name: "Investors", url: "https://www.mapleleaffoods.com/investors/" },
    ],
  },
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/maple-leaf-foods-inc", icon: "linkedin" },
  { name: "Corporate Site", url: "https://www.mapleleaffoods.com/", icon: "globe" },
];
