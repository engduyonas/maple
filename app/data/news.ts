export interface NewsArticle {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

export const newsArticles: NewsArticle[] = [
  {
    date: "07 April 2026",
    title: "Maple Leaf Foods Management Information Circular Now Available",
    excerpt:
      "Maple Leaf Foods published its management information circular and related shareholder materials as part of its annual governance cycle.",
    slug: "management-information-circular-now-available",
  },
  {
    date: "18 March 2026",
    title: "Turning Waste into Worth: Improving Diversion Practices",
    excerpt:
      "A new operational initiative is helping teams convert waste streams into valuable resources while reducing environmental impact.",
    slug: "turning-waste-into-worth",
  },
  {
    date: "12 February 2026",
    title: "Maple Leaf Foods Highlights Progress on Sustainability Commitments",
    excerpt:
      "The company shared updated progress on emissions, responsible sourcing, and programs that support safer, more resilient operations.",
    slug: "sustainability-commitments-progress",
  },
  {
    date: "20 January 2026",
    title: "Community Partnerships Expand to Address Food Insecurity",
    excerpt:
      "New community partnerships are expanding support for food access programs in multiple Canadian regions.",
    slug: "community-partnerships-food-insecurity",
  },
  {
    date: "04 December 2025",
    title: "Maple Leaf Foods Announces Expanded Career Path Programs",
    excerpt:
      "Enhanced development paths and learning opportunities are helping employees build long-term careers across the business.",
    slug: "expanded-career-path-programs",
  },
  {
    date: "15 October 2025",
    title: "Integrated Report Released with Updated ESG Metrics",
    excerpt:
      "The latest integrated report details performance across food safety, people, climate, and community outcomes.",
    slug: "integrated-report-updated-esg-metrics",
  },
];
