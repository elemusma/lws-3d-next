import ContentBlock from "@/app/components/content-block";
import "@/app/styles/blog.scss";
import Image from "next/image";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
// import Link from "next/link";
// import Sidebar from "@/app/components/reusable/Sidebar";
import Head from "next/head";
// import { getArticleSchema } from "@/app/components/reusable/articleSchema";
import HeadshotIcons from "../components/headshot-icons";
// import Link from "next/link";

export const metadata: Metadata = {
  title:
   "Why Your Website Might Be Costing You Cases—and How UX Can Fix That - Latino Web Studio",
  description:
   "Attorneys reviewing expert witnesses often move fast. They scan, evaluate, and make judgments within seconds.",
  openGraph: {
    title:
     "Why Your Website Might Be Costing You Cases—and How UX Can Fix That - Latino Web Studio",
    description:
     "Attorneys reviewing expert witnesses often move fast. They scan, evaluate, and make judgments within seconds.",
    url: `https://latinowebstudio.com/blog/user-experience-ux`, // Replace with actual URL
    type:"website",
    images: [
      {
        url: `https://latinowebstudio.com/blog/user-experience-01.png`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt:"Why Your Website Might Be Costing You Cases—and How UX Can Fix That - Latino Web Studio",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
    <Head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Why Your Website Might Be Costing You Cases--and How UX Can Fix That",
        "articleSection": "Web Design and UX for Expert Witnesses",
        "description": "Attorneys reviewing expert witnesses often move fast. They scan, evaluate, and make judgments within seconds.",
        "dateModified": "2025-06-21",
        "keywords": "UX for expert witnesses, legal web design, attorney website evaluation",
        "wordCount": 1240,
        "image": "https://latinowebstudio.com/blog/user-experience-01.png",
        "author": {
          "@type": "Person",
          "name": "Tadeo Martinez",
          "url": "https://latinowebstudio.com/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Latino Web Studio",
          "logo": {
            "@type": "ImageObject",
            "url": "https://latinowebstudio.com/assets/LWS-Workspace.png"
          }
        },
        "datePublished": "2025-06-18",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://latinowebstudio.com/blog/user-experience-ux"
        }
      }),
    }}
  />
</Head>

      {/* Hero Section */}
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[150px] pb-[100px] blog single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row-reverse lg:flex-row items-start"
      >
        <div className="md:w-1/3 w-1/2 lg:w-1/2 px-4 mb-8 lg:mb-0">
            <HeadshotIcons />
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h1>About Latino Web Studio</h1>
            <p>At Latino Web Studio, we specialize in helping expert witnesses get found by attorneys and win more cases through strategic website design, high-quality SEO, and impactful content creation.</p>
            <p>Our mission is simple: to elevate your online presence so you can focus on what matters most—your expert work. We understand the unique challenges expert witnesses face. Unlike generic marketing agencies, we go beyond surface-level SEO. We create academically sound, professionally written articles that resonate with attorneys and withstand courtroom scrutiny.</p>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[150px] pb-[100px] blog single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row items-start"
      >
         
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
        <Image 
        src="/assets/Mark-Tadeo-Latino-Web-Studio.jpg"
        width={1000}
        height={1333} alt={"Mark (and Cooper) and Tadeo (Cuba) from Latino Web Studio"} 
        />
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
        <h2>Over a Decade of Experience</h2>
            <p>Tadeo (Ted) started in web design and SEO over a decade ago (2016) and has since built a reputation for delivering measurable results. One of our clients, Mark, a full-time expert witness, went from being overlooked to getting national cases from high-profile firms—not through ads, but by being found organically via his website.
</p>
<p>We offer all-inclusive packages that cover:
    <ul>
        <li>Custom website design optimized for attorneys</li>
        <li>Secure and professionally formatted content</li>
        <li>SEO strategies tailored for expert witness services</li>
        <li>Ongoing website maintenance and analytics</li>
    </ul>
</p>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[150px] pb-[100px] blog single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row-reverse lg:flex-row items-start"
      >
         
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
        <Image 
        src="/assets/Luis-Tadeo-Helping-Experts.jpg"
        width={1000}
        height={1333} alt={"Mark (and Cooper) and Tadeo (Cuba) from Latino Web Studio"} 
        />
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
        <h2>Helping Experts Get Found</h2>
            <p>And if you already have a web team, we can seamlessly collaborate with them to boost your content quality and visibility.</p>
<p>Our clients appreciate our approach: real value upfront, no fluff, no pressure. We know you get countless spammy offers. That&apos;s why we start by doing the work—like writing a free, research-based article—so you can judge the quality for yourself.</p>
<p>If you&apos;re ready to turn your expertise into more opportunities without wasting time on guesswork, let&apos;s talk.</p>
        <a href="#schedule" className="btn-main">
                    Get More Cases
                  </a>
        </div>
      </ContentBlock>
      <CTA />
    </>
  );
}
