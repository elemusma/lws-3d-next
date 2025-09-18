// app/articles/page.tsx
import axios from "axios";
import Link from "next/link";
import { Metadata } from "next";
import Main from "../js/main";
import Sidebar from "../components/reusable/Sidebar";
import ContentBlock from "../components/content-block";
declare module "he";
import he from "he";
import CTA from "@/app/components/reusable/cta";
import Image from "next/image";

// function decodeEntities(encodedString: string) {
//   const textarea = document.createElement("textarea");
//   textarea.innerHTML = encodedString;
//   return textarea.value;
// }

function stripHtml(html: string) {
  const withoutTags = html.replace(/<[^>]*>?/gm, "");
  return he.decode(withoutTags);
}

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    ["wp:featuredmedia"]?: { source_url: string }[];
  };
};

// Helper to strip HTML
// function stripHtml(html: string) {
//   const withoutTags = html.replace(/<[^>]*>?/gm, "");
//   return decodeEntities(withoutTags);
// }

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
    canonical: "https://latinowebstudio.com/articles",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export const dynamic = "force-dynamic"; // optional: disables static caching for dev

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams; // ⬅️ await here
  const currentPage = parseInt(params.page || "1", 10);
  const perPage = 10;

  const res = await axios.get(
    `https://resources.latinowebstudio.com/wp-json/wp/v2/posts?categories=117&page=${currentPage}&per_page=${perPage}&_embed`,
  );

  const totalPages = parseInt(res.headers["x-wp-totalpages"] || "1", 10);
  const posts = res.data;

  return (
    <>
      <Main />
      {/* <main className=""> */}
      <ContentBlock
        sectionClassName="relative pt-[100px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-wrap"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <div className="relative">
          <h1 className="text-4xl uppercase font-proxima-bold">
            Web Design &amp; SEO Marketing Tips
          </h1>
        </div>
      </ContentBlock>
      <ContentBlock
        sectionClassName="relative pt-[25px] pb-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row items-start"
      >
        <div className="lg:w-3/4 w-full lg:pr-10 mb-10 px-4">
          {/* <h1 className="text-4xl font-bold mb-8">Web Design &amp; SEO Tips</h1> */}

          {posts.map((post: WPPost) => {
            const ogImage =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "https://latinowebstudio.com/default-og-image.jpg"; // fallback

            return (
              <div
                key={post.id}
                className="mb-8 news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4"
              >
                <Link href={`/articles/${post.slug}`}>
                  <div className="flex flex-wrap">
                    <div className="md:w-5/12 w-full">
                      {/* Featured Image */}
                      <Image
                        src={ogImage}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="md:w-7/12 w-full px-4 py-4">
                      {/* Date */}
                      <p className="mt-4 mb-0 text-gray-800 text-sm">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>

                      {/* Title */}
                      <h2 className="text-xl font-semibold text-black mt-2">
                        {he.decode(post.title.rendered)}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-700 text-sm">
                        {stripHtml(post.excerpt.rendered).slice(0, 150)}...
                      </p>

                      {/* Read More */}
                      <p className="mt-0 text-gray-700 text-sm group-hover:text-black">
                        READ MORE
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

          {/* Pagination */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {/* Previous Page */}
            {currentPage > 1 && (
              <Link
                href={`/articles?page=${currentPage - 1}`}
                className="bg-[#1f1540] text-white px-4 py-2 text-sm hover:bg-yellow-500 transition"
              >
                Previous Page
              </Link>
            )}

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => {
              const pageNum = i + 1;
              const isActive = pageNum === currentPage;

              return (
                <Link
                  key={pageNum}
                  href={`/articles?page=${pageNum}`}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-semibold ${
                    isActive
                      ? "bg-[var(--accent-primary)] text-black"
                      : "bg-[var(--accent-secondary)] text-white hover:bg-[var(--accent-secondary)]"
                  }`}
                >
                  {pageNum}
                </Link>
              );
            })}

            {/* Next Page */}
            {currentPage < totalPages && (
              <Link
                href={`/articles?page=${currentPage + 1}`}
                className="bg-[var(--accent-secondary)] text-white px-4 py-2 text-sm hover:bg-[var(--accent-primary)] transition"
              >
                Next Page
              </Link>
            )}
          </div>
        </div>

        <Sidebar />
      </ContentBlock>
      <CTA />
      {/* </main> */}
    </>
  );
}
