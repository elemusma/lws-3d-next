import Link from "next/link";
import ContentBlock from "../components/content-block";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Practice Areas | Latino Web Studio – SEO & Web Design for Experts",
  description:
    "Explore our web design and SEO services for expert witnesses across industries, including law, medical, engineering, and appraisals.",
  openGraph: {
    title: "Practice Areas | Latino Web Studio – SEO & Web Design for Experts",
    description:
      "SEO and web design services for expert witnesses in law, medical, engineering, and more. Get found by attorneys with targeted content and fast-loading websites.",
    url: "https://latinowebstudio.com/practice-areas",
    type: "website",
    images: [
      {
        url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
        width: 1200,
        height: 630,
        alt: "Latino Web Studio Practice Areas",
      },
    ],
  },
};

export default function PracticeAreasPage() {
  return (
    <>
    <Head>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Practice Areas | Latino Web Studio",
      "url": "https://latinowebstudio.com/practice-areas",
      "description":
        "Explore Latino Web Studio's SEO and web design services for expert witnesses in law, medicine, engineering, and more.",
      "inLanguage": "en",
      "mainEntity": {
        "@type": "Organization",
        "name": "Latino Web Studio",
        "url": "https://latinowebstudio.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://latinowebstudio.com/assets/LWS-Workspace.png"
        }
      }
    }),
  }}
/>
</Head>
    <ContentBlock
            sectionClassName="bg-gray-100 text-black pt-[125px] pb-[100px]"
            containerClassName="max-w-screen-lg mx-auto"
            rowClassName="flex flex-col items-center"
            columnClassName="flex flex-col lg:flex-row-reverse lg:flex-row items-start"
          >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Practice Areas</h1>
        <p className="mb-4">
          At Latino Web Studio, we specialize in creating tailored digital solutions for various practice areas. Our expertise spans across multiple domains, ensuring that your online presence is effective.
        </p>
        <ul className="list-disc pl-5">
          <li>Personal Injury Law</li>
          <li>Family Law</li>
          <li>Criminal Defense</li>
          <li>Medical Malpractice</li>
          <li>Engineering</li>
          <li>Appraisals</li>
          <li>Vehicle</li>
        </ul>
        <Link href="/practice-areas/seo" className="btn-main">SEO Practice Area</Link>
      </div>
      </ContentBlock>
    </>
  );
}
