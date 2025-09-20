// app/articles/page.tsx

export const dynamic = "force-dynamic";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../components/reusable/Sidebar";
import he from "he";
import Main from "../js/main";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Website Design and Search Engine Optimization Articles - Latino Web Studio",
  description:
    "A resource for expert witnesses and anyone wanting to learn more about how to get more clients and phone calls from your website.",
  openGraph: {
    title:
      "Website Design and Search Engine Optimization Articles - Latino Web Studio",
    description:
      "A resource for expert witnesses and anyone wanting to learn more about how to get more clients and phone calls from your website.",
    url: "https://latinowebstudio.com/articles",
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
    canonical: "https://latinowebstudio.com/articles",
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

// function stripHtml(html: string) {
//   return html.replace(/<[^>]*>?/gm, "");
// }

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
  const res = await fetch(
    `https://resources.latinowebstudio.com/wp-json/wp/v2/posts?categories=117&page=${page}&per_page=${perPage}&_embed`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);

  return { posts, totalPages };
}

// 🔧 Helper to generate page numbers with ellipses
function getPagination(current: number, total: number): (number | "...")[] {
  const delta = 2;
  const range: (number | "...")[] = [];

  // Always include first and last
  // const range = [];
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

  return [1, ...range, total];
}

export default async function ArticlesPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  // ✅ Await searchParams in Next.js 15
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
      <h1 className="text-3xl font-bold mb-6">
        Website Design & Search Engine Optimization Articles
      </h1>

      {/* List of posts */}
      <div className="flex flex-wrap">
        <div className="lg:w-3/4 w-full lg:pr-10 mb-10">
          {posts.map((post) => {
            const ogImage =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "https://latinowebstudio.com/default-og-image.jpg"; // fallback

            return (
              <div
                key={post.id}
                className="mb-8 news-blog-post bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group mb-4"
              >
                <Link
                  href={`/articles/${post.slug}`}
                  className="flex flex-wrap"
                >
                  <div className="md:w-5/12 w-full relative">
                    {/* Featured Image */}
                    <Image
                      src={ogImage}
                      alt={post.title.rendered}
                      className="w-full h-full object-cover"
                      fill
                    />
                  </div>
                  <div className="md:w-7/12 w-full px-4 py-4">
                    {/* Date */}
                    <p className="mt-4 mb-2 text-gray-800 text-sm">
                      {" "}
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                    </p>
                    {/* Title */}
                    <h2
                      className="text-xl font-semibold mt-1"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    {/* Excerpt */}
                    <p className="text-gray-700 mt-2 text-base">
                      {stripHtmlAndDecode(post.excerpt.rendered).slice(0, 125)}
                      ...
                    </p>

                    {/* Link */}
                    <span className="mb-4 inline-block">Read more →</span>
                  </div>
                </Link>
              </div>
            );
          })}

          {/* Condensed Pagination with Prev/Next */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 items-center">
            {/* Previous button */}
            {currentPage > 1 && (
              <Link
                href={`/articles?page=${currentPage - 1}`}
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
                  href={`/articles?page=${item}`}
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
                href={`/articles?page=${currentPage + 1}`}
                className="px-3 py-2 rounded bg-gray-100 border text-black hover:bg-gray-300 transition-all duration-200 ease-in-out"
              >
                Next
              </Link>
            )}
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
    </main>
    </>
  );
}
