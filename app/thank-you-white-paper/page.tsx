import Main from "@/app/js/main";
import Link from "next/link";
import "@/app/styles/blog.scss";
import ContactForm from "@/app/components/forms/ContactForm";
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

export default function ThankYouWhitePaperPage() {
  return (
    <>
      <Main />
      <main>
        <div className="text-center pt-[100px] flex flex-wrap justify-center">
          <div className="lg:w-3/4 w-full">
            <h1 className="text-3xl font-bold mb-4">Congrats!</h1>
            <p className="text-lg text-gray-700">
              You will receive the white paper soon. You have taken the first
              step to start getting more cases and getting found by attorneys.
              Want to learn more? Send Ted a message below or call{" "}
              <Link href="tel:+13039278228" className="text-link">
                303.927.8228
              </Link>
              . If not, hold tight, your white paper on how to get more cases
              and get found by attorneys is on the way.
            </p>
            <div className="pt-20">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
