// app/podcast/page.tsx

export const dynamic = "force-dynamic";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Sidebar from "../components/reusable/Sidebar";
import CTA from "@/app/components/reusable/ctaPodcast";
import he from "he";
import Main from "../js/main";

import type { Metadata } from "next";
import ContentBlock from "../components/content-block";
import NewsPostCard from "../components/podcastCard";
import GoogleReviews from "../components/reusable/GoogleReviews";

export const metadata: Metadata = {
  title:
    "Inside the Attorney's Mind Podcast - Expert Witness & Legal Insights - Latino Web Studio",
  description:
    "Listen to insights from legal professionals discussing expert witness practices, attorney strategies, and how to grow your legal business.",
  openGraph: {
    title:
      "Inside the Attorney's Mind Podcast - Expert Witness & Legal Insights - Latino Web Studio",
    description:
      "Listen to insights from legal professionals discussing expert witness practices, attorney strategies, and how to grow your legal business.",
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

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
};

function stripHtmlAndDecode(html: string) {
  const withoutTags = html.replace(/<[^>]*>?/gm, "");
  return he.decode(withoutTags);
}

async function fetchPosts(
  page = 1,
  perPage = 10,
): Promise<{
  posts: Post[];
  totalPages: number;
}> {
  // Update this category ID to match your podcast category
  const PODCAST_CATEGORY_ID = 119;

  const res = await fetch(
    `https://resources.latinowebstudio.com/wp-json/wp/v2/posts?categories=${PODCAST_CATEGORY_ID}&page=${page}&per_page=${perPage}&_embed`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);

  return { posts, totalPages };
}

// Helper to generate page numbers with ellipses
function getPagination(current: number, total: number): (number | "...")[] {
  if (total <= 1) return [];

  const delta = 2;
  const range: (number | "...")[] = [];

  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total - 1, current + delta);
    i++
  ) {
    range.push(i);
  }

  if (current - delta > 2) {
    range.unshift("...");
  }
  if (current + delta < total - 1) {
    range.push("...");
  }

  const result = [1, ...range];

  // Only add total if it's greater than 1 and not already in the result
  if (total > 1 && !result.includes(total)) {
    result.push(total);
  }

  return result;
}

