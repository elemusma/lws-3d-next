'use client';

import Link from 'next/link';
import Image from 'next/image';

interface NewsPostCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  imageWidth?: number;
  imageHeight?: number;
  priority?: boolean;
}

export default function NewsPostCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  imageWidth = 1365,
  imageHeight = 1024,
  priority = false,
}: NewsPostCardProps) {
  return (
    <div className="lg:w-1/4 md:w-1/3 w-5/6 news-blog-post p-[15px] mb-4">
      <Link
        href={href}
        className="flex flex-wrap bg-[#f7f7f7] hover:bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group"
      >
        <div className="lg:w-12/12 w-full">
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-full mb-0"
            style={{ objectFit: "cover" }}
            alt={imageAlt}
            priority={priority}
          />
        </div>
        <div className="lg:w-12/12 w-full px-4 py-4">
          <h2 className="text-base font-proxima-bold group-hover:text-white m-0">
            {title}
          </h2>
          <p className="mb-0 text-gray-700 text-sm group-hover:text-white">
            {description}
          </p>
          <p className="mt-4 mb-0 text-gray-700 text-sm group-hover:text-white text-link inline-block">
            Watch Episode
          </p>
        </div>
      </Link>
    </div>
  );
}