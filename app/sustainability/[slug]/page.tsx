import Link from "next/link";
import HeroBanner from "@/app/components/HeroBanner";
import SidePanel from "@/app/components/SidePanel";
import type { Metadata } from "next";

interface PillarData {
  title: string;
  description: string;
}

const pillarData: Record<string, PillarData> = {
  "smart-sustainable-farming": {
    title: "Environment",
    description:
      "Our environmental agenda focuses on reducing emissions, improving resource efficiency, and strengthening long-term resilience across operations and supply chains.",
  },
  "resource-efficient-operations": {
    title: "Animal Care",
    description:
      "We work continuously to strengthen animal care standards, governance, and transparent reporting as part of responsible food production.",
  },
  "good-food": {
    title: "Good Food",
    description:
      "We prioritize food safety, quality, and nutrition while evolving products to meet changing consumer expectations and dietary preferences.",
  },
  "thriving-communities": {
    title: "People & Communities",
    description:
      "Our programs support team well-being, inclusion, and community initiatives, including efforts to reduce food insecurity in Canada.",
  },
  "reports-downloads": {
    title: "Integrated Report",
    description:
      "Our integrated reporting shares progress across sustainability, people, operations, and governance priorities with transparent, measurable outcomes.",
  },
};

export async function generateStaticParams() {
  return Object.keys(pillarData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = pillarData[slug];
  return {
    title: data ? `${data.title} | Our Commitments | Maple Leaf Foods` : "Our Commitments | Maple Leaf Foods",
  };
}

export default async function SustainabilitySubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = pillarData[slug];

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-mccain-dark">Page not found</h1>
        <Link href="/sustainability" className="text-mccain-green mt-4 inline-block">
          Back to Our Commitments
        </Link>
      </div>
    );
  }

  return (
    <>
      <HeroBanner
        title={data.title}
        backgroundImage="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg text-mccain-gray-dark leading-relaxed">{data.description}</p>

            {slug === "reports-downloads" && (
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-mccain-dark">Available Resources</h3>
                {[
                  { label: "Integrated Report", href: "https://www.mapleleaffoods.com/" },
                  { label: "Sustainability Updates", href: "https://www.mapleleaffoods.com/our-commitments/" },
                ].map((resource) => (
                  <a
                    key={resource.label}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-mccain-gray rounded-lg hover:bg-mccain-green hover:text-white transition-colors group"
                  >
                    <svg className="w-5 h-5 text-mccain-green group-hover:text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-semibold text-sm">{resource.label}</span>
                  </a>
                ))}
              </div>
            )}

            <Link href="/sustainability" className="inline-flex items-center gap-2 text-mccain-green font-semibold text-sm">
              &larr; Back to Our Commitments
            </Link>
          </div>

          <SidePanel
            relatedLinks={[
              { label: "Our Commitments", href: "/sustainability" },
              { label: "Environment", href: "/sustainability/smart-sustainable-farming" },
              { label: "Animal Care", href: "/sustainability/resource-efficient-operations" },
              { label: "Good Food", href: "/sustainability/good-food" },
              { label: "People & Communities", href: "/sustainability/thriving-communities" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
