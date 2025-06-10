import ContentBlock from "@/app/components/content-block";
import "@/app/styles/blog.scss";
import Image from "next/image";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
import Link from "next/link";
// import Link from "next/link";

export const metadata: Metadata = {
  title:
   "Why Your Website Might Be Costing You Cases—and How UX Can Fix That - Latino Web Studio",
  description:
   "Attorneys reviewing expert witnesses often move fast. They scan, evaluate, and make judgments within seconds.",
  openGraph: {
    title:
     "Why Your Website Might Be Costing You Cases—and How UX Can Fix That - Latino Web Studio",
    description:
     "Attorneys reviewing expert witnesses often move fast. They scan, evaluate, and make judgments within seconds.",
    url: `https://latinowebstudio.com/blog/user-experience-ux`, // Replace with actual URL
    type:"website",
    images: [
      {
        url: `https://latinowebstudio.com/blog/user-experience-01.png`, // Replace with the actual image path
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        alt:"Why Your Website Might Be Costing You Cases—and How UX Can Fix That - Latino Web Studio",
      },
    ],
  },
};

export default function UserExperience() {
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
    Why Your Website Might Be Costing You Cases—and How UX Can Fix That
  </h1>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Attorneys Decide Fast—Poor UX Gets You Dismissed
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Attorneys reviewing expert witnesses often move fast. They scan, evaluate, and make judgments within seconds. If your website loads slowly, looks outdated, or lacks clear contact paths, they might leave before reading your credentials. In legal markets, that can mean fewer inquiries, lower visibility, and missed cases. User experience, or UX, is the structure, flow, and clarity that makes a digital impression work—or fail.
  </p>
  <h3 className="text-xl font-medium text-gray-800 mb-2">
      Impact of User Experience (UX) on Attorney Engagement
    </h3>
    <Image 
    src="/blog/user-experience-01.png"
    width={2000}
    height={2000} alt={"Converting Lawyer Traffic into Case Inquiries"}  
    priority
    />

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Why UX Is Often Overlooked by Expert Witnesses
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Many expert witness websites function like static CVs. They often lack the usability features professionals in other industries take for granted. According to the <a href="https://www.interaction-design.org/" target="_blank">Interaction Design Foundation</a>, user experience includes more than design aesthetics. It covers usability, clarity, accessibility, and trustworthiness. When those elements are weak, attorneys may question not only your online presentation but also your reliability as a litigation partner.
  </p>
<p className="text-base text-gray-700 mb-4">
  Peter Morville&apos;s UX Honeycomb identifies seven essential UX traits: usable, useful, findable, credible, desirable, accessible, and valuable. For expert witnesses, credibility and findability are non-negotiable. Even if your CV is technically accessible, an outdated or poorly styled website can signal low quality or inattention to detail—raising red flags for attorneys. If your practice areas aren&apos;t clearly described or your site fails on mobile, lawyers may assume you&apos;re behind the curve, regardless of your actual qualifications.
</p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    A Real-World User Experience (UX) Breakdown of an Expert Witness Site
  </h2>
<p className="text-base text-gray-700 mb-4">
  Picture this: A forensic engineering expert&apos;s website opens with their name in the page title and a headshot positioned on the right. On the left, there&apos;s a block of text with bullet points like &quot;Over 20 years of experience in...&quot; &quot;Licensed Professional...&quot; and &quot;XYZ Certified.&quot; While the credentials are solid, the layout feels dated—text may be misaligned, other elements spill off the screen on mobile, and there&apos;s no clear narrative guiding attorneys through what the expert actually does. Without defined case types, legal relevance, or direct contact links, the site may come across as low quality or unprofessional, even if the expert is highly qualified.
</p>
<p className="text-base text-gray-700 mb-4">
  For <Link href="https://latinowebstudio.com/blog/attorneys-keywords">attorneys scanning quickly</Link>, this layout creates friction. There&apos;s no immediate signal of what the expert does, which case types they serve, or how to contact them. Key information is often buried below the fold—forcing visitors to scroll or guess where to look. In some cases, valuable content like videos or testimonials is not placed above-the-fold so it doesn&apos;t to make a difference. If the first impression is poor, attorneys may never scroll far enough to see it. </p>
  <p className="text-base text-gray-700 mb-4">
  A better UX would begin with a clear statement like &quot;Structural Engineering Expert Witness for Construction Disputes&quot; placed prominently at the top, along with visible, actionable contact options. Navigation should reflect legal interests—such as &quot;Qualifications,&quot; &quot;Case Types,&quot; and &quot;Testimony Experience&quot;—to match the way attorneys evaluate potential experts.
</p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Attorney-Friendly User Experience (UX) Tips for Expert Witnesses
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Improving UX doesn&apos;t mean hiring a giant development firm. It means making design choices that align with how attorneys research and make decisions. Start by ensuring your site works on all devices. Responsive design isn&apos;t optional—legal professionals often search from mobile phones. Your navigation should be direct, using language attorneys use: &quot;Testimony History,&quot; not &quot;Highlights.&quot;
  </p>
  <p className="text-base text-gray-700 mb-4">
    Organize your homepage to answer three questions immediately: Who are you? What kinds of cases do you take? How can a lawyer contact you now? Each internal page should be structured with headers, bullet points, and downloadable content that builds legal trust. Usability guidelines from <a href="https://www.amazon.com/UX-Book-Guidelines-Ensuring-Experience/dp/0123852412" target="_blank">Hartson and Pyla&apos;s UX</a> lifecycle emphasize simplicity, prototyping, and iteration—meaning your site should evolve as you grow.
  </p>
  <p className="text-base text-gray-700 mb-4">
    Accessibility is more than a compliance checkbox—it&apos;s part of <Link href="https://latinowebstudio.com/blog/eeat">trust</Link>. Make sure text is readable, forms are labeled properly, and navigation can be completed without confusion. Technical SEO also matters. Use <Link href="https://latinowebstudio.com/blog/schema-markup">schema markup</Link> for your professional credentials, optimize meta titles with search intent (e.g., &quot;Biomechanics Expert Witness for Injury Cases&quot;), and create landing pages for your top service categories.
  </p>
  <p className="text-base text-gray-700 mb-4">
    Latino Web Studio works specifically with expert witnesses to deliver exactly these upgrades. From UX audits to complete rebuilds, we apply user-centered design with legal-industry relevance—no guesswork, no generic templates. Our <Link href="https://latinowebstudio.com/blog/seo-expert-witnesses">SEO strategies</Link> are tuned to how attorneys search, what they expect, and how your online presence can match those expectations.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Turn Your Website into a Professional Asset
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Your website is often your first contact with attorneys—and it needs to support that moment, not sabotage it. With clear UX improvements, your site can present you as a competent, ready, and approachable professional. It can shorten the time it takes a lawyer to understand your fit, and it can prevent lost opportunities due to outdated or confusing design.
  </p>
  <p className="text-base text-gray-700 mb-4">
    Latino Web Studio helps expert witnesses strengthen their online presence through legally aligned UX design, fast-loading pages, clear legal-service structures, and smart SEO strategies. We understand how expert witnesses are vetted online, and we <Link href="https://latinowebstudio.com/blog/lawyers-experts-websites">build websites</Link> that support that exact process.
  </p>
  <p className="text-base text-gray-700 mb-8">
    Ready to improve your visibility and get found by the right attorneys? Contact Latino Web Studio for a free UX evaluation and learn how we can help you turn your digital presence into a source of ongoing professional authority.
  </p>
      </ContentBlock>
      <CTA />
    </>
  );
}
