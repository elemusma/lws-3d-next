import axios from "axios";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ContentBlock from "@/app/components/content-block";
import Sidebar from "@/app/components/reusable/Sidebar";

type ArticlePageProps = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: ArticlePageProps
): Promise<Metadata> {
  const res = await axios.get(
    `https://resources.latinowebstudio.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  );

  const post = res.data[0];
  if (!post) return {};

  const description = post.excerpt?.rendered
    ? post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160)
    : "";

  const ogImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://latinowebstudio.com/default-og-image.jpg";

  return {
    title: `${post.title.rendered} - Latino Web Studio`,
    description,
    openGraph: {
      title: `${post.title.rendered} - Latino Web Studio`,
      description,
      url: `https://latinowebstudio.com/articles/${params.slug}`,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title.rendered }],
    },
    alternates: {
      canonical: `https://latinowebstudio.com/articles/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const res = await axios.get(
    `https://resources.latinowebstudio.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  );

  const post = res.data[0];
  if (!post) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      "@type": "Person",
      name: "Latino Web Studio",
    },
    image:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "https://latinowebstudio.com/default-og.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://latinowebstudio.com/articles/${params.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContentBlock
        sectionClassName="bg-[#f7f7f7] text-black pt-[100px] pb-[100px] blog single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="flex flex-col lg:flex-row items-start"
      >
        <div className="lg:w-3/4 w-full lg:pr-8 px-4">
          <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>
          <article
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
        <Sidebar />
      </ContentBlock>
    </>
  );
}
