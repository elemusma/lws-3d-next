import ContentBlock from "@/app/components/content-block";
import Image from "next/image";
import "@/app/styles/blog.scss";
// import Image from "next/image";

import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
import Link from "next/link";
import "@/app/styles/blog.scss";
import Sidebar from "@/app/components/reusable/Sidebar";
import CTAButtons from "@/app/components/reusable/CTAButtons";

// import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How Expert Witnesses Can Get More Cases: Advice from a Personal Injury Attorney - Latino Web Studio",
  description:
    "Expert witness marketing tips from Logan Quirk, a personal injury attorney. Learn how attorneys find and evaluate expert witnesses, common mistakes, and how to stand out.",
  openGraph: {
    title:
      "How Expert Witnesses Can Get More Cases: Advice from a Personal Injury Attorney - Latino Web Studio",
    description:
      "Expert witness marketing tips from Logan Quirk, a personal injury attorney. Learn how attorneys find and evaluate expert witnesses, common mistakes, and how to stand out.",
    url: `https://latinowebstudio.com/podcast/quirkwins/`,
    type: "article",
    images: [
      {
        url: `https://latinowebstudio.com/podcast/quirkwins.jpg`,
        width: 1200,
        height: 630,
        alt: "Logan Quirk Podcast Episode - Latino Web Studio",
      },
    ],
  },
  alternates: {
    canonical: "https://latinowebstudio.com/podcast/quirkwins",
  },
};

