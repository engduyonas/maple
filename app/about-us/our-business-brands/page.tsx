import HeroBanner from "@/app/components/HeroBanner";
import SidePanel from "@/app/components/SidePanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Business & Brands | Maple Leaf Foods",
};

const stats = [
  { value: "100+ years", label: "of food leadership in Canada" },
  { value: "25+", label: "facilities across Canada and the U.S." },
  { value: "Carbon Neutral", label: "company designation maintained" },
  { value: "Purpose-led", label: "approach to quality protein foods" },
];

const brands = [
  "Maple Leaf",
  "Schneiders",
  "Greenfield Natural Meat Co.",
  "Mina",
  "Lunch Mate",
  "Field Roast",
  "Lightlife",
  "Fantino & Mondello",
];

export default function BusinessBrandsPage() {
  return (
    <>
      <HeroBanner
        title="Our Business & Brands"
        backgroundImage="https://images.unsplash.com/photo-1523293836414-f04e712e1e67?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-lg text-mccain-gray-dark leading-relaxed max-w-4xl mb-12">
          Maple Leaf Foods is a purpose-driven, protein-focused company building trusted brands for Canadian families
          while evolving for changing tastes, nutrition priorities, and sustainability expectations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-2xl font-bold text-mccain-green">{stat.value}</p>
              <p className="text-sm text-mccain-gray-dark mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            <section>
              <h2 className="text-3xl font-bold text-mccain-dark mb-4">
                Built on Trust<span className="text-mccain-yellow">.</span>
              </h2>
              <p className="text-mccain-gray-dark leading-relaxed">
                Our portfolio combines heritage brands with innovation to serve households, foodservice operators, and
                evolving protein preferences. Across every category, we focus on quality, food safety, and consistent
                value for consumers.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-mccain-dark mb-6">
                Our Brands<span className="text-mccain-yellow">.</span>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {brands.map((brand) => (
                  <div key={brand} className="bg-white border border-gray-200 rounded-xl p-4">
                    <p className="font-semibold text-mccain-dark">{brand}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <SidePanel
            relatedLinks={[
              { label: "Leadership", href: "/about-us/our-leadership" },
              { label: "Purpose & Values", href: "/about-us" },
              { label: "Corporate Site", href: "https://www.mapleleaffoods.com/" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
