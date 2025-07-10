import CalendlyWidget from "@/app/components/calendly";
import Main from "@/app/js/main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Call with Tadeo (Ted) Martinez | Latino Web Studio",
  description:
    "Book a call with Tadeo Martinez of Latino Web Studio to discuss your web design, SEO, or marketing strategy needs.",
  alternates: {
    canonical: "https://latinowebstudio.com/calendar",
  },
  openGraph: {
    title: "Schedule a Call with Tadeo (Ted) Martinez | Latino Web Studio",
    description:
      "Book a call with Tadeo Martinez of Latino Web Studio to discuss your web design, SEO, or marketing strategy needs.",
    url: "https://latinowebstudio.com/calendar",
    type: "website",
  },
};

export default function CalendarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Schedule a Call with Tadeo (Ted) Martinez",
            description:
              "Book a call with Tadeo Martinez of Latino Web Studio to discuss your web design, SEO, or marketing strategy needs.",
            url: "https://latinowebstudio.com/schedule",
            mainEntity: {
              "@type": "Person",
              name: "Tadeo Martinez",
              jobTitle: "Founder & Web Strategist",
              url: "https://latinowebstudio.com/about",
              sameAs: [
                "https://www.linkedin.com/in/tadeomartinez",
                "https://latinowebstudio.com",
              ],
            },
            potentialAction: {
              "@type": "ReserveAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://calendly.com/latino-web-studio", // change this to your real Calendly link
                inLanguage: "en",
                actionPlatform: [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform",
                ],
              },
              result: {
                "@type": "Reservation",
                name: "Consultation Call with Tadeo Martinez",
              },
            },
          }),
        }}
      />

      <Main />
      <div className="z-[1] relative text-center px-4 pt-[150px]">
        <h1>Schedule a Call with Tadeo (Ted) Martinez Below</h1>
      </div>
      <CalendlyWidget />
    </>
  );
}
