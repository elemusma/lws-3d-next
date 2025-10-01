// app/articles/[slug]/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
// import Image from "next/image";
import Sidebar from "@/app/components/reusable/Sidebar";
// import { useEffect } from "react";
import ResponsiveEmbeds from '@/app/components/reusable/responsiveEmbeds';
import "@/app/styles/blog.scss";
import CTA from "@/app/components/reusable/cta";
import Main from "@/app/js/main";

// Define the WordPress post type
interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  slug: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

// Updated interface for Next.js 14+ with Promise-based params
interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Fetch single post by slug
async function fetchWordPressPost(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `https://resources.latinowebstudio.com/wp-json/wp/v2/posts?slug=${slug}&categories=117&_embed=wp:featuredmedia`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts: WordPressPost[] = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching WordPress post:", error);
    return null;
  }
}

// Format date helper
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params; // ✅ Await here
  const post = await fetchWordPressPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title.rendered} | Latino Web Studio`,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, "").trim(),
    openGraph: {
      title: `${post.title.rendered} | Latino Web Studio`,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, "").trim(),
      url: `https://latinowebstudio.com/articles/${slug}`,
      type: "article",
      images: [
        {
          url:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
            "https://latinowebstudio.com/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title.rendered,
        },
      ],
    },
    alternates: {
      canonical: `https://latinowebstudio.com/articles/${slug}`,
    },
  };
}


export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params; // Await the params Promise
  const post = await fetchWordPressPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
    <Main />
    <main className="pt-[80px]">
      <div className="bg-white">
    <article className="max-w-screen-lg mx-auto pt-[50px] px-4 py-8 single-post bg-white">
      {/* Featured Image */}
      {/* {post._embedded?.["wp:featuredmedia"]?.[0] && (
        <div className="mb-8">
          <Image
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={
              post._embedded["wp:featuredmedia"][0].alt_text ||
              post.title.rendered
            }
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            width="100"
            height="100"
          />
        </div>
      )} */}

<div className="flex flex-wrap">
        <div className="lg:w-3/4 w-full lg:pr-10 mb-10">

      {/* Article Header */}
      <header className="mb-8">
        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <time className="text-gray-600 text-lg">
          Published on {formatDate(post.date)}
        </time>
      </header>

      {/* Article Content */}
      <div
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:hover:text-blue-800"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

        </div>
        <Sidebar />
        </div>

      {/* Back to Articles Link */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/articles"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Articles
        </Link>
      </div>
      <ResponsiveEmbeds />
    </article>
    </div>
    <CTA />
    </main>
    </>
  );
}
