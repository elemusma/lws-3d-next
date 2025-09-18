"use client";
import Image from "next/image";
import { useEffect } from "react";
import CTA from "./components/reusable/cta";
import HeadshotIcons from "./components/headshot-icons";
import Main from "./js/main";

import "./styles/body.scss";
import ContentBlock from "./components/content-block";
import GoogleReviews from "./components/reusable/GoogleReviews";
import { Phone } from "./components/globals";
import InspirationalQuote from "./components/quote";
import Link from "next/link";

export default function Home() {
  // const currentYear = new Date().getFullYear();
  useEffect(() => {
    const iframes = document.querySelectorAll(
      ".video-container",
    ) as NodeListOf<HTMLIFrameElement>;
    iframes.forEach((iframe) => {
      const aspectRatio = 560 / 315; // 16:9
      iframe.style.height = `${iframe.offsetWidth / aspectRatio}px`;
    });
  }, []);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Latino Web Studio – SEO & Web Design for Expert Witnesses",
            url: "https://latinowebstudio.com",
            description:
              "Latino Web Studio helps expert witnesses get found by attorneys and get more cases through SEO, ADA-compliant websites, and fact-based content strategy.",
            inLanguage: "en",
            mainEntity: {
              "@type": "Organization",
              name: "Latino Web Studio",
              url: "https://latinowebstudio.com",
              logo: {
                "@type": "ImageObject",
                url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
              },
              sameAs: ["https://www.linkedin.com/in/ted-martinez-seo/"],
              founder: {
                "@type": "Person",
                name: "Tadeo Martinez",
                jobTitle: "Founder",
                url: "https://latinowebstudio.com/about",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-303-927-8228",
                contactType: "Sales",
                areaServed: "US",
                availableLanguage: "English",
              },
            },
            about: {
              "@type": "Thing",
              name: "SEO for Expert Witnesses",
            },
          }),
        }}
      />

      <Main />
      <main>
        <section className="hero" style={{}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap md:flex-row-reverse justify-center mx-4">
              <div className="lg:w-1/2 w-full md:px-4">
                <div className="relative w-full pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/JYgZaXCTEZU?si=EvaB-TTr7v3Jpwl_"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <figcaption className="mt-2 text-center md:text-md text-sm text-black">
                  Watch interview above with a litigation attorney.
                </figcaption>
              </div>

              <div className="lg:w-1/2 w-full pb-4">
                <div className="lg:w-full w-full">
                  <h1 className="text-secondary animated-heading lg:text-5xl text-2xl mb-0">
                    Get More Cases<br></br>Get Found by Attorneys
                  </h1>
                  <h2 className="text-xl lg:my-2 my-1">
                    Become the go-to expert
                  </h2>
                </div>
                {/* <h2>iOS, Android, &amp; Web Apps</h2> */}
                {/* <div className="lg:w-9/12 w-1/9"> */}
                <p className="text-md mt-4 mb-4">
                  I help expert witnesses show up on Google and AI results when
                  attorneys search for experts like you online.
                </p>
                {/* <Login /> */}
                {/* </div> */}
                <div className="">
                  <div className="">
                    <Link
                      href={`/free-blog-article`}
                      className="btn-main mx-2 blog-article"
                    >
                      Get Free Blog Article
                    </Link>
                    <Link
                      href={`/podcast`}
                      className="btn-main secondary mx-2 podcast-guest-attorney"
                    >
                      Podcast Guest Attorney
                    </Link>
                  </div>
                  <div className="">
                    <a
                      href={`tel:+1${Phone}`}
                      className="text-link inline-block"
                    >
                      {Phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className=""
          style={{ backgroundColor: "var(--accent-secondary)" }}
        >
          <div className="container-fluid mx-auto px-4">
            <div className="flex flex-wrap justify-between -mx-4">
              <div className="lg:w-1/3 w-full pt-4 pb-4 px-4 lg:text-center text-white">
                <h2 className="h3 mt-2 mb-2" style={{}}>
                  Lawyers Find You
                </h2>
              </div>
              <div
                className="lg:w-1/3 w-full pt-4 pb-4 px-4 lg:text-center text-white"
                style={{ backgroundColor: "var(--accent-quaternary)" }}
              >
                <h2 className="h3 mt-2 mb-2">Receive a Retainer</h2>
              </div>
              <div className="lg:w-1/3 w-full pt-4 pb-4 px-4 lg:text-center text-white">
                <h2 className="h3 mt-2 mb-2">Bill Monthly</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          {/* Content Wrapper */}
          <div className="w-full px-4 sm:px-6 lg:px-8 pb-[150px]">
            <div className="flex flex-wrap justify-center items-center">
              <div className="lg:w-3/4 md:w-full text-center pb-4">
                <h2>Do You Know How Lawyers Think?</h2>
                <p>
                  Watch interview with plaintiff attorney Logan Quirk where he
                  shares how he finds and vets experts witnesses and his
                  experiences working with them.
                </p>
              </div>

              <div className="md:w-3/4 w-full px-4">
                <div className="relative w-full pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/JYgZaXCTEZU?si=EvaB-TTr7v3Jpwl_"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              {/* <Image
                  src="/photos/SEO-Results.png"
                  alt="Get Lawyers Contacting You on a Monthly Basis"
                  width={2013}
                  height={1194}
                  className="object-contain"
                /> */}
              {/* <div className="md:w-1/2 w-full px-4">
                <Image
                  src="/photos/SEO-Results-01.jpg"
                  alt="Clarify Your Message"
                  width={2013}
                  height={1194}
                  className="object-contain"
                />
              </div> */}
            </div>
          </div>
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {/* Card 1 */}
              <div className="flex flex-col items-center">
                <Image
                  src="/photos/Expert-Witness-Target-Fact-Based.png"
                  alt="Targeted, Fact-Based Expert Witness Content Strategy"
                  width={2013}
                  height={1194}
                  className="h-24 w-auto object-contain"
                />
                <h3 className="mt-2 font-semibold">
                  Targeted, Fact-Based Expert Witness Content Strategy
                </h3>
                <p className="" style={{ fontSize: 18 }}>
                  Be a trusted expert while preventing content from being used
                  against you in deposition.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center">
                <Image
                  src="/photos/Expert-Witness-White-Papers.png"
                  alt="Optimized Expert Witness Articles &amp; White Papers"
                  width={1169}
                  height={1237}
                  className="h-24 w-auto object-contain"
                />
                <h3 className="mt-2 font-semibold">
                  Optimized Expert Witness Articles &amp; White Papers
                </h3>
                <p className="" style={{ fontSize: 18 }}>
                  Increases visibility to attract higher-value cases and
                  establish authority.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center">
                <Image
                  src="/photos/Expert-Witness-Content-Strategy.png"
                  alt="Consistent Expert Witness Content Production Plan"
                  width={1446}
                  height={1173}
                  className="h-24 w-auto object-contain"
                />
                <h3 className="mt-2 font-semibold">
                  Consistent Expert Witness Content Production Plan
                </h3>
                <p className="" style={{ fontSize: 18 }}>
                  Ensures regular, relevant updates that keep your expertise
                  top-of-mind for potential clients.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex justify-center">
              <a href="#schedule" className="btn-main">
                Get More Cases
              </a>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 100, paddingBottom: 100 }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full pb-8 px-4 text-center">
                <h2>
                  Are you unsure how to write content that won&apos;t be used
                  against you in court?
                </h2>
                <p>Don&apos;t get eaten alive at deposition.</p>
              </div>
              <div className="lg:w-1/2 w-full px-4">
                <ul
                  style={{
                    textShadow: "0px 0px 3px white",
                    WebkitTextStroke: "0.5px black",
                  }}
                >
                  <li>
                    <strong>
                      Are you struggling to attract enough cases to be selective
                      with your work?
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Are you struggling to get found by lawyers seeking expert
                      witnesses?
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Is your current SEO strategy failing to attract high-value
                      legal cases?
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Are inconsistent content updates costing you potential
                      expert witness opportunities?
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full px-4">
                <ul
                  style={{
                    textShadow: "0px 0px 3px white",
                    WebkitTextStroke: "0.5px black",
                  }}
                >
                  <li>
                    <strong>
                      Are you struggling to produce enough content to
                      consistently showcase your expertise?
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Are outdated website practices keeping you invisible to
                      lawyers and insurers?
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Is the complexity of expert witness work preventing you
                      from marketing yourself effectively?
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Is a lack of targeted messaging preventing you from
                      positioning yourself as the go-to expert?
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="w-full pb-8 px-4 text-center">
                <div style={{ marginTop: 15 }}>
                  <a href="#schedule" className="btn-main">
                    Get More Cases
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={``} style={{ paddingTop: 100, paddingBottom: 100 }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap flex-row-reverse -mx-4 lg:justify-center justify-end">
              <div className="w-3/12 pt-8 pb-8 px-4">
                {/* <Image
                  src="/assets/Headshot_1.png"
                  alt="Logo"
                  width={600}
                  height={600}
                  className=""
                  style={{
                    width: "100%",
                  }}
                /> */}
                <HeadshotIcons />
              </div>
              <div className="lg:w-1/2 w-11/12 lg:pt-8 pb-8 px-4">
                <h2>What Makes Latino Web Studio Different?</h2>
                <p>
                  We help expert witnesses get more cases and get found by
                  lawyers. You won&apos;t have to worry about being eaten alive
                  in deposition because of something on your website. Every
                  piece of content is unbiased and fact based. Learn what&apos;s
                  stopping you from growing your expert witness practice and
                  getting found by lawyers nationwide.
                </p>
                <div style={{ marginTop: 15 }}>
                  <a href="#schedule" className="btn-main">
                    Get More Cases
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContentBlock
          sectionClassName="text-black pt-[125px] pb-[100px]"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex"
          columnClassName="w-full px-4 mb-8 lg:mb-0 reviews"
        >
          <GoogleReviews
            placeId="ChIJ_TB4z7-JbIcRsXgIetzV1uU"
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          />
        </ContentBlock>

        <section
          className=""
          style={{
            backgroundColor: "var(--accent-quaternary)",
            marginTop: 100,
            marginBottom: 100,
          }}
        >
          <div className="container-fluid mx-auto px-4">
            <div className="flex flex-wrap justify-between -mx-4">
              <div
                className="lg:w-1/3 w-full pt-8 pb-8 text-center"
                style={{ backgroundColor: "var(--accent-secondary)" }}
              >
                <h2
                  className="h3 flex items-center lg:justify-center px-4"
                  style={{}}
                >
                  <span
                    className="flex justify-center items-center"
                    style={{
                      borderRadius: "50%",
                      height: 35,
                      width: 35,
                      marginRight: 8,
                      backgroundColor: "var(--accent-primary)",
                    }}
                  >
                    1.
                  </span>
                  <span className="text-white">Get More Cases</span>
                </h2>
              </div>
              <div
                className="lg:w-1/3 w-full pt-8 pb-8 text-center px-4"
                style={{ backgroundColor: "var(--accent-tertiary)" }}
              >
                <h2
                  className="h3 flex items-center lg:justify-center"
                  style={{}}
                >
                  <span
                    className="text-white flex justify-center items-center"
                    style={{
                      borderRadius: "50%",
                      height: 35,
                      width: 35,
                      marginRight: 8,
                      backgroundColor: "var(--accent-secondary)",
                    }}
                  >
                    2.
                  </span>
                  <span>Tell Us Your Expertise</span>
                </h2>
              </div>
              <div
                className="lg:w-1/3 w-full pt-8 pb-8 text-center px-4"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                <h2
                  className="h3 flex items-center lg:justify-center"
                  style={{}}
                >
                  <span
                    className="flex justify-center items-center"
                    style={{
                      borderRadius: "50%",
                      height: 35,
                      width: 35,
                      marginRight: 8,
                      backgroundColor: "white",
                    }}
                  >
                    3.
                  </span>
                  <span>Get More Cases</span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <CTA />

        <InspirationalQuote />
      </main>
    </>
  );
}
