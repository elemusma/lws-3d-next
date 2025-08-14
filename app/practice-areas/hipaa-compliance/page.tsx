import ContentBlock from "@/app/components/content-block";
import "@/app/styles/blog.scss";
import Image from "next/image";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
// import Link from "next/link";
// import Sidebar from "@/app/components/reusable/Sidebar";

import GoogleReviews from "@/app/components/reusable/GoogleReviews";
// import PricingTable from "@/app/components/reusable/PricingTable";
import Link from "next/link";
// import PricingTableWebDesign from "@/app/components/reusable/PricingTableWebDesign";
import PricingTableHIPAACompliance from "@/app/components/reusable/PricingTableHIPAACompliance";
// import ResponsiveYouTube from "@/app/components/reusable/ResponsiveYouTube";
// import { Link } from "lucide-react";
// import { getArticleSchema } from "@/app/components/reusable/articleSchema";
// import HeadshotIcons from "@/app/components/headshot-icons";

// import Link from "next/link";

export const metadata: Metadata = {
  title:
    "HIPAA-Compliant Website Design for Expert Witnesses | Latino Web Studio",
  description:
    "Secure, attorney-focused HIPAA-compliant websites for medical expert witnesses. Built with encryption, consent-based forms, BAA-ready hosting, and ADA compliance.",
  openGraph: {
    title:
      "HIPAA-Compliant Website Design for Expert Witnesses | Latino Web Studio",
    description:
      "Secure, attorney-focused HIPAA-compliant websites for medical expert witnesses. Built with encryption, consent-based forms, BAA-ready hosting, and ADA compliance.",
    url: "https://latinowebstudio.com/practice-areas/hipaa-compliance",
    type: "website",
    images: [
      {
        url: "https://latinowebstudio.com/practice-areas/Hipaa-Compliance.jpg",
        width: 1200,
        height: 630,
        alt: "HIPAA-Compliant Website Design by Latino Web Studio",
      },
    ],
  },
  alternates: {
    canonical: "https://latinowebstudio.com/practice-areas/hipaa-compliance",
  },
};

