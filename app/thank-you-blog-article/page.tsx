import Main from "@/app/js/main";
// import Link from "next/link";
import "@/app/styles/blog.scss";
// import { useSearchParams } from "next/navigation";
// import ContactForm from "@/app/components/forms/ContactForm";
import CalendlyWidget from "../components/calendly";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Paper Requested | Latino Web Studio",
  description:
    "Thanks for requesting the white paper. Learn how to get more legal cases and be found by attorneys. Contact Ted for personalized support.",
  alternates: {
    canonical: "https://latinowebstudio.com/thank-you-white-paper",
  },
  openGraph: {
    title: "White Paper Requested | Latino Web Studio",
    description:
      "Thanks for requesting the white paper. Learn how to get more legal cases and be found by attorneys. Contact Ted for personalized support.",
    url: "https://latinowebstudio.com/thank-you-white-paper",
    type: "website",
    siteName: "Latino Web Studio",
  },
};

type Search = Record<string, string | string[] | undefined>;

export default async function ThankYouBlogArticle({
  searchParams,
}: {
  // 👇 note Promise<...>
  searchParams?: Promise<Search>;
}) {
  const sp = (await searchParams) ?? {};
  const rawName = sp.name;
  const name = Array.isArray(rawName) ? rawName[0] : rawName ?? "";

  // Delivery in 3 days
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  // Call 4 days after delivery
  const callDate = new Date(deliveryDate); // clone, not a new "today"
  callDate.setDate(callDate.getDate() + 1);

  const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  const deliveryDay = deliveryDate.toLocaleDateString("en-US", options);
  const callDay = callDate.toLocaleDateString("en-US", options);

  return (
    <>
      <Main />
      <main>
        <div className="text-center pt-[0px] flex flex-wrap justify-center">
          <div className="lg:w-3/4 w-full">
            <h1 className="text-3xl font-bold mb-4">
              Let&apos;s Review Your Free Blog Article Together
              {name ? `, ${name}` : ""}
            </h1>
            <p className="text-lg text-gray-700">
              You will receive your blog article on{" "}
              <strong>{deliveryDay}</strong>. You have taken the first step to
              start getting more cases and getting found by attorneys. Schedule
              a call below ideally on <strong>{callDay}</strong> so we can
              adjust any final details so you feel confident sharing it with
              your audience and showcase your expertise.
            </p>
          </div>
        </div>
        <div className="md:px-0 px-4 mt-[-45px]">
          <CalendlyWidget />
        </div>
      </main>
    </>
  );
}
