import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import Script from 'next/script';
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
  title: "Lawyers - Retainers - Cases - Helping Expert Witnesses - Latino Web Studio",
    description:
      "We help expert witnesses get more cases and get found by lawyers. Are you unsure how to write content that won't be used against you in court? Don\'t get eaten alive at deposition.",
  metadataBase: new URL("https://latinowebstudio.com"), // required for relative OG URLs
  alternates: {
    canonical: "https://latinowebstudio.com", // ✅ correct canonical
  },

  openGraph: {
    title: "Lawyers - Retainers - Cases - Helping Expert Witnesses - Latino Web Studio",
    description:
      "We help expert witnesses get more cases and get found by lawyers. Are you unsure how to write content that won't be used against you in court? Don\'t get eaten alive at deposition.",
    url: "https://latinowebstudio.com",
    siteName: "Latino Web Studio",
    images: [
      {
        url: "/photos/Get-More-Cases-Get-Found-By-Lawyers.jpg", // Make sure this path is valid!
        width: 1200,
        height: 630,
        alt: "Lawyers - Retainers - Cases - Helping Expert Witnesses",
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
    <Script
  id="vtag-ai-js"
  src="https://r2.leadsy.ai/tag.js"
  data-pid="1jlkaeom8Av6xi5Eq"
  data-version="062024"
  strategy="afterInteractive"
  async
/>
        {/* Google Analytics script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GY6QBLTKD5"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
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
