import ContentBlock from "@/app/components/content-block";
import "@/app/styles/blog.scss";
import Image from "next/image";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
import GoogleReviews from "@/app/components/reusable/GoogleReviews";
import PricingTableWebDesign from "@/app/components/reusable/PricingTableWebDesign";

export const metadata: Metadata = {
  title:
    "Web Design for Expert Witnesses - Look Like the Go-To Authority | Latino Web Studio",
  description:
    "Custom websites designed specifically for expert witnesses. Build trust, highlight expertise, and make attorneys want to hire you with professional, conversion-focused design.",
  openGraph: {
    title:
      "Web Design for Expert Witnesses - Look Like the Go-To Authority | Latino Web Studio",
    description:
      "Custom websites designed specifically for expert witnesses. Build trust, highlight expertise, and make attorneys want to hire you with professional, conversion-focused design.",
    url: "https://latinowebstudio.com/practice-areas/web-design",
    type: "website",
    images: [
      {
        url: "https://latinowebstudio.com/practice-areas/web-design.jpg",
        width: 1200,
        height: 630,
        alt: "Web Design for Expert Witnesses - Latino Web Studio",
      },
    ],
  },
  alternates: {
    canonical: "https://latinowebstudio.com/practice-areas/web-design",
  },
};

export default function PracticeAreasWebDesign() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Expert Witnesses Web Design",
            name: "Web Design for Expert Witnesses",
            description:
              "Custom web design services for expert witnesses. Build credibility, attract attorneys, and showcase your authority with professional websites designed for legal marketing.",
            url: "https://latinowebstudio.com/practice-areas/web-design",
            image: "https://latinowebstudio.com/practice-areas/web-design.jpg",
            keywords:
              "web design for expert witnesses, expert witness websites, attorney marketing, website for experts, professional web design, ADA compliance, attorney-focused design, SEO websites for experts, legal website design",
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Web Design Service Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Starter Plan",
                  priceCurrency: "USD",
                  price: "3000",
                  description:
                    "4 weeks timeline, 6 pages, SSL, attorney-focused copy, SEO optimization, ADA compliance",
                  url: "#starter",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Intermediate Plan",
                  priceCurrency: "USD",
                  price: "6000",
                  description:
                    "8 weeks timeline, 15 pages, advanced SEO, attorney-focused copy, ADA compliance, sitemap",
                  url: "#intermediate",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Signature Plan",
                  priceCurrency: "USD",
                  price: "9000",
                  description:
                    "12 weeks timeline, 30 pages, directory cleanup, advanced SEO, attorney-focused messaging, ADA compliance",
                  url: "#signature",
                  availability: "https://schema.org/InStock",
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
          <h1 className="mb-0 text-xl">Web Design for Expert Witnesses</h1>
          <h2 className="text-3xl mt-0">
            Look Like the Go-To Expert That is Ready for Deposition
          </h2>

          <p className="mb-2">
            Attorneys hire the expert who looks like the top authority. Showcase
            your credibility, highlight your experience, and make it easy for
            lawyers to contact you. Become the expert lawyers choose.
          </p>
          <a href="#schedule" className="btn-main">
            Get More Cases
          </a>
          {/* <h2 className="mt-0 text-xl">Get Found by the Right Attorneys—Consistently</h2> */}
          <div className="w-11/12 mx-auto mt-2">
            <Image
              src="/practice-areas/web-design.jpg"
              width={1500}
              height={802}
              alt={
                "SEO-Expert-Witness-Traffic-Increase-Lawyers-Retainers-Assignments"
              }
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
            alt={
              "SEO-Expert-Witness-Traffic-Increase-Lawyers-Retainers-Assignments"
            }
            className="mx-auto mb-4 h-[100px] object-contain"
          />
          <h2 style={{ margin: 0 }}>Credibility at a Glance</h2>
          {/* <h3 style={{margin:0}} className="text-md">Personalized Strategy & Support</h3> */}
          <p className="">
            Your website is often your first impression. We design clean,
            professional sites that instantly signal authority and make
            attorneys trust your expertise before they even speak to you.
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
          <Image
            src="/practice-areas/Authority.png"
            width={100}
            height={100}
            alt={
              "SEO-Expert-Witness-Traffic-Increase-Lawyers-Retainers-Assignments"
            }
            className="mx-auto mb-4 h-[100px] object-contain"
          />
          <h2 style={{ margin: 0 }}>Clear Messaging</h2>
          {/* <h3 style={{margin:0}}>Personalized Strategy & Support</h3> */}
          <p>
            We craft your content to highlight your credentials, case
            experience, and specialized knowledge—presented in a way that
            attorneys can quickly understand and respect.
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
          <Image
            src="/practice-areas/Personal-Service.png"
            width={100}
            height={100}
            alt={
              "SEO-Expert-Witness-Traffic-Increase-Lawyers-Retainers-Assignments"
            }
            className="mx-auto mb-4 h-[100px] object-contain"
          />
          <h2 style={{ margin: 0 }}>Built for Your Specialty</h2>
          {/* <h3 style={{margin:0}}>Personalized Strategy & Support</h3> */}
          <p>
            Every site we build is customized to your specific field of
            expertise, ensuring your website speaks directly to attorneys in
            your niche and positions you as the go-to expert in your domain.
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
            Your Website Should Prove You&apos;re the Authority Attorneys Need
          </h2>
          <div className="divider"></div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <Image
            src="/practice-areas/web-design-built-to-rank.jpg"
            width={1500}
            height={805}
            alt={
              "Your Website Should Prove You&apos;re the Authority Attorneys Need"
            }
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
            <h3 style={{ marginBottom: "0px" }}>Built to Rank</h3>
            <p>
              We optimize your site for speed, SEO, and legal-specific
              searches—helping attorneys find you on Google when they need your
              expertise.
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
            <h3 style={{ marginBottom: "0px" }}>Structured for Trust</h3>
            <p>
              Clear layouts and strategic content guide attorneys to view you as
              a credible, reliable expert from the first click.
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
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <Image
            src="/practice-areas/web-design-messaging-that-converts.jpg"
            width={1500}
            height={806}
            alt={"Messaging That Converts"}
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
            <h3 style={{ marginBottom: "0px" }}>Messaging That Converts</h3>
            <p>
              Every headline, service page, and bio is written to communicate
              your authority and encourage law firms to reach out.
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
            <h3 style={{ marginBottom: "0px" }}>Custom for Your Specialty</h3>
            <p>
              We design every site around your specific field, legal history,
              and goals—ensuring your website speaks directly to your ideal
              attorney audience.
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
            The Core SEO &amp; Web Design Elements Behind Attorney-Attracting
            Expert Witness Websites
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
              Mobile Optimization
            </h3>
            <p>
              Ensure fast, seamless browsing on phones—critical for attorney
              searches and Google rankings.
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
              Schema Markup
            </h3>
            <p>
              Use structured data to help Google showcase your expertise with
              attorney-specific search snippets.
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
              ADA Compliance
            </h3>
            <p>
              Make your site accessible to all users, reducing legal risks and
              improving search visibility.
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
              Conversion-Focused Design
            </h3>
            <p>
              Guide attorneys to contact you quickly using clear CTAs and
              professional, authoritative layouts.
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
              Technical SEO Structure
            </h3>
            <p>
              Your site will load fast, rank better, and get indexed properly
              with optimized technical foundations.
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
              Ongoing Support
            </h3>
            <p>
              Get monthly updates, performance tracking, and strategy
              adjustments to keep bringing attorney leads.
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
        <PricingTableWebDesign />
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
    </>
  );
}
