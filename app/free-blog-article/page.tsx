// import { Inspiration } from "next/font/google";
// import CalendlyWidget from "../components/calendly";
// import Footer from "../components/footer";
import Main from "../js/main";
import type { Metadata } from "next";
import InspirationalQuote from "../components/quote";
import ContactFormFreeBlogArticle from "../components/forms/ContactFormFreeBlogArticle";

export const metadata: Metadata = {
  title: "Free Blog Article | Latino Web Studio",
  description:
    "Get a professionally written article that showcases your expertise, boosts your visibility online, and helps attorneys find you for free.",
  openGraph: {
    title: "Free Blog Article | Latino Web Studio",
    description:
      "Get a professionally written article that showcases your expertise, boosts your visibility online, and helps attorneys find you for free.",
    url: "https://latinowebstudio.com/free-blog-article",
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
    canonical: "https://latinowebstudio.com/free-blog-article",
  },
};

export default function FreeBlogArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free Blog Article | Latino Web Studio",
            url: "https://latinowebstudio.com/free-blog-article",
            description:
              "Get a professionally written article that showcases your expertise, boosts your visibility online, and helps attorneys find you for free.",
            mainEntity: {
              "@type": "Action",
              name: "Schedule a Consultation",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://calendly.com/latino-web-studio/web-check-in",
                actionPlatform: [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform",
                ],
              },
              result: {
                "@type": "Event",
                name: "Free Consultation Call",
              },
            },
            publisher: {
              "@type": "Organization",
              name: "Latino Web Studio",
              logo: {
                "@type": "ImageObject",
                url: "https://latinowebstudio.com/logo.png",
              },
            },
          }),
        }}
      />

      <Main />
      <section
        style={{ paddingTop: 85, paddingBottom: 100 }}
        className="relative"
        id="schedule"
      >
        <div className="max-w-screen-lg mx-auto">
          <div className="flex justify-center">
            <div className="w-full">
              <div className="px-4 text-center">
                <h1>Get Free Blog Article</h1>
                <p>
                  Get a professionally written article that showcases your
                  expertise, boosts your visibility online, and helps attorneys
                  find you for free.
                </p>
              </div>
              <div className="px-4 text-center w-full" id="calendar">
                <ContactFormFreeBlogArticle />
              </div>
            </div>
          </div>
        </div>
      </section>

      <InspirationalQuote />
    </>
  );
}
