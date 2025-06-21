// utils/schema/articleSchema.ts
export const getArticleSchema = ({
  headline,
  section,
  description,
  datePublished,
  dateModified,
  image,
  keywords,
  wordCount,
  slug,
}: {
  headline: string;
  section: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
  keywords: string;
  wordCount: number;
  slug: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  articleSection: section,
  description,
  datePublished,
  dateModified,
  keywords,
  wordCount,
  image,
  author: {
    "@type": "Person",
    name: "Tadeo Martinez",
    url: "https://latinowebstudio.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Latino Web Studio",
    logo: {
      "@type": "ImageObject",
      url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://latinowebstudio.com/blog/${slug}`,
  },
});
