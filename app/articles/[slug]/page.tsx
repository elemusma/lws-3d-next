import type { Metadata } from "next";
import { notFound } from "next/navigation";
import axios from "axios";
import ContentBlock from "@/app/components/content-block";
import Sidebar from "@/app/components/reusable/Sidebar";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const res = await axios.get(
    `https://resources.latinowebstudio.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
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
      url: `https://latinowebstudio.com/articles/${slug}`,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title.rendered }],
    },
    alternates: {
      canonical: `https://latinowebstudio.com/articles/${slug}`,
    },
  };
}

export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const res = await axios.get(
    `https://resources.latinowebstudio.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );

  const post = res.data[0];
  if (!post) return notFound();

  return (
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
  );
}