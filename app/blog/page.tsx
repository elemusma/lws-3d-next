import { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
// import SocialIcons from "@/app/components/social-icons";

// Define metadata specific to this page
export const metadata: Metadata = {
  title: "Marketing Tips for Expert Witnesses - Latino Web Studio",
  description:
    "Explore expert marketing strategies for expert witnesses. Learn how to attract more legal clients, improve your online presence, and grow your expert witness business with Latino Web Studio.",
  openGraph: {
    title: "Marketing Tips for Expert Witnesses - Latino Web Studio",
    description:
      "Explore expert marketing strategies for expert witnesses. Learn how to attract more legal clients, improve your online presence, and grow your expert witness business with Latino Web Studio.",
    url: `https://latinowebstudio.com/blog`,
    type: "article",
    images: [
      {
        url: `https://latinowebstudio.com/blog/Patio-Socials-March-01.jpg`,
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
            <Link href="/blog/user-experience-ux" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 08, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Why Your Website Might Be Costing You Cases—and How UX Can Fix That
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
            <Link href="/blog/keyword-stuffing" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 06, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Keyword Stuffing in Content and URLs: Does It Still Work in 2025?
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
            <Link href="/blog/more-cases" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 05, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Want More Cases? Here&apos;s How Lawyers Really Search for Experts Online
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
            <Link href="/blog/expert-witness-directories" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 04, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Expert Witness Directories: How They Work and Why Visibility Matters
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
            <Link href="/blog/court-experience-no-cases" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 03, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Why Your Court Experience Isn&apos;t Helping You Get More Cases (Yet)
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
            <Link href="/blog/lawyers-experts-websites" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 02, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  What Lawyers Want to See on Your Website Before They Call You
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
            <Link href="/blog/attorneys-keywords" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 01, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  How to Write Articles with Keywords Attorneys Are Looking For
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
            <Link href="/blog/marketing-strategies" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 31, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold uppercase group-hover:text-white">
                  Marketing Strategies for Expert Witnesses in 2025
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
            <Link href="/blog/ai-ranking" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 30, 2025
                </p>
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
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 29, 2025
                </p>
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
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 28, 2025
                </p>
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
            <Link href="/blog/eeat" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 27, 2025
                </p>
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
            <Link href="/blog/deceptive-content" className="flex flex-wrap">
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 26, 2025
                </p>
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
              href="/blog/schema-markup"
              className="flex flex-wrap"
            >
              <div className="md:w-3/4 w-full px-4 py-10">
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 25, 2025
                </p>
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
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 24, 2025
                </p>
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
              <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 23, 2025
                </p>
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
