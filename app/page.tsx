// import GoogleReviews from "./components/google_reviews";
"use client";
import Image from "next/image";
import { useEffect } from "react";
import CalendlyWidget from "./components/calendly";
// import Footer from "./components/footer";
import HeadshotIcons from "./components/headshot-icons";
import Main from "./js/main";
import "./styles/body.scss";

export default function Home() {
  // const currentYear = new Date().getFullYear();
  useEffect(() => {
    const iframes = document.querySelectorAll(
      ".video-container"
    ) as NodeListOf<HTMLIFrameElement>;
    iframes.forEach((iframe) => {
      const aspectRatio = 560 / 315; // 16:9
      iframe.style.height = `${iframe.offsetWidth / aspectRatio}px`;
    });
  }, []);
  return (
    <>
      <Main />
      <main>
        <section className="hero" style={{}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap md:flex-row-reverse justify-center mx-4">
              {/* <div className="lg:w-5/12 w-full px-4 lg:pb-0 pb-8">
                <iframe
                  className="video-container"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/FndI3gLrKa0?si=UHYc-3c1oUdQLuo2"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div> */}
              <div className="lg:w-3/4 w-full px-4 text-center">
                <div className="lg:w-full w-full">
                  <h1 className="text-secondary animated-heading">
                    Get More Cases - Get Found by Lawyers
                  </h1>
                </div>
                {/* <h2>iOS, Android, &amp; Web Apps</h2> */}
                {/* <div className="lg:w-9/12 w-1/9"> */}
                  <p style={{marginTop: 15, marginBottom: 15}}>
                  We help expert witnesses attract more high-value cases by implementing a targeted, fact-based content strategy without risking damaging content being used against you in deposition.
                  </p>
                  {/* <Login /> */}
                {/* </div> */}
                <div>
                  <a href="#schedule" className="btn-main">
                    Schedule a Call
                  </a>
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
              <div className="lg:w-1/3 w-full lg:pt-8 lg:pb-8 pt-4 pb-4 px-4 lg:text-center text-white">
                <h2 className="h3" style={{}}>
                  Lawyers Find You
                </h2>
              </div>
              <div
                className="lg:w-1/3 w-full lg:pt-8 lg:pb-8 pt-4 pb-4 px-4 lg:text-center text-white"
                style={{ backgroundColor: "var(--accent-quaternary)" }}
              >
                <h2 className="h3">Receive a Retainer</h2>
              </div>
              <div className="lg:w-1/3 w-full lg:pt-8 lg:pb-8 pt-4 pb-4 px-4 lg:text-center text-white">
                <h2 className="h3">Bill Monthly</h2>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 100, paddingBottom: 100 }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full pb-8 px-4 text-center">
                <h2>Are you unsure how to write content that won&apos;t be used against you in court?</h2>
                <p>Don&apos;t get eaten alive at deposition.</p>
              </div>
              <div className="lg:w-1/2 w-full px-4">
                <ul style={{ textShadow: "0px 0px 3px white",WebkitTextStroke: "0.5px black" }}>
                  <li><strong>Are you struggling to attract enough cases to be selective with your work?</strong></li>
                  <li><strong>Are you struggling to get found by lawyers seeking expert witnesses?</strong></li>
                  <li><strong>Is your current SEO strategy failing to attract high-value legal cases?</strong></li>
                  <li><strong>Are inconsistent content updates costing you potential expert witness opportunities?</strong></li>
                  
                </ul>
              </div>
              <div className="lg:w-1/2 w-full px-4">
              <ul style={{ textShadow: "0px 0px 3px white",WebkitTextStroke: "0.5px black" }}>
                <li><strong>Are you struggling to produce enough content to consistently showcase your expertise?</strong></li>
                  <li><strong>Are outdated website practices keeping you invisible to lawyers and insurers?</strong></li>
                  <li><strong>Is the complexity of expert witness work preventing you from marketing yourself effectively?</strong></li>
                  <li><strong>Is a lack of targeted messaging preventing you from positioning yourself as the go-to expert?</strong></li>
                </ul>
              </div>
              <div className="w-full pb-8 px-4 text-center">
                <div style={{ marginTop: 15 }}>
                  <a href="#schedule" className="btn-main">
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          {/* Background Image */}
          {/* <div className="absolute inset-0">
            <Image
              src="https://resources.latinowebstudio.com/wp-content/uploads/2023/10/Messaging.jpeg"
              alt="Messaging Background"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-white opacity-95"></div>
          </div> */}

          {/* Content Wrapper */}
          <div className="w-full px-4 sm:px-6 lg:px-8 pb-[150px]">
            <div className="flex flex-wrap justify-center items-center">
              <div className="lg:w-3/4 md:w-full text-center pb-4">
                <h2>Get Lawyers Contacting You on a Monthly Basis</h2>
                <p>
                  Mark had zero traffic to his website and no lawyers finding him. Now he has lawyers contacting him on a monthly basis and is working on his expert witness business full-time.
                </p>
              </div>
              
              <div className="md:w-full w-full px-4">
                <Image
                  src="/photos/SEO-Results.png"
                  alt="Get Lawyers Contacting You on a Monthly Basis"
                  width={2013}
                  height={1194}
                  className="object-contain"
                />
              </div>
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
                Be a trusted expert while preventing content from being used against you in deposition.
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
                Increases visibility to attract higher-value cases and establish authority.
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
                Ensures regular, relevant updates that keep your expertise top-of-mind for potential clients.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex justify-center">
              <a href="#schedule" className="btn-main">
                Schedule a Call
              </a>
            </div>
          </div>
        </section>

        {/* <section className={`light`}>
          <h2>👩🏽‍🚀 Services Offered</h2>
          <p>
            Build apps that seamlessly work on iOS, Android, and Web, saving
            time and resources. Create systems that grow with your business to
            ensure future readiness. Automate and simplify workflows, reducing
            inefficiencies and operational costs.
          </p>

          <h2>🏆 What Makes Us Different?</h2>
          <p>
            Struggling to scale your business and develop robust apps?
            Specializing in cross-platform solutions, this approach simplifies
            tech operations and supports your funding goals. Years of experience
            and a proven track record in scalable, efficient software back these
            solutions.
          </p>
        </section> */}

        {/* <blockquote>
          <p>The best way out is always through - Robert Frost</p>
        </blockquote> */}

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
                  We help expert witnesses get more cases and get found by lawyers. You won&apos;t have to worry about being eaten alive in deposition because of something on your website. Every piece of content is unbiased and fact based. Learn what&apos;s stopping you from growing your expert witness practice and getting found by lawyers nationwide.
                </p>
                <div style={{ marginTop: 15 }}>
                  <a href="#schedule" className="btn-main">
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <span className="text-white">Schedule a Call</span>
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

        <section style={{ paddingTop: 100, paddingBottom: 100 }} id="schedule">
          <div className="container mx-auto px-4">
            <div
              className="flex justify-center -mx-4"
              style={{ flexWrap: "wrap" }}
            >
              <div className="px-4 text-center lg:w-1/2">
                <h2>Get More Cases and Get Found by Lawyers</h2>
                <p>
                  Schedule a time below to learn how we can help you get more cases and get found by more lawyers as an expert witness.
                </p>
                <small>It&apos;s not by attending the SEAK conference every year, although it is recommended.</small>
              </div>
              <div className="px-4 text-center w-full" id="calendar">
                {/* <!-- Calendly inline widget begin --> */}
                <CalendlyWidget />
                {/* <!-- Calendly inline widget end --> */}
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section text-center">
          <p>
            <strong>
              If you are not willing to risk the unusual, you will have to
              settle for the ordinary.
            </strong>
            <br />
            <em>Jim Rohn</em>
          </p>
        </section>
      </main>
    </>
  );
}
