// import GoogleReviews from "./components/google_reviews";
"use client";
import Image from "next/image";
import { useEffect } from "react";
import CalendlyWidget from "./components/calendly";
import Footer from "./components/footer";
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
            <div className="flex flex-wrap md:flex-row-reverse justify-start mx-4">
              <div className="lg:w-5/12 w-full px-4 lg:pb-0 pb-8">
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

                {/* <HeadshotIcons /> */}
              </div>
              <div className="lg:w-7/12 w-full px-4">
                <div className="lg:w-7/12 w-full">
                  <h1 className="text-secondary animated-heading">
                    Web Design &amp; SEO
                  </h1>
                </div>
                {/* <h2>iOS, Android, &amp; Web Apps</h2> */}
                <div className="lg:w-9/12 w-1/9">
                  <p>
                    If you are an engineering firm, mortgage lender, print
                    screening and embroidery or a blue collar company we allow
                    you to focus on growing your company without having to
                    stress about technical problems with web development or SEO.
                  </p>
                  {/* <Login /> */}
                </div>
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
                  Comprehensive technical support.
                </h2>
              </div>
              <div
                className="lg:w-1/3 w-full lg:pt-8 lg:pb-8 pt-4 pb-4 px-4 lg:text-center text-white"
                style={{ backgroundColor: "var(--accent-quaternary)" }}
              >
                <h2 className="h3">Streamlined digital operations.</h2>
              </div>
              <div className="lg:w-1/3 w-full lg:pt-8 lg:pb-8 pt-4 pb-4 px-4 lg:text-center text-white">
                <h2 className="h3">Reliable, immediate service.</h2>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 200, paddingBottom: 100 }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full pb-8 px-4 text-center">
                <h2>Are you overwhelmed by website maintenance?</h2>
              </div>
              <div className="lg:w-1/2 w-full px-4">
                <ul style={{ textShadow: "0px 0px 3px white" }}>
                  <li>Struggling with SEO and online visibility?</li>
                  <li>Concerned about website security and updates?</li>
                  <li>Does your website not work properly?</li>
                  <li>Looking for reliable tech and design support?</li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full px-4">
                <ul style={{ textShadow: "0px 0px 3px white" }}>
                  <li>Wasting time with non-responsive tech support?</li>
                  <li>Unsure how to handle tech stack updates?</li>
                  <li>Are you attending a convention soon?</li>
                  <li>Do you want to look good for investors?</li>
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
            <div className="flex flex-wrap items-center">
              <div className="w-full text-center pb-4">
                <h2>Get SEO Results Like This</h2>
                <p>
                  Mark had zero traffic and no leads coming in. Now he is busy
                  and working on his practice full-time.
                </p>
              </div>
              <div className="md:w-1/2 w-full px-4">
                <Image
                  src="/photos/SEO-Results-01.jpg"
                  alt="Clarify Your Message"
                  width={2013}
                  height={1194}
                  className="object-contain"
                />
              </div>
              <div className="md:w-1/2 w-full px-4">
                <Image
                  src="/photos/SEO-Results-02-copy.jpg"
                  alt="Clarify Your Message"
                  width={2013}
                  height={1194}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {/* Card 1 */}
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/End-to-End-Technical-Management.png"
                  alt="Clarify Your Message"
                  width={2013}
                  height={1194}
                  className="h-24 w-auto object-contain"
                />
                <h3 className="mt-2 font-semibold">
                  End-to-End Technical Management:
                </h3>
                <p className="" style={{ fontSize: 18 }}>
                  Don&apos;t worry about technical problems. Programming, theme
                  / software updates, ads, SEO, emails, DNS, hosting. We&apos;ll
                  take care of it.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/Design-Programming.png"
                  alt="Built To Sell"
                  width={1169}
                  height={1237}
                  className="h-24 w-auto object-contain"
                />
                <h3 className="mt-2 font-semibold">
                  Graphics, Design, Landing Pages, Funnels &amp; More:
                </h3>
                <p className="" style={{ fontSize: 18 }}>
                  Graphic design for landing pages, funnels, business cards,
                  logo, websites, and more. We&apos;ll create a custom design
                  for your needs.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/Responsive-Real-Customer-Support.png"
                  alt="Build For The Modern Times"
                  width={1446}
                  height={1173}
                  className="h-24 w-auto object-contain"
                />
                <h3 className="mt-2 font-semibold">
                  Responsive &amp; Real Customer Support:
                </h3>
                <p className="" style={{ fontSize: 18 }}>
                  Are you tired of waiting hours for support? Give us a call, a
                  real person will talk to you and take care of everything.
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
                  Unlike typical tech support, we offer comprehensive, proactive
                  website and tech management, ensuring nothing gets in the way
                  of your business growth. With years of experience and a
                  commitment to reliability, how often do you find tech support
                  that genuinely understands business needs? Contact us to find
                  out how we can help.
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
                  <span className="text-white">Schedule Free Consultation</span>
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
                  <span>Onboarding in Minutes</span>
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
                  <span>Optimize Your Business</span>
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
                <h2>How to Get Started</h2>
                <p>
                  Schedule a time below to discuss ideas to help you save time
                  while growing your business.
                </p>
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
      <Footer />
    </>
  );
}
