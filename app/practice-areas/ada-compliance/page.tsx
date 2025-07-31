import ContentBlock from "@/app/components/content-block";
import "@/app/styles/blog.scss";
import Image from "next/image";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
// import Link from "next/link";
// import Sidebar from "@/app/components/reusable/Sidebar";

import GoogleReviews from "@/app/components/reusable/GoogleReviews";
import PricingTable from "@/app/components/reusable/PricingTable";
import Link from "next/link";
// import ResponsiveYouTube from "@/app/components/reusable/ResponsiveYouTube";
// import { Link } from "lucide-react";
// import { getArticleSchema } from "@/app/components/reusable/articleSchema";
// import HeadshotIcons from "@/app/components/headshot-icons";

// import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ADA Compliance for Expert Witness Websites - Be Inclusive & Legally Protected | Latino Web Studio",
  description:
    "Make your expert witness website ADA compliant. Boost credibility, reduce legal risk, and ensure attorneys of all abilities can contact you. WCAG 2.1 standards built in.",
  openGraph: {
    title:
      "ADA Compliance for Expert Witness Websites - Be Inclusive & Legally Protected | Latino Web Studio",
    description:
      "Make your expert witness website ADA compliant. Boost credibility, reduce legal risk, and ensure attorneys of all abilities can contact you. WCAG 2.1 standards built in.",
    url: "https://latinowebstudio.com/practice-areas/ada-compliance",
    type: "website",
    images: [
      {
        url: "https://latinowebstudio.com/practice-areas/ADA-Compliance-SEO-Results-SEC-Randy.jpg",
        width: 1200,
        height: 630,
        alt: "ADA Compliance for Expert Witness Websites - Latino Web Studio",
      },
    ],
  },
  alternates: {
    canonical: "https://latinowebstudio.com/practice-areas/ada-compliance",
  },
};