export default function PracticeAreasHIPAACOMPLIANCE() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "HIPAA-Compliant Website Design",
            name: "HIPAA-Compliant Websites for Expert Witnesses",
            description:
              "Latino Web Studio builds HIPAA-compliant websites for medical expert witnesses. Secure, encrypted, attorney-focused, and privacy-conscious platforms.",
            provider: {
              "@type": "Organization",
              name: "Latino Web Studio",
              url: "https://latinowebstudio.com",
              logo: {
                "@type": "ImageObject",
                url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
              },
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            audience: {
              "@type": "Audience",
              audienceType:
                "Medical Expert Witnesses, IME Providers, Legal Professionals",
            },
            url: "https://latinowebstudio.com/practice-areas/hipaa-compliance",
            image:
              "https://latinowebstudio.com/practice-areas/Hipaa-Compliance.jpg",
            inLanguage: "en",
            keywords: [
              "HIPAA website design",
              "HIPAA compliant websites",
              "medical expert witness web design",
              "attorney-focused websites",
              "secure medical websites",
              "IME website HIPAA",
              "HIPAA hosting for doctors",
              "privacy-first web design",
              "HIPAA web compliance",
              "BAA compliant web development",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "HIPAA Website Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Starter Plan",
                  priceCurrency: "USD",
                  price: "4000",
                  description:
                    "3 HIPAA-compliant pages, secure form, SSL, attorney copy, ADA, SEO",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Intermediate Plan",
                  priceCurrency: "USD",
                  price: "6000",
                  description:
                    "5 HIPAA-compliant pages, all Starter features + CV, blog, and SEO extras",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Signature Plan",
                  priceCurrency: "USD",
                  price: "9000",
                  description:
                    "7 HIPAA-compliant pages, premium setup, directory optimization, strategy",
                  availability: "https://schema.org/InStock",
                },
              ],
            },
            mainEntity: {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why does HIPAA compliance matter if I'm not treating patients online?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you're handling case files or PHI, attorneys expect your site to reflect HIPAA awareness and secure practices.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can attorneys tell if my site is HIPAA-ready?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Secure forms, privacy notices, HTTPS, and clear language signal compliance to attorneys.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need a BAA (Business Associate Agreement)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Only if you're receiving or storing PHI using third-party tools like email, hosting, or web forms.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I still look professional and be compliant?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. We design HIPAA-compliant websites that are both secure and visually professional.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you work with other medical specialties?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We've worked with experts in pulmonology, wound care, biomedical engineering, and more.",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* 9747469734196890752 */}
      {/* Hero Section */}
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[125px] pb-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row-reverse lg:flex-row items-start"
      >
        <div className="w-full text-center px-4 mb-8 lg:mb-0">
          <h1 className="mb-2">
            Get a HIPAA-Compliant Website That Builds Trust
          </h1>

          <p className="mb-2">
            Attorneys need to know you&apos;re serious about compliance. A
            HIPAA-ready website shows you understand the sensitivity of
            medical-legal cases.
          </p>
          <a href="#schedule" className="btn-main">
            Get a HIPAA-Compliant Website
          </a>
          {/* <h2 className="mt-0 text-xl">Get Found by the Right Attorneys—Consistently</h2> */}
          <div className="lg:w-1/2 w-11/12 mx-auto mt-2">
            <Image
              src="/practice-areas/Hipaa-Compliance.jpg"
              width={1500}
              height={1000}
              alt={"Get a HIPAA-Compliant Website"}
              priority
            />
          </div>
        </div>
      </ContentBlock>

      <ContentBlock
        sectionClassName="bg-gray-200 text-black pt-[100px] pb-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col"
        columnClassName="flex flex-wrap flex-col lg:flex-row items-start"
      >
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
          <Image
            src="/practice-areas/ecommerce/Easy-To-Use.png"
            width={100}
            height={100}
            alt={"Easy to Use eCommerce Platform for Retail and Wholesale"}
            className="mx-auto mb-4 h-[100px] object-contain"
          />
          <h2 style={{ margin: 0 }}>Easy to Trust</h2>
          <p className="">
            We design websites that build instant confidence. HIPAA language,
            privacy notices, and secure forms are all clearly visible.
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
          <Image
            src="/practice-areas/Authority.png"
            width={100}
            height={100}
            alt={"Structured eCommerce Platform for Retail and Wholesale"}
            className="mx-auto mb-4 h-[100px] object-contain"
          />
          <h2 style={{ margin: 0 }}>Structured</h2>
          <p>
            From secure hosting and SSL encryption to proper consent language
            and form storage, your website is built to meet HIPAA best practices
            and legal expectations.
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
          <Image
            src="/practice-areas/Personal-Service.png"
            width={100}
            height={100}
            alt={"Tailored eCommerce Platform for Retail and Wholesale"}
            className="mx-auto mb-4 h-[100px] object-contain"
          />
          <h2 style={{ margin: 0 }}>Tailored</h2>
          <p>
            Whether you&apos;re a biomedical engineer, hearing loss, or
            addiction counselor expert, your website will reflect your niche
            expertise while meeting compliance needs.
          </p>
        </div>
        <div className="w-full text-center">
          <a href="#schedule" className="btn-main">
            Get a HIPAA-Compliant Website
          </a>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="text-black pt-[100px] pb-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-wrap items-center"
      >
        <div className="w-full text-center pb-8">
          <h2 className="">
            Connecting Privacy with Professionalism — One Secure Site at a Time
          </h2>
          <div className="divider"></div>
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
            <h3 style={{ marginBottom: "0px" }}>
              Compliance-Driven Confidence
            </h3>
            <p>
              We build HIPAA-compliant websites that secure data and
              communication, giving attorneys confidence in your privacy and
              professionalism.
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
            <h3 style={{ marginBottom: "0px" }}>Medical-Legal Credibility</h3>
            <p>
              A HIPAA-ready website shows attorneys you&apos;re professional and
              prepared to handle sensitive records and testimony with care and
              compliance.
            </p>
          </div>
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
            <h3 style={{ marginBottom: "0px" }}>Strategic Visibility</h3>
            <p>
              Designed to appear in attorney searches, it gives you the
              visibility needed to attract more IME work, chart reviews, and
              legal case consultations.
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
            <h3 style={{ marginBottom: "0px" }}>Ethical Contribution</h3>
            <p>
              By protecting health information properly, you&apos;re upholding
              the standards attorneys expect from their medical expert partners.
            </p>
          </div>
        </div>
        <div className="w-full text-center">
          <a href="#schedule" className="btn-main">
            Get a HIPAA-Compliant Website
          </a>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-white text-black py-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex"
        columnClassName="w-full px-4 mb-8 lg:mb-0 reviews"
      >
        <div className="text-center" id="pricing"></div>
        <PricingTableHIPAACompliance />
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-200 text-black pt-[100px] pb-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col flex-wrap lg:flex-row items-start"
      >
        <div className="w-full text-center pb-8">
          <h2 className="mt-0">
            The Technical Foundation Every Enterprise eCommerce Site Needs
          </h2>
          {/* <p>
            Yes, you may be on all the directories, but are they really bringing
            cases or is it mostly solicitation calls?
          </p> */}
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
              End-to-End Encryption
            </h3>
            <p>
              All data sent through your site is encrypted in transit with SSL
              to protect client information.
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
              HIPAA-Compliant Privacy Policy
            </h3>
            <p>
              We include a custom privacy policy that meets HIPAA disclosure and
              consent requirements.
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
              Secure Form Handling
            </h3>
            <p>
              Intake forms are encrypted, stored safely, and include warnings
              not to submit PHI when not needed.
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
              BAA-Ready Hosting Setup
            </h3>
            <p>
              We configure hosting on platforms that offer HIPAA-compliant
              services and sign BAAs.
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
              Access Controls
            </h3>
            <p>
              Restricted admin access ensures only authorized users can view or
              manage sensitive submissions.
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
              Audit Trails &amp; Logging
            </h3>
            <p>
              We log access and form submissions as needed to support HIPAA
              auditing and traceability.
            </p>
          </div>
        </div>
        <div className="w-full text-center">
          <a href="#schedule" className="btn-main">
            Get a HIPAA-Compliant Website
          </a>
        </div>
      </ContentBlock>
      {/* <ContentBlock
        sectionClassName="bg-white text-black py-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex"
        columnClassName="w-full px-4 mb-8 lg:mb-0 reviews"
      >
        <PricingTable />
      </ContentBlock> */}
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
      <CTA
        title="Get a HIPAA-Compliant Website"
        description={
          <>
            <p>
              The legal-medical industry is heavily regulated and you need to
              make sure you&apos;re compliant to build trust. Prefer to call?{" "}
              <Link href="tel:+13039278228" className="text-link">
                303.927.8228
              </Link>
            </p>
          </>
        }
      />
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[125px] pb-[100px] single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex"
        columnClassName="w-full px-4 mb-8 lg:mb-0 reviews"
      >
        <h2>Frequently Asked Questions About HIPAA Compliance</h2>
        <h3>
          Why does HIPAA compliance matter if I&apos;m not treating patients
          online?
        </h3>
        <p>
          If you&apos;re handling case files, reports, or sensitive data,
          attorneys expect your site to reflect HIPAA awareness and professional
          handling of PHI—even if you&apos;re not technically a covered entity.
        </p>

        <h3>Can attorneys really tell if my site is HIPAA-ready?</h3>
        <p>
          Yes. Secure forms, privacy notices, and HTTPS are the minimum. We go
          beyond that to align your messaging with legal industry expectations.
        </p>

        <h3>Do I need a BAA (Business Associate Agreement)?</h3>
        <p>
          You only need a BAA if you&apos;re receiving or storing “Protected
          Health Information” (PHI) on behalf of an attorney, insurer, or
          healthcare provider and using third-party services (like website
          hosting, email, or forms) to handle that data.
        </p>

        <h3>Can I still look professional and be compliant?</h3>
        <p>
          Absolutely. We blend conversion-focused design with modern compliance
          standards. Our goal is to make you look credible and in control.
        </p>

        <h3>Do you work with other medical specialties?</h3>
        <p>
          Yes. We&apos;ve worked with biomedical engineers, hearing experts, and
          addiction counseling experts.
        </p>
      </ContentBlock>
    </>
  );
}