export default function PodcastEpisodeQuirkWins() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PodcastEpisode",
            name: "How Expert Witnesses Can Get More Cases: Advice from a Personal Injury Attorney",
            description:
              "Logan Quirk shares insider advice on how expert witnesses can market themselves, avoid career pitfalls, and earn more legal cases.",
            url: "https://latinowebstudio.com/podcast/quirkwins/",
            datePublished: "2025-08-09",
            dateModified: "2025-08-09",
            isPartOf: {
              "@type": "PodcastSeries",
              name: "Quirk Wins Podcast",
            },
            image: "https://latinowebstudio.com/podcast/quirkwins.jpg",
            author: {
              "@type": "Person",
              name: "Tadeo Martinez",
              url: "https://latinowebstudio.com/about",
            },
            publisher: {
              "@type": "Organization",
              name: "Latino Web Studio",
              logo: {
                "@type": "ImageObject",
                url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://latinowebstudio.com/podcast/quirkwins/",
            },
            inLanguage: "en",
            keywords:
              "expert witness marketing, how to get more cases as expert witness, personal injury attorney tips, legal expert witness SEO, attorney interviews",
            potentialAction: {
              "@type": "ListenAction",
              target: [
                "https://www.youtube.com/watch?v=JYgZaXCTEZU",
                "https://latinowebstudio.com/podcast/quirkwins/",
              ],
            },
            performer: {
              "@type": "Person",
              name: "Logan Quirk",
              sameAs: [
                "https://quirkwins.com/",
                "https://www.instagram.com/quirkaccidentattorneys/",
                "https://www.tiktok.com/@quirkwins",
                "https://www.youtube.com/@QuirkWins",
                "https://www.linkedin.com/in/loganquirk/",
              ],
            },
          }),
        }}
      />

      <div className="single-post">
        {/* Hero Section */}
        <ContentBlock
          sectionClassName="bg-[#f7f7f7] text-black lg:pt-[150px] pt-[100px] pb-[100px] blog"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex flex-col items-center"
          columnClassName="flex flex-col lg:flex-row items-start"
        >
          <div className="lg:w-3/4 w-full lg:pr-8 px-4">
            <div className="prose prose-lg mx-auto max-w-3xl px-4 text-gray-900">
              <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/JYgZaXCTEZU?si=EvaB-TTr7v3Jpwl_"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h2 className="text-sm font-semibold mt-10 mb-4">
                Connect with Logan:
              </h2>
              <div className="flex">
                <a
                  href="https://quirkwins.com/"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-website.png"
                    width={45}
                    height={45}
                    alt={"Logan Quirk - Quirk Wins website link"}
                    priority
                  />
                </a>
                <a
                  href="https://www.instagram.com/quirkaccidentattorneys/"
                  title="Logan Quirk - Quirk Wins Instagram link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-instagram.png"
                    width={45}
                    height={45}
                    alt={"Logan Quirk - Quirk Wins Instagram link"}
                    priority
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@quirkwins"
                  title="Logan Quirk - Quirk Wins TikTok link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-tiktok.png"
                    width={45}
                    height={45}
                    alt={"Logan Quirk - Quirk Wins TikTok link"}
                    priority
                  />
                </a>
                <a
                  href="https://www.youtube.com/@QuirkWins"
                  title="Logan Quirk - Quirk Wins YouTube link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-youtube.png"
                    width={66}
                    height={45}
                    alt={"Logan Quirk - Quirk Wins YouTube link"}
                    priority
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/loganquirk/"
                  title="Logan Quirk - Quirk Wins LinkedIn link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-linkedin.png"
                    width={45}
                    height={45}
                    alt={"Logan Quirk - Quirk Wins LinkedIn link"}
                    priority
                  />
                </a>
              </div>
              <a href="#spotify" className="small">
                Listen on Spotify
              </a>
              <h1 className="text-3xl font-bold mb-6">
                How Expert Witnesses Can Get More Cases: Advice from a
                Litigation Attorney
              </h1>
              <p className="mb-6">
                In this interview, I sat down with Logan owner of{" "}
                <a href="https://quirkwins.com/" target="_blank">
                  Quirk Accident and Injury Attorneys, APC
                </a>
                , a personal injury attorney with over 16 years of experience,
                to talk about how expert witnesses can position themselves to{" "}
                <Link href="https://latinowebstudio.com/articles/more-cases">
                  get more cases
                </Link>
                . If you&apos;re an expert witness trying to stand out or just
                getting started, Logan&apos;s insights are going to be
                incredibly helpful.
              </p>

              <div className="relative w-full pb-[56.25%] h-0" id="">
                <div
                  className="absolute top-[-75px]"
                  style={{ pointerEvents: "none" }}
                  id="spotify"
                ></div>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl border-0"
                  src="https://open.spotify.com/embed/episode/15iXrkLqqcQSGcST4ia6ky/video?utm_source=generator"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                How Attorneys Actually Find Expert Witnesses
              </h2>
              <p className="mb-4">
                First off, I asked Logan how he usually finds the experts he
                works with. His answer? Referrals. &quot;As a plaintiff&apos;s
                personal injury attorney, I have access to other attorneys. We
                often use similar experts,&quot; he said. He mainly relies on
                trusted colleagues who&apos;ve worked with certain experts
                before. Treating physicians are commonly used, but when he needs
                someone outside his network, he&apos;ll ask around or turn to
                vendors that specialize in expert witnesses.
              </p>
              <CTAButtons />

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                What Makes an Expert Stand Out
              </h2>
              <h3 className="text-xl font-medium mb-2">Practical Experience</h3>
              <p className="mb-4">
                &quot;If you&apos;re an orthopedic surgeon, actually being a
                surgeon in the past matters,&quot; Logan explained.
              </p>

              <h3 className="text-xl font-medium mb-2">
                Balanced Testimony Work
              </h3>
              <p className="mb-4">
                He prefers{" "}
                <Link href="https://latinowebstudio.com/articles/court-experience-no-cases">
                  experts who don&apos;t testify 100% of the time
                </Link>{" "}
                and are still active in their field.
              </p>

              <h3 className="text-xl font-medium mb-2">Reputation</h3>
              <p className="mb-4">
                Your reputation can be used against you. If you&apos;ve been
                disqualified from testifying, attorneys want to know why.
              </p>

              <h3 className="text-xl font-medium mb-2">Diversity in Cases</h3>
              <p className="mb-4">
                He likes to see experts who&apos;ve worked both plaintiff and
                defense sides, or at least don&apos;t lean too heavily on one.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Avoiding Mistakes That Can Hurt Your Career
              </h2>
              <p className="mb-4">
                I asked if disqualifications could ruin an expert&apos;s career.
                Logan said, &quot;It&apos;s not a fatal flaw, but it&apos;s
                definitely not a selling point. You want to avoid having to
                explain why you were disqualified.&quot;
              </p>
              <p className="mb-4">
                He also warned against trying to be a &quot;Swiss army
                knife&quot; of experts. Stick to what you know. &quot;If
                you&apos;re selling yourself on something you&apos;re not,
                you&apos;re exposed,&quot; he said.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                The Role of Marketing (and the Risks)
              </h2>
              <p className="mb-4">
                We got into how{" "}
                <Link href="https://latinowebstudio.com/articles/marketing-strategies">
                  marketing can help
                </Link>{" "}
                or hurt an expert witness. Logan emphasized that marketing is
                fine—but it has to be done right. &quot;I&apos;ve seen brochures
                used against treating physicians,&quot; he said. Most of the
                time, it&apos;s used to question the relationship between the
                expert and the attorney—suggesting bias or some sort of
                collusion.
              </p>
              <p className="mb-4">
                He also warned about online content: &quot;The internet never
                forgets... be careful what you put out.&quot;
              </p>
              <p className="mb-4">
                Still, he believes it&apos;s important to have a website or a{" "}
                <a
                  href="https://www.wisewebops.com/services/visible-authority"
                  target="_blank"
                >
                  LinkedIn strategy
                </a>
                . &quot;You want to look like you&apos;re up with the
                times,&quot; he said. Just make sure you&apos;re reviewing
                everything that goes live.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                No Website? That Could Hurt You Too
              </h2>
              <p className="mb-4">
                Logan mentioned that while he wouldn&apos;t base his decision on
                a website alone, having a{" "}
                <Link href="/practice-areas/web-design">
                  modern, professional-looking website
                </Link>{" "}
                helps. &quot;If the website looks like it&apos;s from the 2000s,
                I might wonder if they&apos;re even practicing anymore,&quot; he
                said. It won&apos;t be a dealbreaker, but it could raise doubts.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Advice for New Experts or Those Struggling to Get Cases
              </h2>
              <p className="mb-4">
                What if you&apos;re just getting started or having trouble
                getting hired? &quot;Go show why you&apos;re an expert,&quot;
                Logan advised. &quot;Put on a seminar, talk to people, and
                demonstrate your knowledge.&quot;
              </p>
              <p className="mb-4">
                Fancy marketing isn&apos;t the key—experience and credibility
                are. He encourages experts to lean on what makes them qualified,
                and the cases will follow.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Read Everything — Don&apos;t Rely on the Attorney
              </h2>
              <p className="mb-4">
                One of the most valuable pieces of advice? &quot;Don&apos;t rely
                on the attorney to give you the Cliff Notes,&quot; he said.
                Experts should read all materials themselves. As an expert you
                may find evidence that brings more clarity to the case.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Do the Work and Be Confident
              </h2>
              <p className="mb-4">
                Logan left us with this: &quot;Just do the work, be confident,
                and try not to step outside your lane.&quot;
              </p>
              <p className="mb-4">
                Whether you&apos;re new to{" "}
                <Link href="https://latinowebstudio.com/articles/what-how-expert-witness ">
                  expert witness work
                </Link>{" "}
                or looking to sharpen your practice, these insights can make a
                big difference. Want more interviews like this? Stick
                around—we&apos;re just getting started.
              </p>
              <CTAButtons />
            </div>
          </div>
          <Sidebar />
        </ContentBlock>
        <CTA />
      </div>
    </>
  );
}
