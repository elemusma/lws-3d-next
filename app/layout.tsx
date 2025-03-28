import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";
// import "./styles/01.scss";
import "./styles/btn.scss";
import "./styles/fonts.scss";
import "./styles/home.scss";
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
  title: "Web Design & SEO in Denver, CO - Latino Web Studio",
  description:
    "Latino Web Studio provides expert web design, SEO, and full-stack tech support for businesses in Denver and nationwide. From DNS and hosting to email marketing and custom design, we handle the tech so you can focus on growth.",
  metadataBase: new URL("https://latinowebstudio.com"), // required for relative OG URLs

  openGraph: {
    title: "Web Design & SEO in Denver, CO - Latino Web Studio",
    description:
      "Latino Web Studio provides expert web design, SEO, and full-stack tech support for businesses in Denver and nationwide. From DNS and hosting to email marketing and custom design, we handle the tech so you can focus on growth.",
    url: "https://latinowebstudio.com",
    siteName: "Latino Web Studio",
    images: [
      {
        url: "/assets/Web-Design-SEO.jpg", // Make sure this path is valid!
        width: 1200,
        height: 630,
        alt: "Web Design and SEO",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
