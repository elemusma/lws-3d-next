// app/articles/page.tsx

export const dynamic = "force-dynamic"; // 👈 Required for searchParams-based pagination

import React from "react";
import Link from "next/link";

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  date: string;
};

async function fetchPosts(page = 1, perPage = 6): Promise<{
  posts: Post[];
  totalPages: number;
}> {
  const res = await fetch(
    `https://resources.latinowebstudio.com/wp-json/wp/v2/posts?categories=117&page=${page}&per_page=${perPage}`,
    { next: { revalidate: 60 } } // cache for 1 min
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);

  return { posts, totalPages };
}

export default async function ArticlesPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = parseInt(searchParams?.page || "1", 10);
  const perPage = 6;

  const { posts, totalPages } = await fetchPosts(currentPage, perPage);

  return (
    <div className="max-w-4xl mx-auto pt-[100px] p-6">
      <h1 className="text-3xl font-bold mb-6">Web Design &amp; SEO Tips</h1>

      {/* List of posts */}
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h2
              className="text-xl font-semibold"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div
              className="text-gray-700 mt-2"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <Link
              href={`/articles/${post.slug}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-4">
        {currentPage > 1 && (
          <Link
            href={`/articles?page=${currentPage - 1}`}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Previous
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`/articles?page=${currentPage + 1}`}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
