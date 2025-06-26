import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";
// import "./styles/01.scss";
import Footer from "./components/footer";
import "./styles/btn.scss";
import "./styles/fonts.scss";
import "./styles/home.scss";
import "./styles/body.scss";
import GoogleAnalytics from "./components/GoogleAnalytics";
// import "./styles/layout.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Attorneys - Retainers - Cases - Helping Expert Witnesses - Latino Web Studio",
    description:
      "We help expert witnesses get more cases and get found by attorneys. Are you unsure how to write content that won't be used against you in court? Don't get eaten alive at deposition.",
  metadataBase: new URL("https://latinowebstudio.com"), // required for relative OG URLs
  alternates: {
    canonical: "https://latinowebstudio.com", // ✅ correct canonical
  },

  openGraph: {
    title: "Attorneys - Retainers - Cases - Helping Expert Witnesses - Latino Web Studio",
    description:
      "We help expert witnesses get more cases and get found by attorneys. Are you unsure how to write content that won't be used against you in court? Don't get eaten alive at deposition.",
    url: "https://latinowebstudio.com",
    siteName: "Latino Web Studio",
    images: [
      {
        url: "https://latinowebstudio.com/photos/Helping-Expert-Witnesses.jpg", // Make sure this path is valid!
        width: 1200,
        height: 630,
        alt: "Attorneys - Retainers - Cases - Helping Expert Witnesses",
      },
    ],
    type: "website",
  },

  icons: {
    icon: "/assets/Favicon.ico", // Ensure this path is correct
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
  <head>
    <GoogleAnalytics />
  </head>
  <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
        <script
  src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
  async
  defer
/>
      </body>
    </html>
  );
}
