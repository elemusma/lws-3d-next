// app/podcast/[slug]/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Sidebar from "@/app/components/reusable/Sidebar";
import ResponsiveEmbeds from "@/app/components/reusable/responsiveEmbeds";
import "@/app/styles/blog.scss";
import CTA from "@/app/components/reusable/cta";
import Main from "@/app/js/main";
import he from "he"; // Add this import

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

// Updated interface for Next.js 15 with Promise-based params
interface PodcastPageProps {
  params: Promise<{ slug: string }>;
}

// Fetch single post by slug
async function fetchWordPressPost(slug: string): Promise<WordPressPost | null> {
  try {
    // Update this category ID to match your podcast category
    const PODCAST_CATEGORY_ID = 119;

    const response = await fetch(
      `https://resources.latinowebstudio.com/wp-json/wp/v2/posts?slug=${slug}&categories=${PODCAST_CATEGORY_ID}&_embed=wp:featuredmedia`,
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

// Helper function to decode HTML entities
function decodeHtmlEntities(html: string): string {
  const withoutTags = html.replace(/<[^>]*>?/gm, "");
  return he.decode(withoutTags);
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: PodcastPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchWordPressPost(slug);

  if (!post) {
    return {
      title: "Episode Not Found",
    };
  }

  const decodedTitle = decodeHtmlEntities(post.title.rendered);
  const decodedDescription = decodeHtmlEntities(post.excerpt.rendered);
  return {
    title: `${decodedTitle}`,
    description: decodedDescription,
    openGraph: {
      title: `${decodedTitle}`,
      description: decodedDescription,
      url: `https://latinowebstudio.com/podcast/${slug}`,
      type: "article",
      images: [
        {
          url:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
            "https://latinowebstudio.com/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: decodedTitle,
        },
      ],
    },
    alternates: {
      canonical: `https://latinowebstudio.com/podcast/${slug}`,
    },
  };
}

export default async function PodcastEpisodePage({ params }: PodcastPageProps) {
  const { slug } = await params;
  const post = await fetchWordPressPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Main />
      <main className="pt-[80px]">
        <div className="bg-white">
          <article className="max-w-screen-xl mx-auto pt-[50px] px-4 py-8 single-post bg-white">
            <div className="flex flex-wrap">
              <div className="lg:w-3/4 w-full lg:pr-10 mb-10">
                {/* Episode Header */}
                <header className="mb-8">
                  <h1
                    className="text-3xl md:text-4xl font-bold mb-4"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  <time className="text-gray-600 text-lg">
                    Published on {formatDate(post.date)}
                  </time>
                </header>

                {/* Episode Content */}
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:hover:text-blue-800"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
              <Sidebar />
            </div>

            {/* Back to Podcast Link */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/podcast"
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
                Back to Podcast
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