export default async function PodcastPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;

  const currentPage = parseInt(searchParams?.page || "1", 10);
  const perPage = 10;

  const { posts, totalPages } = await fetchPosts(currentPage, perPage);

  const pagination = getPagination(currentPage, totalPages);

  return (
    <>
      <Main />
      <main>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Inside the Attorney&apos;s Mind Podcast
          </h1>

          {/* List of posts */}
          <div className="flex flex-wrap">
            <div className="w-full mb-10 flex flex-wrap justify-start">
              {posts.map((post, index) => {
                const ogImage =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "https://latinowebstudio.com/default-og-image.jpg"; // fallback

                const excerpt = stripHtmlAndDecode(post.excerpt.rendered).slice(
                  0,
                  125,
                );
                const decodedTitle = stripHtmlAndDecode(post.title.rendered); // Add this line

                return (
                  <NewsPostCard
                    key={post.id}
                    href={`/podcast/${post.slug}`}
                    imageSrc={ogImage}
                    imageAlt={post.title.rendered}
                    title={decodedTitle}
                    description={excerpt}
                    priority={index === 0} // Only prioritize the first post
                  />
                );
              })}
            </div>
            {/* Condensed Pagination with Prev/Next */}
            <div className="w-full flex flex-wrap justify-center gap-2 mt-8 items-center">
              {/* Previous button */}
              {currentPage > 1 && (
                <Link
                  href={`/podcast?page=${currentPage - 1}`}
                  className="px-3 py-2 rounded bg-gray-100 border text-black hover:bg-gray-300 transition-all duration-200 ease-in-out"
                >
                  Previous
                </Link>
              )}

              {/* Page numbers with ellipses */}
              {pagination.map((item, idx) =>
                item === "..." ? (
                  <span key={idx} className="px-3 py-2">
                    ...
                  </span>
                ) : (
                  <Link
                    key={idx}
                    href={`/podcast?page=${item}`}
                    className={`px-3 py-2 rounded ${
                      item === currentPage
                        ? "bg-[var(--accent-primary)] text-black font-bold transition-all duration-200 ease-in-out"
                        : "text-black hover:bg-[var(--accent-secondary)] hover:text-white transition-all duration-200 ease-in-out"
                    }`}
                  >
                    {item}
                  </Link>
                ),
              )}

              {/* Next button */}
              {currentPage < totalPages && (
                <Link
                  href={`/podcast?page=${currentPage + 1}`}
                  className="px-3 py-2 rounded bg-gray-100 border text-black hover:bg-gray-300 transition-all duration-200 ease-in-out"
                >
                  Next
                </Link>
              )}
            </div>
          </div>
          <ContentBlock
            sectionClassName="text-black pb-[100px]"
            containerClassName="max-w-screen-xl mx-auto"
            rowClassName="flex flex-col"
            columnClassName="w-full px-4 flex flex-wrap justify-center"
          >
            {/* <div className="text-center">
                      <h2>Inside the Attorney&apos;s Mind Episodes</h2>
                      <p>
                        <small>More episodes coming soon:</small>
                      </p>
                    </div> */}
            {/* <NewsPostCard
            href="/podcast/bruning-law"
            imageSrc="/podcast/bruning-legal-st-louis.jpg"
            imageAlt="Inside the Attorney's Mind - Real Conversations - Tadeo (Ted) Martinez Interviewing Personal Injury Attorneys."
            title="Bruning Legal in St. Louis, MO"
            description="What attorneys look for when hiring experts, how professional websites and credibility impact hiring decisions."
            priority
          />
                    <NewsPostCard
            href="/podcast/dettman-law-louisville"
            imageSrc="/podcast/Dettman-Law-Louisville.jpg"
            imageAlt="Inside the Attorney's Mind - Real Conversations - Tadeo (Ted) Martinez Interviewing Personal Injury Attorneys."
            title="Dettman Law in Louisville, KY"
            description="Trial attorney Brian, shares the critical factors attorneys consider when evaluating expert witnesses online."
            priority
          />
                    <NewsPostCard
            href="/podcast/karen-elevation-law"
            imageSrc="/podcast/Karen-Elevation-Law.jpg"
            imageAlt="Inside the Attorney's Mind - Real Conversations - Tadeo (Ted) Martinez Interviewing Personal Injury Attorneys."
            title="Elevation Law in Denver, CO"
            description="Karen tackled one of the most persistent myths: that immigrants can simply &quot;get in line&quot; and fix their status."
            priority
          />
                    <NewsPostCard
            href="/podcast/ian-pain-pros-attorney"
            imageSrc="/podcast/ian-pain-pros-attorney.jpg"
            imageAlt="Inside the Attorney's Mind - Real Conversations - Tadeo (Ted) Martinez Interviewing Personal Injury Attorneys."
            title="Pain Pros Injury in Atlanta, GA"
            description="What marketing approaches help (or hurt) credibility, responsible AI use, and why collaboration is powerful."
            priority
          />
                    <NewsPostCard
            href="/podcast/quirkwins-pi-attorney"
            imageSrc="/podcast/quirkwins.jpg"
            imageAlt="Inside the Attorney's Mind - Real Conversations - Tadeo (Ted) Martinez Interviewing Personal Injury Attorneys."
            title="Quirkwins in Los Angeles, CA"
            description="Marketing is fine-but it has to be done right. &quot;I&apos;ve seen brochures used against treating physicians,&quot; he said."
            priority
          /> */}

            <div className="lg:w-1/2 w-full text-center">
              <a href="#schedule" className="btn-main">
                Be Our Next Guest Attorney
              </a>
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
                effectively and remember who shared the knowledge.
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
                communication. Your knowledge contributes to better
                collaboration, better testimony, and better outcomes.
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
                Connecting Experts to Attorneys - One Insight at a Time
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
                <h3 style={{ marginBottom: "0px" }}>
                  Attorney-Driven Insights
                </h3>
                <p>
                  Each episode features real attorneys discussing what they look
                  for in expert witnesses, giving you firsthand access to their
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
                  Guest attorneys get featured on Spotify, Apple Podcasts, and
                  our website, with links to their firm, boosting visibility and
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
                <h3 style={{ marginBottom: "0px" }}>
                  Professional Credibility
                </h3>
                <p>
                  Appearing as a guest positions you as a thought leader in your
                  practice area, showcasing your experience to a niche,
                  professional audience of expert witnesses and fellow
                  attorneys.
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
            containerClassName="max-w-screen-xl mx-auto"
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
                My audience is made up of expert witnesses who are doctors,
                engineers, forensic professionals, and other specialists who
                want to work with more attorneys and better understand how to
                position themselves for legal work.
              </p>

              <h3>Why am I inviting attorneys to be guests?</h3>
              <p>
                Because attorneys know better than anyone what makes a strong
                expert witness. Your perspective is valuable and can help shape
                how experts show up in cases which benefits the entire legal
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
                We&apos;ll ask about your experience working with expert
                witnesses, what makes one stand out, what red flags you look
                for, and how experts can improve their communication, reports,
                or testimony.
              </p>
              <h3>How long is the podcast episode?</h3>
              <p>
                Each episode will be 20 minutes. It&apos;s meant to be quick,
                focused, and easy to fit into your schedule.
              </p>
              <h3>Do I need to prepare anything?</h3>
              <p>
                No major prep is required. We&apos;ll send over a few suggested
                questions ahead of time so you feel ready. It&apos;s a relaxed,
                interview-style conversation.
              </p>
              <h3>Will I get to share my firm or contact info?</h3>
              <p>
                Yes, we&apos;ll mention your name, firm, and include a link to
                your website in the episode description. Think of it as a small
                but meaningful way to give back to the legal community and gain
                some organic exposure.
              </p>
              <h3>Where will the podcast be published?</h3>
              <p>
                Episodes will be published on Spotify, Apple Podcasts, and on
                our website. We&apos;ll also share clips on LinkedIn and other
                platforms our expert audience follows.
              </p>
            </div>
          </ContentBlock>
        </div>
      </main>
    </>
  );
}
