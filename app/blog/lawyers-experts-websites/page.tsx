import ContentBlock from "@/app/components/content-block";
import "@/app/styles/blog.scss";
import Image from "next/image";
import { Website } from "@/app/components/globals";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
import Link from "next/link";
// import Link from "next/link";

export const metadata: Metadata = {
  title:
   "What Lawyers Want to See on Your Website Before They Call You - Latino Web Studio",
  description:
   "For many attorneys, an expert witness's website is their first impression. This digital footprint is no longer optional—it's a core part of how legal professionals vet and contact experts.",
  openGraph: {
    title:
     "What Lawyers Want to See on Your Website Before They Call You - Latino Web Studio",
    description:
     "For many attorneys, an expert witness's website is their first impression. This digital footprint is no longer optional—it's a core part of how legal professionals vet and contact experts.",
    url: `${Website}/bloglawyers-experts-websites`, // Replace with actual URL
    type:"website",
    images: [
      {
        url: `${Website}/blog/What-Lawyers-Want-to-See-on-Your-Website-01.png`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt:"What Lawyers Want to See on Your Website Before They Call You - Latino Web Studio",
      },
    ],
  },
};

export default function WhatLawyersWantOnExpertWitnessWebsite() {
  return (
    <>
      {/* Hero Section */}
      <ContentBlock
        sectionClassName="bg-[#f7f7f7] text-black pt-[150px] pb-[100px] blog single-post"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="lg:w-3/4 w-full px-4"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
    What Lawyers Want to See on Your Website Before They Call You
  </h1>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Why Expert Witness Websites Matter to Attorneys
  </h2>
  <p className="text-base text-gray-700 mb-4">
    For many attorneys, an expert witness&apos;s website is their first impression. Whether a lawyer finds you through a <Link href="https://latinowebstudio.com/blog/citations-directories">directory</Link>, referral, or a simple Google search, your site often becomes the first stop in evaluating your qualifications. This digital footprint is no longer optional—it&apos;s a core part of how legal professionals vet and contact experts. A clear, concise, and credible website helps eliminate doubt and encourages attorneys to pick up the phone.
  </p>
   <h3 className="text-xl font-medium text-gray-800 mb-2">
        Building Trust with Your Website
      </h3>
      <Image 
              src="/blog/What-Lawyers-Want-to-See-on-Your-Website-01.png"
              width={2000}
              height={2000} alt={"Building Trust with Your Website"}  
              className="mb-4"
              />
  <p className="text-base text-gray-700 mb-4">
    In competitive legal fields where expertise can make or break a case, your online presence is one of the few ways to stand out before you&apos;ve even spoken. A website that offers clarity, professionalism, and substance can accelerate trust and help you secure more engagements.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Feature #1: Professional Design Reflects Your Expertise
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Attorneys are trained to notice inconsistencies and gauge professionalism quickly. A poorly designed or outdated site sends the wrong signal. Your site doesn&apos;t need to be flashy—it just needs to be clean, professional, and intuitive. Avoid distracting animations, overused stock photos, and cluttered layouts.
  </p>
  <p className="text-base text-gray-700 mb-4">
    A clear navigation structure is crucial. Your homepage should lead to focused subpages for your qualifications, services, and past case involvement. Prioritize readability and ensure your site is easy to navigate on both desktop and mobile. A professionally built site not only presents you better—it saves time for attorneys who are evaluating your fit for a case.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Feature #2: Organized, Clear Content That Builds Trust
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Attorneys want to understand what you do and whether you&apos;re a credible fit—fast. That means each section of your <Link href="https://latinowebstudio.com/blog/ai-ranking-expert-witness">website should be purpose-driven</Link>. List the services you offer, distinguishing between testifying and consulting roles. Provide examples of relevant case types, industries served, or specific issues you&apos;ve addressed.
  </p>
  <p className="text-base text-gray-700 mb-4">
    Clarity also extends to how you present technical information. While your peers may appreciate academic language, legal professionals prefer concise, jargon-free explanations. The more clearly you can connect your expertise to legal applications, the more likely you are to earn a follow-up inquiry.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Feature #3: A Strong CV and Track Record—Prominently Linked
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Your CV is a core part of your credibility. Include a downloadable PDF version of your most recent curriculum vitae. It should be detailed, accurate, and updated regularly. Attorneys look for specifics: degrees earned, licenses held, professional memberships, and employment history.
  </p>
  <p className="text-base text-gray-700 mb-4">
    Most importantly, lawyers need to assess admissibility risk. Include your list of prior testimony from the past four years, along with any publications you&apos;ve authored in the last ten. Be transparent—omissions or outdated information can raise red flags and cost you referrals.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Feature #4: A Compelling About Page That Tells Your Story
  </h2>
  <p className="text-base text-gray-700 mb-4">
    The About page is more than a biography—it&apos;s your chance to explain why you&apos;re uniquely qualified. Condense highlights from your CV into a narrative that makes sense to attorneys. Cover your education, experience, relevant casework, and areas of specialty. Avoid modesty; this is where you outline your value.
  </p>
  <p className="text-base text-gray-700 mb-4">
    Lawyers reading this page want confidence that you understand both your field and the litigation process. Use a confident but neutral tone. Mention honors, speaking engagements, and key projects, but keep the focus on how your background supports your role as an expert witness.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Feature #5: Easy, Visible Contact Information
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Friction kills follow-up. If a lawyer can&apos;t find your contact information within a few seconds, they&apos;ll move on. Your phone number and email address should be clearly visible on every page—ideally in the header or footer—and repeated on a dedicated Contact page.
  </p>
  <p className="text-base text-gray-700 mb-4">
    Avoid over-reliance on forms. Many attorneys prefer direct communication and may bypass generic forms altogether. Include multiple contact options and state your availability or response time to set expectations early.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Bonus: Fresh Content Helps You Get Found and Trusted
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Regularly adding new articles or blog posts helps you in two critical ways: it <Link href="https://latinowebstudio.com/blog/seo-expert-witnesses">boosts your visibility in search engines</Link> and positions you as a thought leader. Topics might include recent industry developments, interpretations of legal rulings in your specialty, or summaries of recent speaking engagements.
  </p>
  <p className="text-base text-gray-700 mb-4">
    Search engines favor active websites with valuable, relevant content. Even short posts can help you appear in results when lawyers research technical topics. When a visitor finds your article helpful, they&apos;re more likely to explore the rest of your site and reach out.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    What Attorneys Actually Look for When Hiring Experts
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Lawyers vetting expert witnesses are thinking about more than just credentials. They want to know how often you&apos;ve testified, how well you hold up under scrutiny, and whether your methodology has been admitted in similar cases. Having this information easily accessible makes you a safer and more appealing choice.
  </p>
  <p className="text-base text-gray-700 mb-4">
    Publications, court experience, and professional presentation all matter. But so does communication style. Attorneys often prioritize experts who can explain complex ideas clearly, calmly, and persuasively—starting with your online content.
  </p>
   <h3 className="text-xl font-medium text-gray-800 mb-2">
        Building Trust with Lawyers
      </h3>
      <Image 
              src="/blog/What-Lawyers-Want-to-See-on-Your-Website-02.png"
              width={2000}
              height={2000} alt={"Building Trust with Lawyers"}  
              className="mb-4"
              />
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Your Website as a Professional Asset
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Think of your website as an ongoing professional asset—not a static brochure. It should reflect the depth of your experience and make it easy for attorneys to trust, understand, and contact you. Investing in quality design and content is not just about <Link href="https://latinowebstudio.com/blog/marketing-strategies-expert-witnesses-2025">marketing</Link>—it&apos;s about aligning with the expectations of legal professionals who rely on clarity and credibility.
  </p>
  <p className="text-base text-gray-700 mb-4">
    When your website presents the right information in the right format, it works around the clock to help you build trust, demonstrate competence, and secure new opportunities as an expert witness. By focusing on what attorneys actually need to see, you position yourself not just as a qualified expert—but as a reliable partner in litigation.
  </p>
  <p className="text-base text-gray-700 mb-4">
  To improve your chances of being discovered online, it&apos;s important to understand the <Link href="https://latinowebstudio.com/blog/attorneys-keywords">SEO keywords attorneys use when searching for expert witnesses</Link>. Aligning your content with these search terms can significantly boost visibility and engagement.
</p>
      </ContentBlock>
      <CTA />
    </>
  );
}
