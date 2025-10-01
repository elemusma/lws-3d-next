import ContentBlock from "@/app/components/content-block";
import "@/app/styles/blog.scss";
import Image from "next/image";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/ctaPodcast";

import GoogleReviews from "@/app/components/reusable/GoogleReviews";
import Main from "../js/main";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Inside the Attorney's Mind Podcast for Expert Witnesses | Latino Web Studio",
  description:
    "A podcast for expert witnesses featuring real attorneys sharing how they choose and work with experts. Be a guest attorney and help educate the expert community.",
  openGraph: {
    title:
      "Inside the Attorney's Mind Podcast for Expert Witnesses | Latino Web Studio",
    description:
      "A podcast for expert witnesses featuring real attorneys sharing how they choose and work with experts. Be a guest attorney and help educate the expert community.",
    url: "https://latinowebstudio.com/podcast",
    type: "website",
    images: [
      {
        url: "https://latinowebstudio.com/podcast/Inside-The-Attorneys-Mind-Podcast.jpg",
        width: 1200,
        height: 630,
        alt: "Inside the Attorney's Mind Podcast - Latino Web Studio",
      },
    ],
  },
  alternates: {
    canonical: "https://latinowebstudio.com/podcast",
  },
};

export default function PodcastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "PodcastSeries",
              name: "Inside the Attorney's Mind",
              url: "https://latinowebstudio.com/podcast",
              description:
                "A podcast helping expert witnesses understand how attorneys think. Each episode features real lawyers discussing how they choose and work with expert witnesses.",
              genre: ["Legal", "Education", "Professional Development"],
              image: "https://latinowebstudio.com/podcast/Podcast.jpg",
              creator: {
                "@type": "Organization",
                name: "Latino Web Studio",
                url: "https://latinowebstudio.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
                },
              },
              inLanguage: "en",
              potentialAction: {
                "@type": "ListenAction",
                target: [
                  "https://latinowebstudio.com/podcast",
                  "https://open.spotify.com/show/yourshowlink",
                  "https://podcasts.apple.com/yourshowlink",
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What’s the purpose of this podcast?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The podcast is focused on educating expert witnesses by giving them direct insight into what attorneys actually look for when hiring an expert.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who is the podcast audience?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our audience is made up of expert witnesses — doctors, engineers, forensic professionals, and others who want to work with more attorneys and improve their positioning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why are attorneys invited to be guests?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Because attorneys can provide firsthand insight into how they select and work with expert witnesses — their feedback helps experts improve communication and credibility.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is this a promotional podcast?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, this podcast is not about promoting services. It’s educational, and attorneys are invited to share insights and get free visibility by being featured.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What kind of questions are asked?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Questions focus on your experience working with expert witnesses, what makes them stand out, and how they can better serve legal teams.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long is each podcast episode?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Each episode runs about 20 minutes — short, focused, and easy to fit into your schedule.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do attorneys need to prepare in advance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No major prep needed. We’ll send a few talking points ahead of time. It’s a casual, interview-style format.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can attorneys promote their firm?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — we’ll include your name, firm, and website link in the episode description. It's a professional exposure opportunity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where will the podcast be published?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It will be available on Spotify, Apple Podcasts, and the Latino Web Studio website. Clips may also be shared on LinkedIn and other social platforms.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <Main />
      <main>
        <ContentBlock
          sectionClassName="text-black pt-[5px] pb-[100px]"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex flex-col items-center"
          columnClassName="w-full px-4"
        >
          <div className="mb-8 lg:mb-0 text-center">
            <h1 className="md:text-3xl text-2xl mt-0">
              Inside the Attorney&apos;s Mind - Real Conversations
            </h1>

            <p className="mb-2 text-lg">
              This podcast was created to bridge the gap between expert
              witnesses and the attorneys who hire them. In each episode, we sit
              down with practicing lawyers to explore how they evaluate, select,
              and work with expert witnesses in real cases.
            </p>
            <a href="#schedule" className="btn-main">
              Be Our Next Guest Attorney
            </a>
            {/* <div>
              <small><a href="https://youtu.be/JYgZaXCTEZU?si=1bGhEbLWdTvFnJvz" target="_blank">Watch episode with Logan Quirk</a></small>
            </div> */}
          </div>
          <div className="md:w-2/3 w-full mx-auto mt-2">
            <div className="relative w-full pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/g9FMGRbvRuY?si=4CguQnmbAi30C3ov"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            {/* <Image
              src="/podcast/Inside-The-Attorneys-Mind-Podcast.jpg"
              width={1365}
              height={1024}
              alt={
                "Inside the Attorney&apos;s Mind - Real Conversations - Tadeo (Ted) Martinez Interviewing Litigation attorneys to find out how they find and vet expert witnesses."
              }
              priority
            /> */}
          </div>
        </ContentBlock>
        <ContentBlock
          sectionClassName="text-black pt-[50px] pb-[100px]"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex flex-col"
          columnClassName="w-full px-4"
        >
          <div className="text-center">
            <h2>Inside the Attorney&apos;s Mind Episodes</h2>
            <p>
              <small>More episodes coming soon:</small>
            </p>
          </div>
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link
              href="/podcast/ian-pain-pros-attorney"
              className="flex flex-wrap"
            >
              <div className="md:w-5/12 w-full">
                <Image
                  src="/podcast/ian-pain-pros-attorney.jpg"
                  width={1365}
                  height={1024}
                  className="w-full h-100 mb-0"
                  alt={
                    "Inside the Attorney&apos;s Mind - Real Conversations - Tadeo (Ted) Martinez Interviewing Litigation attorneys to find out how they find and vet expert witnesses."
                  }
                  priority
                />
              </div>
              <div className="md:w-7/12 w-full px-4 py-4">
                <h2 className="text-xl font-proxima-bold group-hover:text-white">
                  Guest Attorney: Ian Grady, Pain Pros Injury Attorneys
                </h2>
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  In a recent conversation with trial attorney Ian Grady, we explored the realities of how lawyers choose experts, what marketing approaches help (or hurt) credibility, why responsible AI use is unavoidable, and why collaboration is powerful.
                </p>
                <p className="mt-4 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link
              href="/podcast/quirkwins-pi-attorney"
              className="flex flex-wrap"
            >
              <div className="md:w-5/12 w-full">
                <Image
                  src="/podcast/quirkwins.jpg"
                  width={1365}
                  height={1024}
                  className="w-full h-100 mb-0"
                  alt={
                    "Inside the Attorney&apos;s Mind - Real Conversations - Tadeo (Ted) Martinez Interviewing Litigation attorneys to find out how they find and vet expert witnesses."
                  }
                  priority
                />
              </div>
              <div className="md:w-7/12 w-full px-4 py-4">
                <h2 className="text-xl font-proxima-bold group-hover:text-white">
                  Guest Attorney: Logan Quirk, Quirk Accident and Injury
                  Attorneys, APC
                </h2>
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  We got into how marketing can help or hurt an expert witness. Logan emphasized that marketing is fine—but it has to be done right. &quot;I&apos;ve seen brochures used against treating physicians,&quot; he said.
                </p>
                <p className="mt-4 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
        </ContentBlock>

        <ContentBlock
          sectionClassName="text-black pt-[50px] pb-[100px]"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex flex-col"
          columnClassName="flex flex-wrap flex-col lg:flex-row items-start"
        >
          <div className="w-full text-center pb-8">
            <h2>Why Be a Guest on the Podcast?</h2>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
            <Image
              src="/practice-areas/Fast.png"
              width={100}
              height={100}
              alt={"Clear-ADA-Compliance-SEO-Expert-Witness-Traffic-Increase"}
              className="mx-auto mb-4 h-[100px] object-contain"
            />
            <h2 style={{ margin: 0 }}>Audience</h2>
            <p className="text-black">
              Get in front of expert witnesses who want to learn directly from
              attorneys. Your insights help them serve the legal system more
              effectively — and remember who shared the knowledge.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
            <Image
              src="/practice-areas/Authority.png"
              width={100}
              height={100}
              alt={
                "Compliant-ADA-Compliance-SEO-Expert-Witness-Traffic-Increase"
              }
              className="mx-auto mb-4 h-[100px] object-contain"
            />
            <h2 style={{ margin: 0 }}>Leadership</h2>
            <p>
              Share your real-world experience, best practices, and personal
              take on working with experts. Build visibility and trust across
              the legal community.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-center">
            <Image
              src="/practice-areas/Personal-Service.png"
              width={100}
              height={100}
              alt={
                "Inclusive-ADA-Compliance-SEO-Expert-Witness-Traffic-Increase"
              }
              className="mx-auto mb-4 h-[100px] object-contain"
            />
            <h2 style={{ margin: 0 }}>Impact</h2>
            <p>
              Help bridge the gap between legal and expert witness
              communication. Your knowledge contributes to better collaboration,
              better testimony, and better outcomes.
            </p>
          </div>
          <div className="w-full text-center">
            <a href="#schedule" className="btn-main">
              Be Our Next Guest Attorney
            </a>
          </div>
        </ContentBlock>
        <ContentBlock
          sectionClassName="text-black pt-[100px]"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex flex-col items-center"
          columnClassName="flex flex-wrap items-center"
        >
          <div className="w-full text-center pb-8">
            <h2 className="">
              Connecting Experts to Attorneys — One Insight at a Time
            </h2>
            <div className="divider"></div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <Image
              src="/podcast/Podcast-01.jpg"
              width={1000}
              height={667}
              alt={"Connecting Experts to Attorneys — One Insight at a Time"}
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
              <h3 style={{ marginBottom: "0px" }}>Attorney-Driven Insights</h3>
              <p>
                Each episode features real attorneys discussing what they look
                for in expert witnesses — giving you firsthand access to their
                thought process and expectations.
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
              <h3 style={{ marginBottom: "0px" }}>Strategic Exposure</h3>
              <p>
                Guest attorneys get featured on Spotify, Apple Podcasts, and our
                website — with links to their firm, boosting visibility and
                brand awareness with expert audiences.
              </p>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock
          sectionClassName="text-black pb-[100px]"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex flex-col items-center"
          columnClassName="flex flex-col flex-wrap lg:flex-row-reverse items-center"
        >
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 text-center">
            <Image
              src="/podcast/Podcast-02.jpg"
              width={1000}
              height={1333}
              alt={
                "Appearing as a guest positions you as a thought leader in your practice area"
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
              <h3 style={{ marginBottom: "0px" }}>Professional Credibility</h3>
              <p>
                Appearing as a guest positions you as a thought leader in your
                practice area — showcasing your experience to a niche,
                professional audience of expert witnesses and fellow attorneys.
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
              <h3 style={{ marginBottom: "0px" }}>Community Contribution</h3>
              <p>
                By sharing your insights, you&apos;re helping expert witnesses
                better serve the legal system. Your input directly supports
                education and ethical collaboration in the courtroom.
              </p>
            </div>
          </div>

          <div className="w-full text-center">
            <a href="#schedule" className="btn-main">
              Be Our Next Guest Attorney
            </a>
          </div>
        </ContentBlock>

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
        <CTA />
        <ContentBlock
          sectionClassName="!text-black pt-[125px] pb-[100px]"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex"
          columnClassName="w-full px-4 mb-8 lg:mb-0 reviews"
        >
          <div style={{ color: "black" }}>
            <h2>Frequently Asked Questions About the Podcast</h2>
            <h3>What&apos;s the purpose of this podcast?</h3>
            <p>
              The podcast is focused on educating expert witnesses by giving
              them direct insight into what attorneys actually look for when
              hiring an expert. It&apos;s all about improving expert-attorney
              collaboration through open, honest conversations.
            </p>

            <h3>Who is my audience?</h3>
            <p>
              My audience is made up of expert witnesses — doctors, engineers,
              forensic professionals, and other specialists — who want to work
              with more attorneys and better understand how to position
              themselves for legal work.
            </p>

            <h3>Why am I inviting attorneys to be guests?</h3>
            <p>
              Because attorneys know better than anyone what makes a strong
              expert witness. Your perspective is valuable and can help shape
              how experts show up in cases — which benefits the entire legal
              process.
            </p>

            <h3>Is this podcast promotional or sales-related?</h3>
            <p>
              No. This isn&apos;t about me promoting my business. It&apos;s
              about providing education content for the experts and as a thank
              you giving you an opportunity to promote your law firm and get
              free exposure.
            </p>

            <h3>What kind of questions will be asked?</h3>
            <p>
              We&apos;ll ask about your experience working with expert witnesses
              — what makes one stand out, what red flags you look for, and how
              experts can improve their communication, reports, or testimony.
            </p>
            <h3>How long is the podcast episode?</h3>
            <p>
              Each episode will be 20 minutes. It&apos;s meant to be quick,
              focused, and easy to fit into your schedule.
            </p>
            <h3>Do I need to prepare anything?</h3>
            <p>
              No major prep is required. We&apos;ll send over a few suggested
              questions ahead of time so you feel ready — it&apos;s a relaxed,
              interview-style conversation.
            </p>
            <h3>Will I get to share my firm or contact info?</h3>
            <p>
              Yes — we&apos;ll mention your name, firm, and include a link to
              your website in the episode description. Think of it as a small
              but meaningful way to give back to the legal community and gain
              some organic exposure.
            </p>
            <h3>Where will the podcast be published?</h3>
            <p>
              Episodes will be published on Spotify, Apple Podcasts, and on our
              website. We&apos;ll also share clips on LinkedIn and other
              platforms our expert audience follows.
            </p>
          </div>
        </ContentBlock>
      </main>
    </>
  );
}
