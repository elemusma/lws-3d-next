import ContentBlock from "@/app/components/content-block";
import "@/app/styles/blog.scss";
import Image from "next/image";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
// import Link from "next/link";
// import Sidebar from "@/app/components/reusable/Sidebar";
import Head from "next/head";
import GoogleReviews from "@/app/components/reusable/GoogleReviews";
import PricingTable from "@/app/components/reusable/PricingTable";
// import ResponsiveYouTube from "@/app/components/reusable/ResponsiveYouTube";
// import { Link } from "lucide-react";
// import { getArticleSchema } from "@/app/components/reusable/articleSchema";
// import HeadshotIcons from "@/app/components/headshot-icons";

// import Link from "next/link";

export const metadata: Metadata = {
  title:
    "SEO Services for Expert Witnesses - Get Found by Attorneys | Latino Web Studio",
  description:
    "SEO services designed specifically for expert witnesses. Improve your visibility, load speed, and ADA compliance to get more attorney inquiries.",
  openGraph: {
    title:
      "SEO Services for Expert Witnesses - Get Found by Attorneys | Latino Web Studio",
    description:
      "SEO services designed specifically for expert witnesses. Improve your visibility, load speed, and ADA compliance to get more attorney inquiries.",
    url: "https://latinowebstudio.com/practice-areas/seo",
    type: "website",
    images: [
      {
        url: "https://latinowebstudio.com/practice-areas/SEO-Expert-Witness-Traffic-Increase-Lawyers-Retainers-Assignments.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Services for Expert Witnesses - Latino Web Studio",
      },
    ],
  },
};

export default function PracticeAreasSEO() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "SEO Services for Expert Witnesses",
              name: "Boost Your Visibility in Google with Strategic SEO for Expert Witnesses",
              description:
                "SEO services designed to help expert witnesses get found by attorneys. Includes technical SEO, ADA compliance, fast loading speeds, and content strategy.",
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
                audienceType: "Expert Witnesses, Legal Professionals",
              },
              url: "https://latinowebstudio.com/practice-areas/seo",
              image:
                "https://latinowebstudio.com/practice-areas/SEO-Expert-Witness-Traffic-Increase-Lawyers-Retainers-Assignments.jpg",
              keywords:
                "SEO for expert witnesses, legal SEO, attorney visibility, expert witness marketing",
              inLanguage: "en",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "SEO Service Packages",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Starter Plan",
                    priceCurrency: "USD",
                    price: "1000",
                    description:
                      "4 articles, Google Analytics, Search Console, 750 word articles",
                    url: "https://buy.stripe.com/00gdST08wbWPbjq292",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    name: "Intermediate Plan",
                    priceCurrency: "USD",
                    price: "1500",
                    description:
                      "Everything in Starter plus web design, hosting, domain, free website, 2 backlinks per year",
                    url: "https://buy.stripe.com/5kAdST1cA7Gz9bi5lf",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    name: "Signature Plan",
                    priceCurrency: "USD",
                    price: "2000",
                    description: "Everything in Intermediate plus 10 articles",
                    url: "https://buy.stripe.com/3cs9CD3kI9OHevCfZU",
                    availability: "https://schema.org/InStock",
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      {/* 9747469734196890752 */}
      {/* Hero Section */}
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pt-[125px] pb-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row-reverse lg:flex-row items-start"
      >
        <div className="w-full text-center px-4 mb-8 lg:mb-0">
          <h1 className="mb-2">SEO for Expert Witnesses</h1>

          <p className="mb-2">
            Attorneys need to find you fast. We help expert witnesses rank
            higher with technical SEO, schema markup, and ADA-compliant websites
            that build visibility, trust, and accessibility—all without ads or
            gimmicks.
          </p>
          <a href="#schedule" className="btn-main">
            Get More Cases
          </a>
          {/* <h2 className="mt-0 text-xl">Get Found by the Right Attorneys—Consistently</h2> */}
          <div className="w-11/12 mx-auto mt-2">
            <Image
              src="/practice-areas/SEO-Results-Experts.jpg"
              width={1000}
              height={485}
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
          <h2 style={{ margin: 0 }}>Fast</h2>
          {/* <h3 style={{margin:0}} className="text-md">Personalized Strategy & Support</h3> */}
          <p className="">
            We don&apos;t just build websites—we build for speed and visibility.
            Every site is optimized to load fast, helping you rank higher in
            Google and keep attorneys engaged from the first click.
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
          <h2 style={{ margin: 0 }}>Authority</h2>
          {/* <h3 style={{margin:0}}>Personalized Strategy & Support</h3> */}
          <p>
            We write your content, based on real legal searches and safe for
            deposition. Each page is designed to build your authority and help
            attorneys understand your expertise quickly.
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
          <h2 style={{ margin: 0 }}>Tailored</h2>
          {/* <h3 style={{margin:0}}>Personalized Strategy & Support</h3> */}
          <p>
            We don&apos;t just build websites—we build your visibility.
            You&apos;ll get a custom SEO and design strategy based on your
            specific field, court experience, and goals.
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
        columnClassName="flex flex-col flex-wrap lg:flex-row-reverse lg:flex-row items-start"
      >
        <div className="w-full text-center pb-8">
          <h2 className="">
            Latino Web Studio Builds Visibility with Strategy and Precision
          </h2>
          <div className="divider"></div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <Image
            src="/practice-areas/Technical-SEO.jpg"
            width={1000}
            height={1333}
            alt={"Technical SEO Foundation and User Experience That Converts"}
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
            <h3 style={{ marginBottom: "0px" }}>Technical SEO Foundation</h3>
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
            <h3 style={{ marginBottom: "0px" }}>
              User Experience That Converts
            </h3>
            <p>
              We design clean, fast-loading pages with clear messaging and
              navigation—so attorneys quickly understand your value and are
              encouraged to reach out.
            </p>
          </div>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="bg-gray-100 text-black pb-[100px] blog single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col flex-wrap lg:flex-row items-start"
      >
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <Image
            src="/practice-areas/SEO-Mobile-Speed-Ranking.jpg"
            width={1000}
            height={1333}
            alt={"ADA-Compliant Design and Mobile Speed That Converts"}
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
            <h3 style={{ marginBottom: "0px" }}>ADA-Compliant Design</h3>
            <p>
              We build every site to meet accessibility standards—so it&apos;s
              usable by all visitors, reduces legal risk, and sends the right
              signals to Google.
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
            <h3 style={{ marginBottom: "0px" }}>Mobile Speed That Converts</h3>
            <p>
              We optimize for mobile-first performance—ensuring your site loads
              fast on phones, ranks well in Google, and keeps busy attorneys
              from bouncing.
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
            The SEO Foundation Every Expert Witness Website Should Have
          </h2>
          <p>
            Yes, you may be on all the directories, but are they really bringing
            cases or is it mostly solicitation calls?
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
              SEO Audits
            </h3>
            <p>
              Uncover issues affecting visibility, page speed, and indexability
              with in-depth technical audits.
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
              Add structured data to boost search appearance and trust with
              attorney-specific rich snippets.
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
              Ensure accessibility for all users while reducing legal risk and
              improving search performance.
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
              Mobile Optimization
            </h3>
            <p>
              Deliver lightning-fast experiences on phones—key for Google
              rankings and busy attorney users.
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
              Conversion Design
            </h3>
            <p>
              Guide attorneys to contact you faster with clear calls-to-action
              and persuasive layout choices.
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
              Stay competitive with monthly updates, performance tracking, and
              SEO content improvements.
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
    </>
  );
}
