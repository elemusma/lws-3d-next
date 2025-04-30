import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";
// import "./styles/01.scss";
import Footer from "./components/footer";
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
      <head>
        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1jlkaeom8Av6xi5Eq"
          data-version="062024"
        ></script>
        {/* Google Analytics */}
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-GY6QBLTKD5"
  ></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-GY6QBLTKD5');
      `,
    }}
  />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
