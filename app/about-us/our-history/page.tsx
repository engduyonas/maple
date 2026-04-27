import HeroBanner from "@/app/components/HeroBanner";
import SidePanel from "@/app/components/SidePanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our History | Maple Leaf Foods",
};

export default function HistoryPage() {
  return (
    <>
      <HeroBanner
        title="Our History"
        backgroundImage="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-mccain-dark mb-4">
                More than a century of food leadership<span className="text-mccain-yellow">.</span>
              </h2>
              <p className="text-mccain-gray-dark leading-relaxed mb-4">
                Maple Leaf Foods has served Canadian families for generations, growing from legacy meat businesses into
                a modern consumer packaged goods company focused on trusted protein brands.
              </p>
              <p className="text-mccain-gray-dark leading-relaxed">
                Today, the business continues to evolve with a clear purpose: Raise the Good in Food through safer
                food, better nutrition, responsible operations, and meaningful community impact.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-mccain-dark mb-4">
                Building for the future<span className="text-mccain-yellow">.</span>
              </h2>
              <p className="text-mccain-gray-dark leading-relaxed mb-4">
                Recent years have strengthened the company&apos;s focus on a purpose-led strategy, including sustainability
                programs, operational excellence, and portfolio development aligned with changing consumer needs.
              </p>
              <p className="text-mccain-gray-dark leading-relaxed">
                With a strong foundation and a clear long-term vision, Maple Leaf Foods continues to shape the future
                of protein in Canada and beyond.
              </p>
            </section>
          </div>

          <SidePanel
            relatedLinks={[
              { label: "Purpose & Values", href: "/about-us" },
              { label: "Our Business & Brands", href: "/about-us/our-business-brands" },
              { label: "Leadership Team", href: "/about-us/our-leadership" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
