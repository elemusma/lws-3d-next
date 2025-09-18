// app/articles/page.tsx
import { Metadata } from 'next';
import Image from "next/image";

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
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

// Fetch posts from WordPress REST API
async function fetchWordPressPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      'https://resources.latinowebstudio.com/wp-json/wp/v2/posts?categories=117&_embed=wp:featuredmedia',
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts: WordPressPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

// Format date helper
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Strip HTML tags and decode HTML entities from excerpt
function stripHtml(html: string): string {
  // First remove HTML tags
  const withoutTags = html.replace(/<[^>]*>/g, '');
  
  // Create a temporary div to decode HTML entities
  if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = withoutTags;
    return div.textContent || div.innerText || '';
  }
  
  // Server-side fallback for common HTML entities
  return withoutTags
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim();
}

export const metadata: Metadata = {
  title: 'Articles | Latino Web Studio',
  description: 'Latest articles and blog posts from Latino Web Studio',
};

export default async function ArticlesPage() {
  const posts = await fetchWordPressPosts();

  if (posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Articles</h1>
        <p className="text-gray-600">No articles found at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-[100px] px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Web Design &amp; SEO</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Featured Image */}
            {post._embedded?.['wp:featuredmedia']?.[0] && (
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width="100"
                  height="56"
                />
              </div>
            )}
            
            <div className="p-6">
              {/* Date */}
              <time className="text-sm text-gray-500 mb-2 block">
                {formatDate(post.date)}
              </time>
              
              {/* Title */}
              <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                <a
                  href={`/articles/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors duration-200"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </h2>
              
              {/* Excerpt */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {stripHtml(post.excerpt.rendered)}
              </p>
              
              {/* Read More Link */}
              <a
                href={`/articles/${post.slug}`}
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </article>
          
        ))}
        
      </div>
    </div>
  );
}