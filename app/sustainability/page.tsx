import Link from "next/link";
import HeroBanner from "@/app/components/HeroBanner";
import SidePanel from "@/app/components/SidePanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Commitments | Maple Leaf Foods",
};

const pillars = [
  {
    title: "Environment",
    description: "Reducing environmental impact through clear goals, investment, and operational execution.",
    href: "/sustainability/smart-sustainable-farming",
  },
  {
    title: "Animal Care",
    description: "Maintaining and improving standards for responsible and humane animal care practices.",
    href: "/sustainability/resource-efficient-operations",
  },
  {
    title: "Good Food",
    description: "Delivering safe, high-quality, and nutritious products for evolving consumer needs.",
    href: "/sustainability/good-food",
  },
  {
    title: "People & Communities",
    description: "Supporting team members and helping address food insecurity in communities we serve.",
    href: "/sustainability/thriving-communities",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <HeroBanner
        title="Our Commitments"
        subtitle="Environment, care, nutrition, and community impact."
        backgroundImage="https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="max-w-4xl mb-14">
          <h2 className="text-3xl font-bold text-mccain-dark mb-4">
            Raise the Good in Food<span className="text-mccain-yellow">.</span>
          </h2>
          <p className="text-mccain-gray-dark leading-relaxed">
            Our commitments guide how we produce food, support our people, and build long-term value. We report
            progress transparently and keep improving through measurable action.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-mccain-green/30 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-mccain-dark">{pillar.title}</h3>
                <p className="text-sm text-mccain-gray-dark mt-2 leading-relaxed">{pillar.description}</p>
              </Link>
            ))}
          </div>

          <SidePanel
            relatedLinks={[
              { label: "Integrated Report", href: "/sustainability/reports-downloads" },
              { label: "Corporate Commitments", href: "https://www.mapleleaffoods.com/our-commitments/" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
