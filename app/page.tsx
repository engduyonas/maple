import Link from "next/link";
import Image from "next/image";
import { newsArticles } from "@/app/data/news";
import MapleLeafLogo from "@/app/components/MapleLeafLogo";

const searchLinks = [
  { label: "Job openings", href: "https://www.mapleleaffoods.com/careers/" },
  { label: "Our brands", href: "/about-us/our-business-brands" },
  { label: "Financial reports", href: "https://www.mapleleaffoods.com/investors/" },
  { label: "Latest news releases", href: "/information-centre/news" },
  { label: "Information on environmental commitments", href: "/sustainability" },
  { label: "Contact form and phone number", href: "/contact" },
];

const blueprintItems = [
  "Lead the Way",
  "Build Loved Brands",
  "Broaden our Impact",
  "Operate with Excellence",
  "Develop Extraordinary Talent",
];

const brands = [
  "Maple Leaf®",
  "Schneiders®",
  "Greenfield Natural Meat Co.®",
  "Fantino & Mondello",
  "Lunch Mate™",
  "Grab 'N Snack™",
  "Field Roast™",
  "LightLife®",
  "Mina® Halal",
];

const readNext = [
  { label: "Our Commitments", href: "/sustainability" },
  { label: "Our Brands", href: "/about-us/our-business-brands" },
  { label: "Our History", href: "/about-us/our-history" },
  { label: "Browse Careers", href: "https://www.mapleleaffoods.com/careers/" },
  { label: "Read our Blog", href: "/information-centre/news" },
  { label: "Stock info", href: "https://www.mapleleaffoods.com/investors/" },
];

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CircleArrow({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-mccain-green text-white ${className}`}>
      <ArrowIcon className="h-4 w-4" />
    </span>
  );
}

export default function HomePage() {
  const latestNews = newsArticles[0];

  return (
    <>
      <section className="relative bg-mccain-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <p className="text-sm font-medium tracking-wide text-white/85 sm:text-base">We&apos;re on a journey to</p>
          <h1 className="mt-3 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Raise the Good in Food
          </h1>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="relative aspect-21/9 w-full overflow-hidden sm:aspect-21/8 lg:aspect-21/7">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2400&q=80"
            alt="Family enjoying food together"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative -mt-16 ml-auto max-w-md rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-gray-100 sm:-mt-20 lg:p-6">
            <p className="text-sm font-bold text-mccain-dark">What are you looking for?</p>
            <ul className="mt-3 divide-y divide-gray-100">
              {searchLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    className="group flex items-center justify-between gap-4 py-2.5 text-sm font-semibold text-mccain-dark hover:text-mccain-green transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-mccain-green transition-transform group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold leading-snug text-mccain-dark sm:text-3xl lg:text-[2rem] lg:leading-[1.3]">
            We&apos;re a carbon neutral food company on a purposeful journey to Raise the Good in Food through better nutrition, safer food and workplaces, more humane animal care, and sustainability efforts that protect our planet.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mccain-gray-dark sm:text-lg">
            We care about our communities and have committed to reducing food insecurity in Canada.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mccain-gray-dark sm:text-lg">
            Join us on the journey. Let&apos;s build a better future, together.
          </p>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-mccain-gray-dark">Maple Leaf Foods&apos;</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-mccain-dark sm:text-5xl">Strategic Split</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="text-base leading-relaxed text-mccain-gray-dark sm:text-lg">
              <p>
                Maple Leaf Foods Inc. is entering a bold new chapter as a focused, purpose-driven, and protein-centric consumer packaged goods company.
              </p>
              <p className="mt-4">
                On October 1, Maple Leaf Foods completed the spin-off of the Company&apos;s pork operations as Canada Packers, Inc. — a new independent public company and a global leader in sustainably produced, premium quality, value-added pork.
              </p>
            </div>
            <div className="flex items-end">
              <Link
                href="/about-us/our-history"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-mccain-green hover:gap-4 transition-all"
              >
                Read More <CircleArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-mccain-green text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2400&q=80"
            alt="Solar panels in field"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-mccain-green via-mccain-green/85 to-mccain-green/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                We are
                <br />
                carbon neutral
              </h2>
            </div>
            <div className="text-base leading-relaxed text-white/90 sm:text-lg">
              <p>
                We know that the food we make leaves an environmental footprint and we are committed to taking meaningful action to protect the planet. Our vision is to be the most sustainable protein company on Earth because we need to help build a better food industry.
              </p>
              <p className="mt-4">
                Our sustainability commitments are central to our business and they guide us each step of the way — in the food we make, how we care for our animals, our people, our communities, and the planet.
              </p>
              <p className="mt-4 font-bold">We have a plan and we&apos;re sticking to it.</p>
              <Link
                href="/sustainability"
                className="mt-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-white hover:gap-4 transition-all"
              >
                Read more
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-mccain-green">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-mccain-gray-dark">The strategic compass for the organization</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-mccain-dark sm:text-5xl">Our Blueprint</h2>
              <p className="mt-6 text-base leading-relaxed text-mccain-gray-dark sm:text-lg">
                The Blueprint outlines our Company&apos;s five core strategies in our pursuit of delivering shared value for our stakeholders. With a passion to create shared value, we:
              </p>
              <ul className="mt-6 space-y-2 text-base text-mccain-dark sm:text-lg">
                {blueprintItems.map((item) => (
                  <li key={item} className="flex items-baseline gap-3">
                    <span className="text-mccain-green">—</span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about-us"
                className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-mccain-green hover:gap-4 transition-all"
              >
                Learn more <CircleArrow />
              </Link>
            </div>
            <div className="relative aspect-4/5 overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1600&q=80"
                alt="Team meeting at Maple Leaf Foods"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative aspect-4/3 overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
                alt="Maple Leaf Foods head office"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <p className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-sm bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                <span className="text-white/70">i</span>
                Maple Leaf Foods head office | Mississauga, ON
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-mccain-gray-dark">For more than 100 years</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-mccain-dark sm:text-5xl">About us</h2>
              <p className="mt-6 text-base leading-relaxed text-mccain-gray-dark sm:text-lg">
                For more than 100 years, we&apos;ve made delicious protein that Canadians love. Our history, drive, passion, and vision for the future is what sets us apart.
              </p>
              <Link
                href="/about-us"
                className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-mccain-green hover:gap-4 transition-all"
              >
                Learn more <CircleArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black tracking-tight text-mccain-dark sm:text-4xl">From our Blog</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
            <Link href="/information-centre/news" className="group block">
              <div className="relative aspect-16/10 overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80"
                  alt="Recycling and waste diversion"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <article className="flex flex-col justify-end">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-mccain-gray-dark">March 18, 2026</p>
              <h3 className="mt-3 text-xl font-black leading-tight text-mccain-dark sm:text-2xl">
                Turning waste into worth: How Maple Leaf Foods elevated our waste diversion practices
              </h3>
              <Link
                href="/information-centre/news"
                className="mt-6 inline-flex items-center gap-3 self-start text-sm font-bold uppercase tracking-[0.16em] text-mccain-green hover:gap-4 transition-all"
              >
                Read more <CircleArrow />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black tracking-tight text-mccain-dark sm:text-4xl">Latest News</h2>
          <div className="mt-8 max-w-3xl border-b border-gray-200 pb-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-mccain-gray-dark">
              {latestNews.date} &middot; News Releases
            </p>
            <h3 className="mt-3 text-xl font-black leading-tight text-mccain-dark sm:text-2xl">
              {latestNews.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-mccain-gray-dark">
              {latestNews.excerpt}
            </p>
            <Link
              href="/information-centre/news"
              className="mt-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-mccain-green hover:gap-4 transition-all"
            >
              Read <CircleArrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-sm">
              <div className="relative aspect-5/4 lg:aspect-16/12">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80"
                  alt="Career paths team members"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-mccain-dark via-mccain-dark/40 to-mccain-dark/10" />
              </div>
              <p className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-sm bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                <span className="text-white/70">i</span> Morag | Mississauga
              </p>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/85">Career paths at Maple Leaf Foods</p>
                <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                  Learn and grow with our dynamic team
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90">
                  Are you looking for a new position in which you can develop and advance? Explore our different job paths that can take you to career success and beyond.
                </p>
                <Link
                  href="https://www.mapleleaffoods.com/careers/"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-white hover:gap-4 transition-all"
                >
                  Explore more
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mccain-green text-white">
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-sm">
              <div className="relative aspect-5/4 lg:aspect-16/12">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
                  alt="Job search team"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-mccain-dark via-mccain-dark/40 to-mccain-dark/10" />
              </div>
              <p className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-sm bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                <span className="text-white/70">i</span> Team Members | Guelph
              </p>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/85">Start your job search here</p>
                <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                  If you&apos;re looking, we&apos;re hiring!
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90">
                  We&apos;re always on the lookout for new team members in our head office in Mississauga, Ontario, and our 25+ facilities across Canada and the United States.
                </p>
                <Link
                  href="https://www.mapleleaffoods.com/careers/"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-white hover:gap-4 transition-all"
                >
                  Apply online
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mccain-green text-white">
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-mccain-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-mccain-dark sm:text-5xl">Integrated Report</h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-mccain-gray-dark sm:text-lg">
                We&apos;re documenting all the changes we&apos;re making. See our progress in our latest Integrated Report.
              </p>
              <Link
                href="/sustainability/reports-downloads"
                className="mt-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-mccain-green hover:gap-4 transition-all"
              >
                <span>View report</span>
                <span className="text-xs font-medium normal-case tracking-normal text-mccain-gray-dark">22 Mb</span>
                <CircleArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-mccain-dark sm:text-4xl">
              We&apos;re a family of trusted and loved brands
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mccain-gray-dark sm:text-lg">
              At Maple Leaf Foods, we make delicious, and sustainable food to nourish Canadian families. We meet the needs of today&apos;s evolving palates and offer high-quality meat products, meat that&apos;s never been treated with antibiotics and plant-based protein options. Great food that there&apos;s no need to feel guilty about.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand) => (
              <Link
                key={brand}
                href="/about-us/our-business-brands"
                className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-sm border border-gray-200 bg-white p-4 text-center transition-all hover:-translate-y-1 hover:border-mccain-green hover:shadow-lg"
              >
                <MapleLeafLogo className="text-mccain-green/80 transition-transform group-hover:scale-110" size={36} />
                <p className="text-sm font-black leading-tight text-mccain-dark group-hover:text-mccain-green">
                  {brand}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/about-us/our-business-brands"
              className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-mccain-green hover:gap-4 transition-all"
            >
              See our brands <CircleArrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mccain-gray border-t border-gray-200 py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black tracking-tight text-mccain-dark sm:text-3xl">Fraudulent website alert</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-mccain-gray-dark sm:text-base">
            We have been made aware of a fraudulent website using the Maple Leaf name, logo and content to impersonate Maple Leaf Foods (&quot;MLF&quot;) in order to trick visitors into supplying sensitive personal or financial information. Internet users are cautioned to engage only with MLF&apos;s official websites including <span className="font-bold text-mccain-dark">www.mapleleaffoods.com</span> and <span className="font-bold text-mccain-dark">www.mapleleaf.ca</span>, and pages linked through these sites. The official MLF corporate website has many resources that will direct you to the product, service or assistance you need.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-mccain-green text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">What to</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Read Next</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {readNext.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="group flex items-center justify-between gap-4 rounded-sm border border-white/30 bg-white/5 px-5 py-5 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white hover:text-mccain-green"
              >
                <span>{item.label}</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-mccain-green">
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <MapleLeafLogo className="text-mccain-green" size={20} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mccain-gray-dark">
              World&apos;s first major carbon neutral food company
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