export default function PracticeAreasADA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "ADA Compliance for Expert Witness Websites",
            name: "ADA Compliance for Expert Witness Websites",
            description:
              "ADA website accessibility services for expert witnesses. Improve access, credibility, and legal protection by meeting WCAG 2.1 standards.",
            url: "https://latinowebstudio.com/practice-areas/ada-compliance",
            image:
              "https://latinowebstudio.com/practice-areas/ADA-Compliance-SEO-Results-SEC-Randy.jpg",
            keywords:
              "ADA compliance expert witness, WCAG website accessibility, ADA legal SEO, accessible websites, inclusive expert witness web design",
            inLanguage: "en",
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            audience: {
              "@type": "Audience",
              audienceType:
                "Expert Witnesses, Legal Professionals, Attorneys, Law Firms",
            },
            provider: {
              "@type": "Organization",
              name: "Latino Web Studio",
              url: "https://latinowebstudio.com",
              logo: {
                "@type": "ImageObject",
                url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
              },
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is ADA compliance for websites?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ADA compliance means your site is accessible to users with disabilities, following WCAG 2.1 standards.",
                },
              },
              {
                "@type": "Question",
                name: "Who needs to comply with ADA—and who is exempt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most public-facing websites must comply, including expert witnesses. Only a few small or non-public sites may be exempt.",
                },
              },
              {
                "@type": "Question",
                name: "Who enforces ADA compliance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The DOJ can enforce it, but most actions come from private lawsuits by users facing accessibility barriers.",
                },
              },
              {
                "@type": "Question",
                name: "How do you test or check ADA compliance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use tools like Lighthouse for scans, but full testing includes expert manual audits for accuracy.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to make a website ADA compliant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Costs range from $1,000–$5,000+ depending on your site's size and current accessibility issues.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[125px] pb-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row-reverse lg:flex-row items-start"
      >
        <div className="w-full text-center px-4 mb-8 lg:mb-0">
          <h1 className="mb-0 text-xl">
            ADA Compliance for Expert Witness Websites
          </h1>
          <h2 className="text-3xl mt-0">
            Be Inclusive and Compliant—So Attorneys Can Find You
          </h2>

          <p className="mb-2">
            ADA compliance ensures your site works for everyone. Attorneys like
            to work with experts who have compliant websites as a non-compliant
            website is a liability.
          </p>
          <a href="#schedule" className="btn-main">
            Get More Cases
          </a>
          {/* <h2 className="mt-0 text-xl">Get Found by the Right Attorneys—Consistently</h2> */}
          <div className="w-11/12 mx-auto mt-2">
            <Image
              src="/practice-areas/ADA-Compliance-SEO-Results-SEC-Randy.jpg"
              width={1500}
              height={806}
              alt={"SEO-Results-SEC-Randy-ADA-Compliance"}
              priority
            />
          </div>
        </div>
      </ContentBlock>

      <ContentBlock
        sectionClassName="bg-gray-200 text-black pt-[100px] pb-[100px] blog single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col"
        columnClassName="flex flex-wrap flex-col lg:flex-row items-start"
      >
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
          <Image
            src="/practice-areas/Fast.png"
            width={100}
            height={100}
            alt={"Clear-ADA-Compliance-SEO-Expert-Witness-Traffic-Increase"}
            className="mx-auto mb-4 h-[100px] object-contain"
          />
          <h2 style={{ margin: 0 }}>Clear</h2>
          {/* <h3 style={{margin:0}} className="text-md">Personalized Strategy & Support</h3> */}
          <p className="">
            We design with clarity and structure that supports screen readers,
            keyboard navigation, and all major accessibility tools. Your site
            will be easy to read, navigate, and understand—for every visitor, on
            every device.
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
          <Image
            src="/practice-areas/Authority.png"
            width={100}
            height={100}
            alt={"Compliant-ADA-Compliance-SEO-Expert-Witness-Traffic-Increase"}
            className="mx-auto mb-4 h-[100px] object-contain"
          />
          <h2 style={{ margin: 0 }}>Compliant</h2>
          {/* <h3 style={{margin:0}}>Personalized Strategy & Support</h3> */}
          <p>
            We follow WCAG guidelines and ADA best practices to help you avoid
            legal risk and make your website truly accessible. That means
            compliant colors, contrast, text sizing, labels, and more—all built
            in.
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
          <Image
            src="/practice-areas/Personal-Service.png"
            width={100}
            height={100}
            alt={"Inclusive-ADA-Compliance-SEO-Expert-Witness-Traffic-Increase"}
            className="mx-auto mb-4 h-[100px] object-contain"
          />
          <h2 style={{ margin: 0 }}>Inclusive</h2>
          {/* <h3 style={{margin:0}}>Personalized Strategy & Support</h3> */}
          <p>
            ADA compliance isn&apos;t just about regulations—it&apos;s about
            reaching every attorney and legal professional who might need your
            expertise. We help you remove barriers so no opportunity is missed.
          </p>
        </div>
        <div className="w-full text-center">
          <a href="#schedule" className="btn-main">
            Get More Cases
          </a>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[100px] pb-[100px] blog single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col flex-wrap lg:flex-row-reverse lg:flex-row items-center"
      >
        <div className="w-full text-center pb-8">
          <h2 className="">
            Latino Web Studio Builds ADA-Compliant Sites That Get You Seen—by
            Everyone
          </h2>
          <div className="divider"></div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <Image
            src="/practice-areas/ADA-Accessibility-First-Design.jpg"
            width={1000}
            height={1333}
            alt={"Accessibility-First Design"}
          />
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div
            style={{
              borderLeft: "5px solid",
              paddingLeft: "15px",
              borderImage:
                "linear-gradient(0deg,rgba(255, 200, 15, 1) 0%, rgba(31, 24, 74, 1) 25%, rgba(181, 83, 159, 1) 75%, rgba(3, 186, 175, 1) 100%)",
              borderImageSlice: 1,
            }}
          >
            <h3 style={{ marginBottom: "0px" }}>Accessibility-First Design</h3>
            <p>
              We optimize site speed, structure, and schema markup to boost your
              visibility in search engines—making sure attorneys can find and
              trust your expertise.
            </p>
          </div>
          <div
            style={{
              borderLeft: "5px solid",
              paddingLeft: "15px",
              borderImage:
                "linear-gradient(0deg,rgba(255, 200, 15, 1) 0%, rgba(31, 24, 74, 1) 25%, rgba(181, 83, 159, 1) 75%, rgba(3, 186, 175, 1) 100%)",
              borderImageSlice: 1,
            }}
          >
            <h3 style={{ marginBottom: "0px" }}>Legal Risk Protection</h3>
            <p>
              Stay compliant with ADA and WCAG standards to reduce your risk of
              lawsuits and meet accessibility expectations in legal and
              professional industries.
            </p>
          </div>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pb-[100px] blog single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col flex-wrap lg:flex-row items-center"
      >
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 text-center">
          <Image
            src="/practice-areas/ADA-Inclusive-User-Experience.jpg"
            width={1000}
            height={1333}
            alt={"ADA-Inclusive-User-Experience"}
          />
          <h2 className="text-xl">
            All Vital Information &amp; CTAs Above the Fold
          </h2>
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div
            style={{
              borderLeft: "5px solid",
              paddingLeft: "15px",
              borderImage:
                "linear-gradient(0deg,rgba(255, 200, 15, 1) 0%, rgba(31, 24, 74, 1) 25%, rgba(181, 83, 159, 1) 75%, rgba(3, 186, 175, 1) 100%)",
              borderImageSlice: 1,
            }}
          >
            <h3 style={{ marginBottom: "0px" }}>Search Engine Visibility</h3>
            <p>
              We structure your site to be accessible and optimized—helping you
              rank higher while being inclusive to attorneys with disabilities
              searching for your services.
            </p>
          </div>
          <div
            style={{
              borderLeft: "5px solid",
              paddingLeft: "15px",
              borderImage:
                "linear-gradient(0deg,rgba(255, 200, 15, 1) 0%, rgba(31, 24, 74, 1) 25%, rgba(181, 83, 159, 1) 75%, rgba(3, 186, 175, 1) 100%)",
              borderImageSlice: 1,
            }}
          >
            <h3 style={{ marginBottom: "0px" }}>Inclusive User Experience</h3>
            <p>
              Our layouts are clean, easy to navigate, and readable by all. No
              confusion, no frustration—just a site that&apos;s usable and
              welcoming to every potential client.
            </p>
          </div>
        </div>

        <div className="w-full text-center pt-8">
          <a href="#schedule" className="btn-main">
            Get More Cases
          </a>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-200 text-black pt-[100px] pb-[100px] blog single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col flex-wrap lg:flex-row items-start"
      >
        <div className="w-full text-center pb-8">
          <h2 className="mt-0">
            The Accessibility Foundation Every Expert Witness Website Should
            Have
          </h2>
          <p>
            Because being found by attorneys means being usable by
            everyone—without barriers.
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 relative">
          <div
            style={{
              fontWeight: "bold",
              position: "absolute",
              left: "-15px",
              top: "5px",
              color: "var(--accent-secondary)",
              background: "var(--accent-primary)",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "12px",
              paddingBottom: "2.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &#123; &#125;
          </div>

          <div>
            <h3 className="text-xl" style={{ margin: "0px" }}>
              ADA Compliance
            </h3>
            <p>
              Meet legal standards so your site is accessible, professional, and
              lawsuit-resistant.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 relative">
          <div
            style={{
              fontWeight: "bold",
              position: "absolute",
              left: "-15px",
              top: "5px",
              color: "var(--accent-secondary)",
              background: "var(--accent-primary)",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "12px",
              paddingBottom: "2.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &#123; &#125;
          </div>

          <div>
            <h3 className="text-xl" style={{ margin: "0px" }}>
              Screen Reader Support
            </h3>
            <p>
              We make sure your site works smoothly with screen readers used by
              visually impaired users.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 relative">
          <div
            style={{
              fontWeight: "bold",
              position: "absolute",
              left: "-15px",
              top: "5px",
              color: "var(--accent-secondary)",
              background: "var(--accent-primary)",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "12px",
              paddingBottom: "2.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &#123; &#125;
          </div>

          <div>
            <h3 className="text-xl" style={{ margin: "0px" }}>
              Keyboard Navigation
            </h3>
            <p>
              Navigate every page without a mouse—essential for users with
              mobility limitations.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 relative">
          <div
            style={{
              fontWeight: "bold",
              position: "absolute",
              left: "-15px",
              top: "5px",
              color: "var(--accent-secondary)",
              background: "var(--accent-primary)",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "12px",
              paddingBottom: "2.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &#123; &#125;
          </div>

          <div>
            <h3 className="text-xl" style={{ margin: "0px" }}>
              Contrast &amp; Text Clarity
            </h3>
            <p>
              Readable text and compliant color contrast to help all users
              easily absorb your content.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 relative">
          <div
            style={{
              fontWeight: "bold",
              position: "absolute",
              left: "-15px",
              top: "5px",
              color: "var(--accent-secondary)",
              background: "var(--accent-primary)",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "12px",
              paddingBottom: "2.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &#123; &#125;
          </div>

          <div>
            <h3 className="text-xl" style={{ margin: "0px" }}>
              Alt Text &amp; Labels
            </h3>
            <p>
              All visuals and forms are tagged properly so no user misses key
              info or functionality.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 relative">
          <div
            style={{
              fontWeight: "bold",
              position: "absolute",
              left: "-15px",
              top: "5px",
              color: "var(--accent-secondary)",
              background: "var(--accent-primary)",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "12px",
              paddingBottom: "2.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &#123; &#125;
          </div>

          <div>
            <h3 className="text-xl" style={{ margin: "0px" }}>
              Inclusive Experience
            </h3>
            <p>
              Design that welcomes everyone—boosting your credibility, reach,
              and professionalism.
            </p>
          </div>
        </div>
        <div className="w-full text-center">
          <a href="#schedule" className="btn-main">
            Get More Cases
          </a>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex"
        columnClassName="w-full px-4 mb-8 lg:mb-0 reviews"
      >
        <PricingTable />
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[125px] pb-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex"
        columnClassName="w-full px-4 mb-8 lg:mb-0 reviews"
      >
        <GoogleReviews
          placeId="ChIJ_TB4z7-JbIcRsXgIetzV1uU"
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        />
      </ContentBlock>
      <CTA />
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[125px] pb-[100px] single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex"
        columnClassName="w-full px-4 mb-8 lg:mb-0 reviews"
      >
        <h2>Frequently Asked Questions About ADA Compliance</h2>
        <h3>What is ADA compliance for websites?</h3>
        <p>
          ADA compliance means your site is accessible to users with
          disabilities, following WCAG 2.1 standards.
        </p>

        <h3>Who needs to comply with ADA—and who is exempt?</h3>
        <p>
          Most public-facing websites must comply, including expert witnesses.
          Only a few small or non-public sites may be exempt.
        </p>

        <h3>Who enforces ADA compliance?</h3>
        <p>
          The DOJ can enforce it, but most actions come from private lawsuits by
          users facing accessibility barriers.
        </p>

        <h3>How do you test or check ADA compliance?</h3>
        <p>
          Use tools like{" "}
          <a
            href="https://developer.chrome.com/docs/lighthouse/accessibility/scoring"
            target="_blank"
          >
            Lighthouse
          </a>{" "}
          for scans, but full testing includes expert manual audits for
          accuracy.
        </p>

        <h3>How much does it cost to make a website ADA compliant?</h3>
        <p>
          Costs range from $1,000-$5,000+ depending on your site&apos;s size and
          current accessibility issues. At Latino Web Studio we include ADA
          Compliance with our{" "}
          <Link href="https://latinowebstudio.com/practice-areas/seo">
            monthly SEO packages
          </Link>{" "}
          so you really get a bang for your buck.
        </p>
      </ContentBlock>
    </>
  );
}
