import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import { Website } from "../components/globals";
import SocialIcons from "@/app/components/social-icons";

// Define metadata specific to this page
export const metadata: Metadata = {
  title: "Marketing Tips for Expert Witnesses - Latino Web Studio",
  description:
    "Explore expert marketing strategies for expert witnesses. Learn how to attract more legal clients, improve your online presence, and grow your expert witness business with Latino Web Studio.",
  openGraph: {
    title: "Marketing Tips for Expert Witnesses - Latino Web Studio",
    description:
      "Explore expert marketing strategies for expert witnesses. Learn how to attract more legal clients, improve your online presence, and grow your expert witness business with Latino Web Studio.",
    url: `${Website}/blog`,
    type: "article",
    images: [
      {
        url: `${Website}/blog/Patio-Socials-March-01.jpg`,
        width: 1200,
        height: 630,
        alt: "Marketing Tips for Expert Witnesses",
      },
    ],
  },
};

export default function NewsPage() {
  return (
    <>
      <ContentBlock
        sectionClassName="relative pt-[150px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full"
      >
        <div className="relative">
          <h1 className="text-4xl uppercase font-proxima-bold">
            Marketing Tips for Expert Witnesses
          </h1>
        </div>
      </ContentBlock>
      {/* <ServingTagline /> */}
      <ContentBlock
        sectionClassName="relative py-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName=""
        columnClassName="flex flex-wrap"
      >
        <div className="lg:w-3/4 w-full lg:pr-10 mb-10">
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link href="/blog/ai-ranking-expert-witness" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  AI Ranking for Expert Witnesses
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link href="/blog/seo-expert-witnesses" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  SEO for Expert Witnesses: Convert Lawyer Traffic
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link
              href="/blog/deposition-readiness-checklist"
              className="flex flex-wrap items-stretch"
            >
              {/* <div className="md:w-1/4 w-full">
                <Image
                  src="/news/Blastcraft-Rodney-Barnes-Tadeo.jpg"
                  alt="Wallpaper"
                  className="h-[225px] w-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div> */}
              <div className="md:w-3/4 w-full px-4 py-10">
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Deposition Safe Content in Your Expert Witness Website
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link href="/blog/expertise-experience-authoritativeness-trustworthiness-e-e-a-t" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Expertise, Experience, Authoritativeness, and Trustworthiness (E-E-A-T)
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link href="/blog/deceptive-content-expert-witnesses" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Deceptive Content in Expert Witness Marketing: Protect Your Reputation
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link
              href="/blog/schema-markup-expert-witnesses"
              className="flex flex-wrap"
            >
              <div className="md:w-3/4 w-full px-4 py-10">
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Schema Markup to Get Found by Lawyers
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link
              href="/blog/citations-directories"
              className="flex flex-wrap"
            >
              
              <div className="md:w-3/4 w-full px-4 py-10">
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  The Expert Witness&apos;s Guide to High-Authority Directories
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group">
            <Link href="/blog/what-how-expert-witness" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  What is an expert witness and how to become one?
                </h2>
                <p className="mt-0 text-gray-700 text-sm group-hover:text-white">
                  READ MORE
                </p>
              </div>
            </Link>
          </div>
          {/* end of news blog post */}
        </div>
        {/* <div className="lg:w-1/4 w-full">
          <div className="bg-[#f7f7f7] p-4 mb-4">
            <p className="text-xl text-gray-700 m-0">Media Contact</p>
            <hr />
            <p className="mb-0">
              Please send an email to{" "}
              <Link
                href="mailto:marketing@paintinnovators.com"
                className="text-accent hover:text-accent-dark"
              >
                marketing@paintinnovators.com
              </Link>{" "}
              for any media inquiries.
            </p>
          </div>
          <div className="bg-[#f7f7f7] p-4 mb-4">
            <p className="text-xl text-gray-700 mb-0">Follow Us</p>
            <hr />
            <div className="flex flex-wrap pt-4">
              <SocialIcons />
            </div>
          </div>
          <div className="bg-[#f7f7f7] p-4 mb-4">
            <p className="text-xl text-gray-700 mb-0">Resources</p>
            <hr />
            <p className="mb-0">
              <Link href="/about/brandresources">Brand Resources</Link>
            </p>
            <p className="m-0">
              <Link href="/about/website-feedback">Website Feedback</Link>
            </p>
            <p className="m-0">
              <Link href="/about/service-feedback">Service Feedback</Link>
            </p>
          </div>
        </div> */}
      </ContentBlock>
    </>
  );
}
