import ContentBlock from "@/app/components/content-block";
import "@/app/styles/blog.scss";
import Image from "next/image";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
// import Link from "next/link";
// import Sidebar from "@/app/components/reusable/Sidebar";
// import { getArticleSchema } from "@/app/components/reusable/articleSchema";
// import HeadshotIcons from "../components/headshot-icons";
import CTAButtons from "../components/reusable/CTAButtons";
// import Link from "next/link";

export const metadata: Metadata = {
  title:
    "About Tadeo Martinez | Latino Web Studio - SEO & Web Design for Expert Witnesses",
  description:
    "Meet Tadeo Martinez, founder of Latino Web Studio. Learn how we help expert witnesses get found online through SEO, ADA-compliant web design, and strategic content.",
  openGraph: {
    title:
      "About Tadeo Martinez | Latino Web Studio - SEO & Web Design for Expert Witnesses",
    description:
      "Discover the mission behind Latino Web Studio and how Tadeo Martinez helps expert witnesses increase visibility and win more cases.",
    url: "https://latinowebstudio.com/about",
    type: "profile",
    images: [
      {
        url: "https://latinowebstudio.com/assets/Mark-Tadeo-Latino-Web-Studio.jpg",
        width: 1200,
        height: 630,
        alt: "Tadeo Martinez - Latino Web Studio",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Person",
              name: "Tadeo Martinez",
              jobTitle: "Founder",
              worksFor: {
                "@type": "Organization",
                name: "Latino Web Studio",
                url: "https://latinowebstudio.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
                },
              },
              url: "https://latinowebstudio.com/about",
              image:
                "https://latinowebstudio.com/assets/Mark-Tadeo-Latino-Web-Studio.jpg",
              sameAs: [
                "https://www.linkedin.com/in/ted-martinez-seo/",
                "https://latinowebstudio.com",
              ],
            },
            description:
              "Learn about Latino Web Studio and founder Tadeo Martinez—experts in SEO and web design for expert witnesses.",
            url: "https://latinowebstudio.com/about",
          }),
        }}
      />

      {/* Hero Section */}
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[150px] pb-[100px] single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row-reverse lg:flex-row items-start"
      >
        <div className="md:w-1/3 w-1/2 lg:w-1/2 px-4 mb-8 lg:mb-0">
        <Image
            src="/assets/Mark-Tadeo-Latino-Web-Studio.jpg"
            width={1000}
            height={1333}
            alt={"Mark (and Cooper) and Tadeo (Cuba) from Latino Web Studio"}
          />
          {/* <HeadshotIcons /> */}
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h1>About Latino Web Studio</h1>
          <p>
            At Latino Web Studio, we specialize in helping expert witnesses get
            found by attorneys and win more cases through strategic website
            design, high-quality SEO, and impactful content creation.
          </p>
          <p>
            Our mission is simple: to elevate your online presence so you can
            focus on what matters most—your expert work. We understand the
            unique challenges expert witnesses face. Unlike generic marketing
            agencies, we go beyond surface-level SEO. We create academically
            sound, professionally written articles that resonate with attorneys
            and withstand courtroom scrutiny.
          </p>
          <CTAButtons />
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[150px] pb-[100px] single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row items-start"
      >
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <Image
            src="/podcast/LWS-Podcast-01.jpg"
            width={1000}
            height={1333}
            alt={"Mark (and Cooper) and Tadeo (Cuba) from Latino Web Studio"}
          />
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h2>Over a Decade of Experience</h2>
          <p>
            Tadeo (Ted) started in web design and SEO over a decade ago (2016)
            and has since built a reputation for delivering measurable results.
            One of our clients, Mark, a full-time expert witness, went from
            being overlooked to getting national cases from high-profile
            firms—not through ads, but by being found organically via his
            website.
          </p>
          <p>
            We offer all-inclusive packages that cover:
          </p>
          <ul>
              <li>Custom website design optimized for attorneys</li>
              <li>Secure and professionally formatted content</li>
              <li>SEO strategies tailored for expert witness services</li>
              <li>Ongoing website maintenance and analytics</li>
            </ul>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[150px] pb-[100px] single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row-reverse lg:flex-row items-start"
      >
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <Image
            src="/podcast/Latino-Web-Studio-Tadeo-Ted-Martinez.jpg"
            width={1000}
            height={1333}
            alt={"Tadeo (Cuba) from Latino Web Studio"}
          />
          <figcaption>Tadeo (Ted) Martinez has over 10 years of experience in helping experts and professionals get found online and grow their practice.</figcaption>
          <div className="text-center">
          <CTAButtons />
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h2>Helping Experts Get Found</h2>
          <p>
            And if you already have a web team, we can seamlessly collaborate
            with them to boost your content quality and visibility.
          </p>
          <p>
            Our clients appreciate our approach: real value upfront, no fluff,
            no pressure. We know you get countless spammy offers. That&apos;s
            why we start by doing the work—like writing a free, research-based
            article—so you can judge the quality for yourself.
          </p>
          <p>
            If you&apos;re ready to turn your expertise into more opportunities
            without wasting time on guesswork, let&apos;s talk.
          </p>
          
        </div>
      </ContentBlock>
      <CTA />
    </>
  );
}
