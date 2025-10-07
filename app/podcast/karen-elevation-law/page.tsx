import ContentBlock from "@/app/components/content-block";
import Image from "next/image";
import "@/app/styles/blog.scss";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
// import Link from "next/link";
import Sidebar from "@/app/components/reusable/Sidebar";
import CTAButtons from "@/app/components/reusable/CTAButtons";

export const metadata: Metadata = {
  title:
    "Immigration Myths, Rights, and Realities – Conversation with Attorney Karen from Elevation Law",
  description:
    "Immigration attorney Karen from Elevation Law joins Ted Martinez to debunk common myths, explain the complexities of U.S. immigration law, share crucial tips on handling ICE encounters, and provide resources for families navigating legal status issues.",
  openGraph: {
    title:
      "Immigration Myths, Rights, and Realities – Conversation with Attorney Karen from Elevation Law",
    description:
      "Immigration attorney Karen from Elevation Law joins Ted Martinez to debunk common myths, explain the complexities of U.S. immigration law, share crucial tips on handling ICE encounters, and provide resources for families navigating legal status issues.",
    url: `https://latinowebstudio.com/podcast/karen-elevation-law/`,
    type: "article",
    images: [
      {
        url: `https://latinowebstudio.com/podcast/karen-elevation-law.jpg`,
        width: 1200,
        height: 630,
        alt: "Karen Immigration Attorney Podcast Episode - Latino Web Studio",
      },
    ],
  },
  alternates: {
    canonical: "https://latinowebstudio.com/podcast/karen-elevation-law",
  },
};

