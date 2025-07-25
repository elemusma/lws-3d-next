import Link from "next/link";
import ContentBlock from "../components/content-block";
import type { Metadata } from "next";
import Image from "next/image";
import "@/app/styles/img.scss"; // Import styles for practice areas
import Cta from "../components/reusable/cta";

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
        sectionClassName="text-black pt-[125px] pb-[25px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="text-center"
      >
        <h1 className="text-3xl font-bold mb-6">
          What We Do to Help You Get Found by Attorneys
        </h1>
        <p>
          We help expert witnesses get found by attorneys through strategic SEO
          and professional web design.
        </p>
      </ContentBlock>
      <ContentBlock
        sectionClassName="text-black pb-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName=""
        columnClassName="flex flex-wrap items-center"
      >
        <div className="md:w-1/2 w-full px-4">
          <div className="img-hover overflow-hidden">
            <Link href="/practice-areas/seo">
              <Image
                src="/practice-areas/SEO-Attorney-Interest.jpg"
                width={2560}
                height={1134}
                className="w-full h-auto mb-0"
                alt={
                  "SEO-Expert-Witness-Traffic-Increase-Lawyers-Retainers-Assignments"
                }
                priority
              />
            </Link>
          </div>
          <Link href="/practice-areas/seo">
            <div className="gradient-background p-4 text-white relative">
              <div className="h-[2px] bg-white w-100 mt-3 mb-4"></div>
              <h2 className="text-3xl font-bold mb-0">SEO</h2>
              <small>Get Found by Attorneys</small>
              <span className="text-xl float-right">&rarr;</span>
            </div>
          </Link>
        </div>
        <div className="md:w-1/2 w-full px-4 relative md:top-[70px] md:pt-0 pt-10">
          <div className="relative h-full">
            <div className="img-hover overflow-hidden">
              <Link href="/practice-areas/web-design">
                <Image
                  src="/practice-areas/web-design.jpg"
                  width={1000}
                  height={371}
                  className="w-full h-auto mb-0"
                  alt={
                    "SEO-Expert-Witness-Traffic-Increase-Lawyers-Retainers-Assignments"
                  }
                  priority
                />
              </Link>
            </div>
            <Link href="/practice-areas/web-design">
              <div className="gradient-background p-4 text-white">
                <div className="h-[2px] bg-white w-100 mt-3 mb-4"></div>
                <h2 className="text-3xl font-bold mb-0">Web Design</h2>
                <small>Show Credibility &amp; Authoritativeness</small>
                <span className="text-xl float-right">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full px-4 relative md:pt-10 pt-10">
          <div className="relative h-full">
            <div className="img-hover overflow-hidden">
              <Link href="/practice-areas/ecommerce">
                <Image
                  src="/practice-areas/ecommerce/e-commerce.jpg"
                  width={1800}
                  height={500}
                  className="w-full h-[256px] object-cover mb-0"
                  alt={
                    "SEO-Expert-Witness-Traffic-Increase-Lawyers-Retainers-Assignments"
                  }
                  priority
                />
              </Link>
            </div>
            <Link href="/practice-areas/web-design">
              <div className="gradient-background p-4 text-white">
                <div className="h-[2px] bg-white w-100 mt-3 mb-4"></div>
                <h2 className="text-3xl font-bold mb-0">eCommerce</h2>
                <small>Build a Custom eCommerce Platform</small>
                <span className="text-xl float-right">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full px-4 relative p-20 text-center">
          <div className="relative h-full">
            <Link href="#schedule" className="btn-main">
              Get More Cases and Get Found by Attorneys
            </Link>
          </div>
        </div>
      </ContentBlock>
      <div className="bg-gray-100">
        <Cta />
      </div>
    </>
  );
}
