import { Metadata } from "next";
import Main from "@/app/js/main";

export const metadata: Metadata = {
  title: "Thank You | Latino Web Studio",
  description:
    "Thank you for reaching out to Latino Web Studio. We’ve received your message and will get back to you shortly.",
  alternates: {
    canonical: "https://latinowebstudio.com/thank-you",
  },
  openGraph: {
    title: "Thank You | Latino Web Studio",
    description:
      "Thank you for reaching out to Latino Web Studio. We’ve received your message and will get back to you shortly.",
    url: "https://latinowebstudio.com/thank-you",
    type: "website",
    siteName: "Latino Web Studio",
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Main />
      <main>
        <div className="text-center pt-[100px]">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg text-gray-700">
            Your message has been sent successfully. We will get back to you
            soon.
          </p>
        </div>
      </main>
    </>
  );
}
