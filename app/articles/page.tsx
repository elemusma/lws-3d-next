import { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";
import ContentBlock from "../components/content-block";
import Main from "@/app/js/main";
import CTA from "@/app/components/reusable/cta";
import Sidebar from "../components/reusable/Sidebar";
// import SocialIcons from "@/app/components/social-icons";

// Define metadata specific to this page
export const metadata: Metadata = {
  title:
    "Web Design & SEO Marketing Tips for Expert Witnesses - Latino Web Studio",
  description:
    "Explore expert marketing strategies for expert witnesses. Learn how to attract more legal clients, improve your online presence, and grow your expert witness business with Latino Web Studio.",
  openGraph: {
    title:
      "Web Design & SEO Marketing Tips for Expert Witnesses - Latino Web Studio",
    description:
      "Explore expert marketing strategies for expert witnesses. Learn how to attract more legal clients, improve your online presence, and grow your expert witness business with Latino Web Studio.",
    url: `https://latinowebstudio.com/blog`,
    type: "article",
    images: [
      {
        url: `https://latinowebstudio.com/photos/Helping-Expert-Witnesses.jpg`,
        width: 1200,
        height: 630,
        alt: "Web Design & SEO Marketing Tips for Expert Witnesses",
      },
    ],
  },
  // ✅ Add this block:
  alternates: {
    canonical: "https://latinowebstudio.com/blog",
  },
};

export default function NewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Web Design & SEO Marketing Tips for Expert Witnesses",
            description:
              "Explore expert marketing strategies for expert witnesses. Learn how to attract more legal clients, improve your online presence, and grow your expert witness business with Latino Web Studio.",
            url: "https://latinowebstudio.com/blog",
            inLanguage: "en",
            keywords:
              "SEO tips, web design for expert witnesses, marketing for expert witnesses, legal SEO, attorney marketing strategies, website optimization for lawyers, expert witness marketing",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  url: "https://latinowebstudio.com/articles/keyword-cannibalization",
                  name: "Keyword Cannibalization: What It Is, Why It Hurts Rankings, and How to Fix It",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  url: "https://latinowebstudio.com/articles/how-to-improve-page-speed",
                  name: "How to Improve Page Speed for Better SEO and User Experience",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  url: "https://latinowebstudio.com/articles/web-traffic",
                  name: "What Is Web Traffic? How to Turn Attorney Visits Into Cases",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  url: "https://latinowebstudio.com/articles/google-search-rankings",
                  name: "Understanding and Improving Google Search Rankings in 2025",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  url: "https://latinowebstudio.com/articles/search-intent",
                  name: "How Expert Witnesses Can Use Search Intent to Attract More Attorneys",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  url: "https://latinowebstudio.com/articles/mobile-responsiveness",
                  name: "Mobile Responsiveness for Expert Witness Websites",
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  url: "https://latinowebstudio.com/articles/user-experience-ux",
                  name: "Why Your Website Might Be Costing You Cases—and How UX Can Fix That",
                },
                {
                  "@type": "ListItem",
                  position: 8,
                  url: "https://latinowebstudio.com/articles/keyword-stuffing",
                  name: "Keyword Stuffing in Content and URLs: Does It Still Work in 2025?",
                },
                {
                  "@type": "ListItem",
                  position: 9,
                  url: "https://latinowebstudio.com/articles/more-cases",
                  name: "Want More Cases? Here's How Lawyers Really Search for Experts Online",
                },
                {
                  "@type": "ListItem",
                  position: 10,
                  url: "https://latinowebstudio.com/articles/expert-witness-directories",
                  name: "Expert Witness Directories: How They Work and Why Visibility Matters",
                },
              ],
            },
          }),
        }}
      />

      <Main />
      <ContentBlock
        sectionClassName="relative pt-[150px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-wrap"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <div className="relative">
          <h1 className="text-4xl uppercase font-proxima-bold">
            Web Design, SEO &amp; Marketing Insights for Expert Witnesses
          </h1>
        </div>
      </ContentBlock>
      {/* <ServingTagline /> */}
      <ContentBlock
        sectionClassName="relative py-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row items-start"
      >
        <div className="lg:w-3/4 w-full lg:pr-10 mb-10 px-4">
          {/* start of news blog post */}
          <div className="news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4">
            <Link href="/articles/what-is-blog-post" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  July 28, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  What Is a Blog Post? Structure, Strategy, and SEO for Expert
                  Visibility
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
            <Link href="/articles/keyword-mapping" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  July 24, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Keyword Mapping: Build Smarter SEO Strategies for Expert
                  Witness Websites
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
            <Link href="/articles/keyword-research" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  July 18, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Keyword Research Strategies for Expert Witness Visibility
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
            <Link href="/articles/content-strategy" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  July 17, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Content Strategy for Expert Witnesses: Enhancing Visibility
                  and Credibility Online
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
            <Link href="/articles/what-is-cache" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  July 16, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  What Is Cache? Definition, Types, and How It Works
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
              href="/articles/keyword-cannibalization"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  July 04, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Keyword Cannibalization: What It Is, Why It Hurts Rankings,
                  and How to Fix It
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
              href="/articles/how-to-improve-page-speed"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  July 03, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  How to Improve Page Speed for Better SEO and User Experience
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
            <Link href="/articles/web-traffic" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  July 02, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  What Is Web Traffic? How to Turn Attorney Visits Into Cases
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
              href="/articles/google-search-rankings"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 30, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Understanding and Improving Google Search Rankings in 2025
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
            <Link href="/articles/search-intent" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 14, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  How Expert Witnesses Can Use Search Intent to Attract More
                  Attorneys
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
              href="/articles/mobile-responsiveness"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 13, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Mobile Responsiveness for Expert Witness Websites
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
              href="/articles/user-experience-ux"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 08, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Why Your Website Might Be Costing You Cases—and How UX Can Fix
                  That
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
            <Link href="/articles/keyword-stuffing" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 06, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Keyword Stuffing in Content and URLs: Does It Still Work in
                  2025?
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
            <Link href="/articles/more-cases" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 05, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Want More Cases? Here&apos;s How Lawyers Really Search for
                  Experts Online
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
              href="/articles/expert-witness-directories"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 04, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Expert Witness Directories: How They Work and Why Visibility
                  Matters
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
              href="/articles/court-experience-no-cases"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 03, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Why Your Court Experience Isn&apos;t Helping You Get More
                  Cases (Yet)
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
              href="/articles/lawyers-experts-websites"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 02, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
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
            <Link
              href="/articles/attorneys-keywords"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  June 01, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
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
            <Link
              href="/articles/marketing-strategies"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 31, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
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
            <Link href="/articles/ai-ranking" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 30, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
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
            <Link
              href="/articles/seo-expert-witnesses"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 29, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
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
              href="/articles/deposition-readiness-checklist"
              className="flex flex-wrap items-stretch"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 28, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
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
            <Link href="/articles/eeat" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 27, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Expertise, Experience, Authoritativeness, and Trustworthiness
                  (E-E-A-T)
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
            <Link href="/articles/deceptive-content" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 26, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
                  Deceptive Content in Expert Witness Marketing: Protect Your
                  Reputation
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
            <Link href="/articles/schema-markup" className="flex flex-wrap">
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 25, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
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
              href="/articles/citations-directories"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 24, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
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
            <Link
              href="/articles/what-how-expert-witness"
              className="flex flex-wrap"
            >
              <div className="w-full px-4 py-10">
                <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
                  May 23, 2025
                </p>
                <h2 className="text-3xl font-proxima-bold group-hover:text-white">
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
        <Sidebar />
      </ContentBlock>
      <CTA />
    </>
  );
}
