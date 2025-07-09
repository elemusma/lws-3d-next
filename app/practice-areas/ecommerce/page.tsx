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
// import ResponsiveYouTube from "@/app/components/reusable/ResponsiveYouTube";
// import { Link } from "lucide-react";
// import { getArticleSchema } from "@/app/components/reusable/articleSchema";
// import HeadshotIcons from "@/app/components/headshot-icons";

// import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Enterprise eCommerce Development – Custom Retail & Wholesale Platforms | Latino Web Studio",
  description:
    "Custom-built enterprise eCommerce platforms with role-based functionality for B2B and B2C. Scalable, secure, and tailored to your business workflows.",
  openGraph: {
    title:
      "Enterprise eCommerce Development – Custom Retail & Wholesale Platforms | Latino Web Studio",
    description:
      "Custom-built enterprise eCommerce platforms with role-based functionality for B2B and B2C. Scalable, secure, and tailored to your business workflows.",
    url: "https://latinowebstudio.com/practice-areas/ecommerce",
    type: "website",
    images: [
      {
        url: "https://latinowebstudio.com/practice-areas/ecommerce/ecommerce-enterprise-code-01.jpg",
        width: 1200,
        height: 630,
        alt: "Custom eCommerce Platform for Retail & Wholesale by Latino Web Studio",
      },
    ],
  },
};

export default function PracticeAreasEcommerce() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Enterprise eCommerce Development",
            name: "Custom eCommerce Platforms for Retail & Wholesale",
            description:
              "We build custom eCommerce platforms for B2B and B2C companies with advanced user roles, pricing logic, and workflows. Scalable, secure, and designed to match complex business needs.",
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
                "Retailers, Wholesalers, Distributors, Enterprise Teams",
            },
            url: "https://latinowebstudio.com/practice-areas/ecommerce",
            image:
              "https://latinowebstudio.com/practice-areas/ecommerce/e-commerce.jpg",
            keywords:
              "enterprise ecommerce, B2B ecommerce, B2C platform development, custom ecommerce website, wholesale ecommerce, ecommerce development agency",
            inLanguage: "en",
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
            Enterprise eCommerce Platforms for Retail &amp; Wholesale
          </h1>

          <p className="mb-2">
            We build custom eCommerce systems with role-based functionality for
            retail and wholesale operations. Tailored user experiences,
            permissions, and workflows for customers, vendors, and
            admins—scalable, secure, and built for complex business needs.
          </p>
          <a href="#schedule" className="btn-main">
            Build a Custom eCommerce Platform
          </a>
          {/* <h2 className="mt-0 text-xl">Get Found by the Right Attorneys—Consistently</h2> */}
          <div className="w-11/12 mx-auto mt-2">
            <Image
              src="/practice-areas/ecommerce/e-commerce.jpg"
              width={1800}
              height={500}
              alt={"Enterprise eCommerce Platforms for Retail &amp; Wholesale"}
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
            src="/practice-areas/ecommerce/Easy-To-Use.png"
            width={100}
            height={100}
            alt={"Easy to Use eCommerce Platform for Retail and Wholesale"}
            className="mx-auto mb-4 h-[100px] object-contain"
          />
          <h2 style={{ margin: 0 }}>Easy to Use</h2>
          <p className="">
            We design intuitive interfaces for every user—whether they&apos;re
            retail customers, wholesale buyers, or internal teams. Navigation,
            checkout, and account management are all streamlined to reduce
            friction and increase satisfaction.
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
            We build around your operations with custom user roles, permissions,
            and workflows. From bulk ordering to vendor portals, your platform
            is structured to match how your business actually functions.
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
            Your platform is fully customized—B2B, B2C, or both. We tailor
            functionality, pricing logic, and integrations to meet your goals
            and support long-term scalability across all departments and
            audiences.
          </p>
        </div>
        <div className="w-full text-center">
          <a href="#schedule" className="btn-main">
            Build a Custom eCommerce Platform
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
            Latino Web Studio Builds Enterprise Platforms with Precision
          </h2>
          <div className="divider"></div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <Image
            src="/practice-areas/ecommerce/ecommerce-enterprise-code-01.jpg"
            width={1000}
            height={1333}
            alt={"Flexible Architecture"}
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
            <h3 style={{ marginBottom: "0px" }}>Flexible Architecture</h3>
            <p>
              We engineer systems that support B2B and B2C with custom roles,
              workflows, and pricing—designed for how your business actually
              operates.
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
            <h3 style={{ marginBottom: "0px" }}>Role-Based Functionality</h3>
            <p>
              Create unique experiences for customers, wholesalers, vendors, and
              staff—all with tailored access, dashboards, and permissions.
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
            src="/practice-areas/ecommerce/my-account-01.jpg"
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
            <h3 style={{ marginBottom: "0px" }}>Seamless Integrations</h3>
            <p>
              We create backend tools that make it easy to manage products,
              orders, users, and content—no technical skills needed.
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
            <h3 style={{ marginBottom: "0px" }}>User-Centric Design</h3>
            <p>
              From product search to checkout, we design clean, intuitive
              experiences that make complex systems easy to use.
            </p>
          </div>
        </div>

        <div className="w-full text-center pt-8">
          <a href="#schedule" className="btn-main">
            Build a Custom eCommerce Platform
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
              Code Quality
            </h3>
            <p>
              We write clean, maintainable code that scales with your business
              and supports custom logic.
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
              User Roles
            </h3>
            <p>
              Build tailored access for admins, buyers, and vendors—each with
              the tools they need.
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
              Mobile Experience
            </h3>
            <p>
              Designs that work flawlessly on every device to serve customers
              wherever they shop.
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
              Secure Checkout
            </h3>
            <p>
              Fast, secure, and flexible checkout flows that match your pricing
              and user structure.
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
              Custom Dashboards
            </h3>
            <p>
              Give each user a powerful backend that&apos;s simple to use, with
              only what they need.
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
              We maintain, update, and improve your platform as your business
              and features evolve.
            </p>
          </div>
        </div>
        <div className="w-full text-center">
          <a href="#schedule" className="btn-main">
            Build a Custom eCommerce Platform
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
        title="Let's Build Your Custom eCommerce Platform"
        description={
          <>
            <p>
              Looking to launch or upgrade your eCommerce system? Whether
              it&apos;s custom features, user roles, or wholesale support, we
              will build a solution tailored to your business. Prefer to call?{" "}
              <Link href="tel:+13039278228" className="text-link">
                303.927.8228
              </Link>
            </p>
          </>
        }
      />
    </>
  );
}