export default function PodcastEpisodeKarenElevationLaw() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PodcastEpisode",
            name: "Immigration Myths, Rights, and Realities – Conversation with Attorney Karen from Elevation Law",
            description:
              "Immigration attorney Karen from Elevation Law joins Ted Martinez to debunk common myths, explain the complexities of U.S. immigration law, share crucial tips on handling ICE encounters, and provide resources for families navigating legal status issues.",
            url: "https://latinowebstudio.com/podcast/karen-elevation-law/",
            datePublished: "2025-10-06",
            dateModified: "2025-10-06",
            isPartOf: {
              "@type": "PodcastSeries",
              name: "Latino Web Studio Podcast",
            },
            image:
              "https://latinowebstudio.com/podcast/karen-elevation-law.jpg",
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
              "@id": "https://latinowebstudio.com/podcast/karen-elevation-law/",
            },
            inLanguage: "en",
            keywords:
              "immigration law, ICE encounters, know your rights, DACA, birthright citizenship, immigration attorney interview",
            potentialAction: {
              "@type": "ListenAction",
              target: [
                "https://www.youtube.com/watch?v=FgQGKaWg-Do",
                "https://latinowebstudio.com/podcast/karen-elevation-law/",
              ],
            },
            performer: {
              "@type": "Person",
              name: "Karen – Elevation Law",
              sameAs: [
                "https://elevationlaw.com/",
                "https://www.linkedin.com/company/elevation-law/",
              ],
            },
          }),
        }}
      />

      <div className="single-post">
        <ContentBlock
          sectionClassName="bg-[#f7f7f7] text-black lg:pt-[150px] pt-[100px] pb-[100px]"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex flex-col items-center"
          columnClassName="flex flex-col lg:flex-row items-start"
        >
          <div className="lg:w-3/4 w-full lg:pr-8 px-4">
            <div className="prose prose-lg mx-auto max-w-3xl px-4 text-gray-900">
              <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/FgQGKaWg-Do?si=7hOE-PSPXdRJXyJr"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div>
                <h2 className="text-sm font-semibold mt-10 mb-4">
                  Connect with Karen McCarthy at Elevation Law:
                </h2>
                <div className="flex">
                  <a
                    href="https://www.elevation-law.com/"
                    title="Karen McCarthy - Elevation Law website link"
                    target="_blank"
                    className="mx-2"
                  >
                    <Image
                      src="/icons/icon-website.png"
                      width={45}
                      height={45}
                      alt={"Karen McCarthy - Elevation Law website link"}
                      priority
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/elevationlaw"
                    title="Karen McCarthy - Elevation Law facebook link"
                    target="_blank"
                    className="mx-2"
                  >
                    <Image
                      src="/icons/icon-facebook.png"
                      width={45}
                      height={45}
                      alt={"Karen McCarthy - Elevation Law facebook link"}
                      priority
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/karenamccarthy/"
                    title="Karen McCarthy - Elevation Law LinkedIn link"
                    target="_blank"
                    className="mx-2"
                  >
                    <Image
                      src="/icons/icon-linkedin.png"
                      width={45}
                      height={45}
                      alt={"Karen McCarthy - Elevation Law LinkedIn link"}
                      priority
                    />
                  </a>
                </div>
                <a href="#spotify" className="small mt-2 mb-2 inline-block">
                  Listen on Spotify
                </a>
              </div>
              <h1 className="text-3xl font-bold mb-6">
                Immigration Myths, ICE Raids, and Legal Realities: A
                Conversation with Immigration Attorney Karen
              </h1>

              <p>
                In a recent podcast episode, we had the privilege of speaking
                with Karen, an experienced immigration attorney and founder of
                Elevation Law in Colorado. What began as a lighthearted exchange
                about podcast backdrops quickly turned into a powerful and
                eye-opening conversation about the realities of U.S. immigration
                law, common misconceptions, and the frightening consequences of
                misinformation.
              </p>
              <div className="relative w-full pb-[56.25%] h-0" id="">
                <div
                  className="absolute top-[-75px]"
                  style={{ pointerEvents: "none" }}
                  id="spotify"
                ></div>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl border-0"
                  src="https://open.spotify.com/embed/episode/6sbUWF3JBnEY68upFTEsQY/video?utm_source=generator"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                The Biggest Immigration Myth
              </h2>
              <p>
                Karen tackled one of the most persistent myths: that immigrants
                can simply &quot;get in line&quot; and fix their status. In reality,
                immigration laws are highly complex. &quot;It&apos;s not as easy
                as just paying a fee and filing a form,&quot; Karen explained.
                Many people, even without criminal records, face insurmountable
                legal barriers—despite contributing to their communities and
                paying taxes.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                The Cost of Desperation
              </h2>
              <p>
                Karen shared stories of immigrants paying coyotes up to $50,000
                to cross the border—money that could&apos;ve been used for legal
                pathways if they existed. Unfortunately, the system isn&apos;t
                just expensive; it&apos;s often unavailable to those who need it
                most. &quot;People think it&apos;s a choice,&quot; Karen said,
                &quot;but many don&apos;t have legal options.&quot;
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                The Dangers of Notarios and Fraud
              </h2>
              <p>
                Another danger lies in misinformation and bad actors.
                Non-lawyers posing as immigration experts—often called
                &quot;notarios&quot;—mislead families, costing them thousands and
                jeopardizing their legal standing. Karen emphasized the
                importance of working with a licensed immigration attorney who
                specializes in the field.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                ICE Raids and Citizens Getting Deported
              </h2>
              <p>
                One of the more alarming parts of our conversation was
                Karen&apos;s confirmation that even U.S. citizens have been
                wrongly deported in recent years. This typically happens when
                someone doesn&apos;t have documentation on hand or their
                citizenship is challenged despite being valid. &quot;It&apos;s
                rare but very real,&quot; Karen said. She recommends always
                having at least a digital copy of your U.S. passport or birth
                certificate.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                What You Can Do If Stopped by ICE
              </h2>
              <ul>
                <li>Stay calm.</li>
                <li>Do not run.</li>
                <li>Ask if you are free to leave.</li>
                <li>Say you want to call a lawyer.</li>
                <li>
                  Never sign anything without understanding it or speaking with
                  an attorney.
                </li>
              </ul>
              <p>
                Karen&apos;s firm, Elevation Law, even provides{" "}
                <strong>Know Your Rights</strong> cards and is available to help
                people navigate these terrifying experiences.
              </p>
              <p>
                📞 <strong>Emergency Immigration Line: 970-455-1013</strong>
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                The American Dream Today
              </h2>
              <p>
                Despite the challenges, Karen remains hopeful. &quot;The
                American Dream is still alive,&quot; she said. &quot;We see it
                in our offices every day.&quot; But she&apos;s quick to add that
                the obstacles immigrants face today are harsher and more
                bureaucratic than ever before.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Take Action: Contact Your Representatives
              </h2>
              <p>
                Want to support immigration reform or speak out against unfair
                practices? Anyone—citizen or not—can contact their local
                representatives. Karen recommends using{" "}
                <a
                  href="https://www.house.gov/representatives/find-your-representative"
                  target="_blank"
                >
                  house.gov/representatives/find-your-representative
                </a>{" "}
                to find yours.
              </p>
              <p>
                You can find the resources on{" "}
                <a
                  href="https://goldman.house.gov/media/press-releases/goldman-warren-padilla-kelly-and-correa-demand-investigations-ices-detention"
                  target="_blank"
                >
                  Goldman, Warren, Padilla, Kelly and Correa Demand
                  Investigations into ICE&apos;s Detention of U.S. Citizens
                </a>
                .
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                About Karen and Elevation Law
              </h2>
              <p>
                Karen has over 16 years of immigration law experience and
                handles cases involving asylum, Special Immigrant Juvenile
                Status (SIJS), victims of crimes, trafficking, and more. Her
                firm is committed to helping immigrants find legal pathways to
                safety and stability in the U.S.
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
