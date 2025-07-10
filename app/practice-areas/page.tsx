import Link from "next/link";
import ContentBlock from "../components/content-block";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Practice Areas | Latino Web Studio – SEO & eCommerce Development",
  description:
    "Explore our SEO and custom web development services for expert witnesses and enterprise eCommerce businesses. Scalable platforms and content strategies tailored to your goals.",
  openGraph: {
    title: "Practice Areas | Latino Web Studio – SEO & eCommerce Development",
    description:
      "We build fast-loading websites, high-converting SEO strategies, and custom eCommerce platforms for expert witnesses and retail/wholesale businesses.",
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
  // ✅ Add this block:
  alternates: {
    canonical: "https://latinowebstudio.com/practice-areas",
  },
};

export default function PracticeAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Practice Areas | Latino Web Studio",
            url: "https://latinowebstudio.com/practice-areas",
            description:
              "Explore SEO services for expert witnesses and enterprise eCommerce development solutions built to scale. Tailored, secure, and conversion-driven platforms.",
            inLanguage: "en",
            mainEntity: {
              "@type": "Organization",
              name: "Latino Web Studio",
              url: "https://latinowebstudio.com",
              logo: {
                "@type": "ImageObject",
                url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
              },
              sameAs: [
                "https://www.linkedin.com/in/ted-martinez-seo/",
                "https://github.com/elemusma",
                "https://codepen.io/latinowebstudio",
                "https://www.youtube.com/@LatinoWebStudio",
              ],
            },
          }),
        }}
      />

      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[125px] pb-[25px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row-reverse lg:flex-row items-start"
      >
        <h1 className="text-3xl font-bold mb-6">Practice Areas</h1>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pb-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName=""
        columnClassName="flex flex-wrap lg:flex-row"
      >
        <div className="w-1/2 px-4 lg:pt-10 lg:pb-10">
          <h2 className="text-3xl font-bold mb-6">SEO</h2>
          <Link href="/practice-areas/seo" className="btn-main mb-4">
            Get Found Online
          </Link>
        </div>
        <div className="w-1/2 px-4 relative">
          <div className="relative h-full">
            <Image
              src="/practice-areas/Experts-Search-Engine-Optimization.jpg"
              width={1000}
              height={371}
              className="w-full h-full object-cover object-top lg:absolute top-0 left-0"
              alt={
                "SEO-Expert-Witness-Traffic-Increase-Lawyers-Retainers-Assignments"
              }
              priority
            />
          </div>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pb-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName=""
        columnClassName="flex flex-wrap lg:flex-row-reverse"
      >
        <div className="w-1/2 px-4 lg:pt-10 lg:pb-10">
          <h2 className="text-3xl font-bold mb-6">eCommerce</h2>
          <Link href="/practice-areas/ecommerce" className="btn-main mb-4">
            Build a Custom eCommerce Platform
          </Link>
        </div>
        <div className="w-1/2 px-4 relative">
          <div className="relative h-full">
            <Image
              src="/practice-areas/ecommerce/e-commerce.jpg"
              width={1800}
              height={500}
              className="w-full h-full object-cover object-top lg:absolute top-0 left-0"
              alt={"Enterprise eCommerce Platforms for Retail &amp; Wholesale"}
              priority
            />
          </div>
        </div>
      </ContentBlock>
    </>
  );
}
