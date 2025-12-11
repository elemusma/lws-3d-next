import ContentBlock from "@/app/components/content-block";
import Image from "next/image";
import "@/app/styles/blog.scss";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
import Link from "next/link";
import Sidebar from "@/app/components/reusable/Sidebar";
import CTAButtons from "@/app/components/reusable/CTAButtons";

export const metadata: Metadata = {
  title: "Patrick Hinrichs - Expert Witness Selection & Personal Injury Law",
  description:
    "A conversation with personal injury attorney Patrick Hinrichs from Bruning Law Firm about how attorneys evaluate expert witnesses, what attorneys actually look for on expert websites, and how overusing the same expert can damage your credibility.",
  openGraph: {
    title: "Patrick Hinrichs - Expert Witness Selection & Personal Injury Law",
    description:
      "A conversation with personal injury attorney Patrick Hinrichs from Bruning Law Firm about how attorneys evaluate expert witnesses, what attorneys actually look for on expert websites, and how overusing the same expert can damage your credibility.",
    url: "https://latinowebstudio.com/podcast/patrick-Hinrichs-bruning-law",
    type: "article",
    images: [
      {
        url: "https://latinowebstudio.com/podcast/Patrick-Hinrichs-Bruning-Law.jpg",
        width: 1200,
        height: 630,
        alt: "Patrick Hinrichs Podcast Episode - Latino Web Studio",
      },
    ],
  },
  alternates: {
    canonical: "https://latinowebstudio.com/podcast/patrick-Hinrichs-bruning-law/",
  },
};

export default function PodcastEpisodePatrick() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PodcastEpisode",
            name: "Patrick Hinrichs - Expert Witness Selection & Personal Injury Law",
            description:
              "A conversation with personal injury attorney Patrick Hinrichs about how attorneys evaluate expert witnesses, what makes an effective website for experts, the dangers of overusing the same expert, and how to build credibility in litigation.",
            url: "https://latinowebstudio.com/podcast/patrick-Hinrichs-bruning-law/",
            datePublished: "2025-11-15",
            dateModified: "2025-11-15",
            isPartOf: {
              "@type": "PodcastSeries",
              name: "Expert Witness Marketing Podcast",
            },
            image:
              "https://latinowebstudio.com/podcast/Patrick-Hinrichs-Bruning-Law.jpg",
            author: {
              "@type": "Person",
              name: "Tadeo Martinez",
              url: "https://latinowebstudio.com/about",
            },
            publisher: {
              "@type": "Organization",
              name: "Latino Web Studio",
              logo: {
                "@type": "ImageObject",
                url: "https://latinowebstudio.com/assets/LWS-Workspace.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://latinowebstudio.com/podcast/patrick-Hinrichs-bruning-law/",
            },
            inLanguage: "en",
            keywords:
              "expert witness marketing, expert witness credibility, how to hire expert witnesses, personal injury law, attorney advice, expert witness websites, overuse credibility, Bruning Law Firm, St. Louis",
          }),
        }}
      />
      <div className="single-post">
        <ContentBlock
          sectionClassName="bg-[#f7f7f7] text-black lg:pt-[150px] pt-[100px] pb-[100px]"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex flex-col items-center"
          columnClassName="flex flex-col lg:flex-row items-start"
        >
          <div className="lg:w-3/4 w-full lg:pr-8 px-4">
            <div className="prose prose-lg mx-auto max-w-3xl px-4 text-gray-900">
              <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/qqMiXvD0MKw?si=TG311rya5oZX0kVw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <h2 className="text-sm font-semibold mt-10 mb-4">
                Connect with Bruning Law:
              </h2>
              <div className="flex">
                <a
                  href="https://www.bruninglegal.com/"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-website.png"
                    width={45}
                    height={45}
                    alt={
                      "Patrick Hinrichs - Bruning Law Firm website link"
                    }
                    priority
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/bruning-legal/"
                  title="Patrick Hinrichs - Bruning Law Firm LinkedIn link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-linkedin.png"
                    width={45}
                    height={45}
                    alt={
                      "Patrick Hinrichs - Bruning Law Firm LinkedIn link"
                    }
                    priority
                  />
                </a>
                <a
                  href="https://www.facebook.com/bruninglegal"
                  title="Patrick Hinrichs - Bruning Law Firm LinkedIn link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-facebook.png"
                    width={45}
                    height={45}
                    alt={
                      "Patrick Hinrichs - Bruning Law Firm LinkedIn link"
                    }
                    priority
                  />
                </a>
                
                <a
                  href="https://x.com/BruningLegal"
                  title="Patrick Hinrichs - Bruning Law Firm LinkedIn link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-X.png"
                    width={45}
                    height={45}
                    alt={
                      "Patrick Hinrichs - Bruning Law Firm LinkedIn link"
                    }
                    priority
                  />
                </a>
                <a
                  href="https://www.youtube.com/@thebruninglawfirm"
                  title="Patrick Hinrichs - Bruning Law Firm LinkedIn link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-youtube.png"
                    width={65}
                    height={45}
                    alt={
                      "Patrick Hinrichs - Bruning Law Firm LinkedIn link"
                    }
                    priority
                  />
                </a>
              </div>

              <h1 className="text-3xl font-bold mb-6">
                How Attorneys Really Evaluate Expert Witnesses
              </h1>

              <p className="mb-4">
                In this conversation with St. Louis personal injury attorney Patrick Hinrichs from Bruning Law Firm, we discussed what attorneys actually look for when hiring expert witnesses, how <Link href="https://latinowebstudio.com/practice-areas/web-design">professional websites</Link> and credibility impact hiring decisions, and the critical mistakes experts make by limiting their network. Patrick handles cases across automobile crashes, truck crashes, motorcycle accidents, and product liability matters, and he shares insider perspective on exactly what attorneys want from the experts they hire. This episode covers the real strategies attorneys use to evaluate credibility, the patterns they recognize that signal bias, and what can make or break an expert&apos;s reputation in the courtroom.
              </p>
<CTAButtons />
              <h2 className="text-2xl font-semibold mt-10 mb-4">
                The Hidden Cost of Not Marketing: Why Network Limitation Destroys Your Practice
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> I know a lot of experts tell me they don&apos;t need marketing because they already work with a handful of lawyers. They have steady business, they know these attorneys well, and they don&apos;t see why they need to expand. But from my perspective, it seems like that might actually be hurting them in the long run. What are your thoughts on that?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> That&apos;s a great point, and honestly, I think experts who say that are making a critical mistake. When you work with the same people over and over again, sure, you may have a steady flow of business in the short term. But you&apos;re fundamentally limiting the network of individuals that you&apos;re making yourself available to. You&apos;re potentially pigeon-holing yourself as an expert who&apos;s only going to be used by those particular law firms or companies.
              </p>

              <p className="mb-4">
                And here&apos;s what happens next: as you&apos;re used more and more by the same attorneys, your opinions become less and less credible. And I&apos;m not just talking about credibility with other attorneys. The court system sees this too. Judges who oversee lots of these types of cases get to know who you are and who you routinely represent. That&apos;s going to be reflected directly in the value they place in your opinion. I&apos;ve seen opinions written where judges explicitly criticize experts for their opinions and find them not credible just because of the sheer volume of opinions they provide and the fact that it&apos;s consistently for the same core group of defense counsel or defendant companies.
              </p>

              <p className="mb-4">
                So what happens is, when the companies and defense counsel realize that your opinion isn&apos;t worth what it used to be, that judges aren&apos;t giving your testimony the same weight, they stop using you as much. At that point, you&apos;re not getting the steady flow of business that you used to have because you&apos;ve been overused and you haven&apos;t worked on expanding your network. Then you&apos;re left with an inability to generate new business because you haven&apos;t taken the time to try to expand. You&apos;re essentially stuck.
              </p>

              <p className="mb-4">
                <strong>Tadeo:</strong> So it sounds like experts are actually creating a trap for themselves by not marketing and not expanding. They think they&apos;re being efficient by keeping the business concentrated, but eventually that concentration becomes a liability?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> Exactly. It&apos;s counterintuitive, but yes. By limiting your network, you&apos;re actually creating long-term instability. You think you have security because you have steady work, but that security is an illusion. The moment those attorneys realize your opinions aren&apos;t as valuable as they once were, that steady stream dries up. And at that point, you haven&apos;t built the broader network that would allow you to pivot and find new business. You&apos;re left scrambling.
              </p>

              <CTAButtons />

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                When Overuse Kills Credibility: How Courts Recognize and Punish Bias
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> You mentioned that judges see these patterns. Can you walk me through what happens when a judge notices that an expert is being used repeatedly by the same side or the same defendant? What does that actually look like in a courtroom?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> Sure. When we&apos;re looking at experts for cases, we request trial testimony lists or trial disclosures to get an idea of how often they&apos;re named as an expert in federal cases or state cases. This is standard practice. What we&apos;ve discovered is that there are insurance companies that literally have an &quot;approved expert list&quot; internally that they rely on when deciding which experts they&apos;re going to use.
              </p>

              <p className="mb-4">
                So if you see an expert who is used by a defendant more than a handful of times over a several year period, that&apos;s kind of an indicator that you understand what their opinion is going to be before they even provide you with their report. When you see an expert used on 25% of the cases that you&apos;re filing on and they routinely provide a defense-based opinion, that&apos;s a big red flag for me. That tells me this person has a financial incentive to testify for one side.
              </p>

              <p className="mb-4">
                Now, when you get to trial, we&apos;ve developed plenty of ways to really attack and discredit experts in that particular instance. We can cross-examine them about the frequency with which they testify for defendants versus plaintiffs. We can show the jury the pattern. We can point out that this expert makes money testifying for insurance companies, which means they have an incentive to downplay injuries or liability.
              </p>

              <p className="mb-4">
                And here&apos;s the thing: judges are watching this too. Judges who hear cases regularly are going to notice when the same expert shows up over and over again saying the same thing for the same type of party. Judges will explicitly note in their opinions that they&apos;re giving less weight to an expert&apos;s testimony because of this pattern. Once a pattern like that is established, that expert&apos;s value in the marketplace drops significantly.
              </p>

              <p className="mb-4">
                <strong>Tadeo:</strong> So the pattern becomes a matter of public record at that point? Attorneys and judges can just look it up?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> Yes, absolutely. We can research expert testimony disclosures. We can see what cases they&apos;ve testified in. We can review depositions and trial testimony. All of that information becomes available through discovery and public records. So once you see that pattern, you can predict what that expert is going to testify to. That&apos;s not good for the expert, and it&apos;s not good for the attorneys that keep using them because eventually the courts lose faith in that expert&apos;s opinions.
              </p>

              <p className="mb-4">
                I&apos;ve seen situations where if you see an expert used on 25% of the cases, there&apos;s an understanding that they&apos;re probably not going to look at the merits of the case objectively. Once attorneys realize that, we develop strategies to attack their credibility. That&apos;s when the phone stops ringing, ironically, for the very people who kept using them.
              </p>

              <div className="relative w-full pb-[56.25%] h-0 mb-8" id="">
                <div
                  className="absolute top-[-75px]"
                  style={{ pointerEvents: "none" }}
                  id="spotify"
                ></div>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl border-0"
                  src="https://open.spotify.com/embed/episode/2xMkaTPHUr05b0sgZUqWHS/video?utm_source=generator"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>

              <CTAButtons />

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                What Attorneys Really Want on Expert CVs and Resumes
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> Let me shift gears here. I see a lot of experts who focus heavily on their resume or CV. They make these documents really comprehensive, sometimes 10 pages long or more. They include all their training, all their publications, all their certifications. But when you&apos;re looking for a new expert outside your network, would you prefer to see a more summarized, condensed CV? Or do you actually want all of that information available right away when you&apos;re evaluating someone?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> That&apos;s a great question because it gets at what attorneys actually need versus what experts think they need to show. I&apos;ve seen those massive resumes where experts include their fellowship training, their residence training, all their research and published articles. I understand why they do that, that information is good for clearing the necessary hurdles to get someone admitted as an expert. If there&apos;s a challenge on their admissibility as an expert witness, you need all that foundational stuff.
              </p>

              <p className="mb-4">
                But as an attorney hiring an expert, I&apos;m focused on something quite different. What I really need to know is: who do you routinely testify for? What type of testimony experience do you have? What deposition experience do you have? Are you comfortable being aggressive with opposing counsel? Can you articulate complex concepts in a way that a jury can understand?
              </p>

              <p className="mb-4">
                I need to know that not only are you able to provide the opinion that I need, but also how you can articulate that opinion in a manner that helps me get my client the outcome we&apos;re looking for and the story that we&apos;re trying to tell. An expert can be extremely qualified on paper, but if they can&apos;t communicate effectively, if they seem uncertain or evasive under cross-examination, then they&apos;re not going to be as valuable to me.
              </p>

              <p className="mb-4">
                Training is important, obviously. Any particular types of certifications that you might have are certainly important because if you have a more nuanced case and you need a particular expert that works in maybe a niche field, then you want to make sure that they have the qualifications to provide you with the opinion that you want. But beyond that, here&apos;s what I really want to see:
              </p>

              <p className="mb-4">
                I want to see notable cases where you have testified, maybe a brief synopsis of the opinion that you provided. This allows me to see the particular type of opinion you rendered, who you rendered it for, and maybe even what the outcome of that case was. That tells me whether your opinion was a driver in the result of that case, and it helps me understand the types of cases you handle.
              </p>

              <p className="mb-4">
                <strong>Tadeo:</strong> So when you say the outcome of the case, you don&apos;t necessarily care whether they helped win or lose, right? It&apos;s more about understanding the context?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> Well, that would tell me whether or not their opinion was a driver in the result of that case. There are a lot of things that go into whether a particular side wins a case or not, and it&apos;s unfair to whittle it down to just the experts. But yes, just knowing the overall results of that case and trying to get an understanding of the facts of that case and really what the focus of their particular opinion was in that case, that&apos;s going to let me know whether maybe the facts of that case and their opinion aligns with what I need an explanation for.
              </p>

              <p className="mb-4">
                So if I&apos;m looking at an expert who specializes in medical causation in car accidents, I want to see that they have experience testifying in car accident cases with medical injury claims. I don&apos;t just want to know they have a medical degree. I want to know they&apos;ve actually testified in relevant cases. That&apos;s what will help me make the decision about whether to hire them.
              </p>

              <CTAButtons />

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Video: The Missing Piece on Expert Websites
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> This is something you mentioned earlier that I thought was really important, video. You talked about wanting to see video of experts introducing themselves or explaining their work. Can you expand on why that matters to you as an attorney? Because I don&apos;t think a lot of experts are doing this yet.
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> Something that would be very beneficial to me is having some sort of video on your website, maybe a highlight video or just a basic video introducing yourself. As an attorney <Link href="https://latinowebstudio.com/articles/marketing-strategies">marketing for an expert</Link>, having this content allows me to see you, listen to you, and get an idea for how I think a jury might respond to you. That would be very beneficial to me when I&apos;m deciding whether to hire you.
              </p>

              <p className="mb-4">
                Here&apos;s the thing: it&apos;s not just about credentials anymore. I can read credentials on a resume. What I need to understand is how you present yourself. What&apos;s your communication style like? Are you clear when you explain things? Do you come across as confident without being arrogant? Can you answer difficult questions without getting defensive? If I can&apos;t get a sense of that from your website, I&apos;m missing critical information about whether you&apos;re the right fit for my case.
              </p>

              <p className="mb-4">
                When a jury sees you testify, your communication style, your demeanor, how you handle questions under pressure, all of that matters tremendously. If I can get a preview of that through video, that helps me make a much better decision about hiring you. It also helps me prepare my case better. If I can see how you explain things, I know how to frame my questions and what to expect in court.
              </p>

              <p className="mb-4">
                And honestly, as a consumer looking for an expert, I want to see who I&apos;m dealing with. I want to know what you look like, how you communicate. That&apos;s just basic due diligence. Most attorneys looking outside their network don&apos;t know you personally. They&apos;re evaluating you based on your website, your credentials, and increasingly, what you look like and how you present yourself. Video gives them that window.
              </p>

              <p className="mb-4">
                <strong>Tadeo:</strong> So if an expert doesn&apos;t have video on their website, is that a reason not to hire them?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> It&apos;s not a dealbreaker by itself, but it&apos;s definitely a disadvantage. If I have two experts to choose from and one has video and one doesn&apos;t, I&apos;m going to lean toward the one with video. It gives me confidence that they&apos;re tech-savvy, professional, and willing to invest in how they present themselves. The expert without video is going to have to make up for that with other strong qualifications or referrals I trust.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Professional Website Design as a First Impression
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> Let&apos;s talk about website design. I work with a lot of experts, and I&apos;m always telling them that the professionalism of their website actually impacts whether attorneys will hire them. Some experts resist this. They say, &quot;My work should speak for itself,&quot; or they don&apos;t want to spend the money. But do you think the professionalism of a website actually impacts your decision to hire an expert? Is it just a nice-to-have, or is it actually important?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> I definitely think that as a consumer, you&apos;re typically drawn more towards companies or experts that have a more well-put-together website. An older webpage that doesn&apos;t flow well, with some links that don&apos;t even work, or that just generally looks a little older, is definitely a turnoff for a younger attorney like myself.
              </p>

              <p className="mb-4">
                We want to make sure that the experts we hire are well-versed in appropriate forms of technology that we feel comfortable with. We want them to be responsive to all our inquiries in a timely fashion. If I&apos;m looking at an expert&apos;s website and it looks like it was built in 2005, I start wondering: Are they going to respond to my emails quickly? Will they be able to navigate discovery documents I send them? Can they handle depositions on Zoom if needed?
              </p>

              <p className="mb-4">
                When you encounter an older-appearing website, there are definitely some concerns. Given what juries expect to be presented with and what we&apos;re going to need in terms of professionalism and responsiveness, there&apos;s a moment where you&apos;re a little hesitant to hire someone who maybe doesn&apos;t have as advanced a website as a competitor. I&apos;m not saying you need the fanciest website in the world, but it needs to function properly and look current. It needs to reflect that you take your business seriously.
              </p>

              <p className="mb-4">
                <strong>Tadeo:</strong> So it&apos;s less about aesthetic flash and more about functionality and modernity?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> Exactly. I don&apos;t need fancy. I need functional and current. If your website is from 20 years ago, it&apos;s going to make me wonder about a lot of things. And that&apos;s not fair to you as an expert, but it&apos;s human nature. We make judgments based on what we see. Your website is often the first impression an attorney will have of you.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Why Modern Professional Websites Matter: Being Discoverable
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> Some experts have websites that genuinely look like they were built in 2000. I&apos;ve had them tell me, &quot;I don&apos;t need a website. Lawyers know who I am. They can find me through word of mouth.&quot; But my observation is that professionalism and looking modern actually does matter. If you have two experts, one with a really old-school website that&apos;s hard to navigate, and another with a really professional one that&apos;s easy to navigate and has nothing that could be used against them, would that weigh into your decision? How much does it matter?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> It&apos;s very easy to create a professional website if you have the right people doing it. If somebody has a website from 20 years ago, I wonder why they&apos;re having that website from 20 years ago. It&apos;s not really that difficult to update. You hire the right people, they make you a website, and I believe it helps you rank higher in different algorithms. This matters because most attorneys who have a case that maybe they&apos;re handling for the first time don&apos;t know where to begin looking for experts.
              </p>

              <p className="mb-4">
                So they&apos;re going to go online to try to find an expert who they feel best fits their need for their particular case. That&apos;s where a professional website comes in. You need to be findable. You need to look credible. And frankly, if you don&apos;t have a professional website, some attorneys are going to assume you&apos;re not serious about your business or that you&apos;re not tech-savvy enough to work with.
              </p>

              <p className="mb-4">
                Let me give you context: as an attorney, I&apos;m looking outside my network all the time because I have cases that require experts I haven&apos;t worked with before. Maybe it&apos;s a specialized type of injury or a complex product liability issue. I go to Google and I search for experts in that area. If your website doesn&apos;t come up, or if it comes up but looks terrible, I move on. There are plenty of other options out there.
              </p>

              <p className="mb-4">
                The notion that you wouldn&apos;t update your website seems weird to me. Maybe you&apos;re so busy that you don&apos;t think you need to. But that seems like an old-fashioned way to think about it. If you don&apos;t have a professional website, you&apos;re losing business to competitors who do. It&apos;s that simple.
              </p>

              <p className="mb-4">
                <strong>Tadeo:</strong> So it sounds like having a modern website isn&apos;t really optional if you want to be found by attorneys outside your existing network?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> It&apos;s not optional if you want to grow your business. Word of mouth is great, and it&apos;s valuable, but it&apos;s limited. Your existing network will only take you so far. At some point, you need to be discoverable to attorneys who don&apos;t know you yet. And the only way they&apos;re going to find you is online. So yes, a professional website is essential.
              </p>

              <CTAButtons />

            

              

              <h2 className="text-2xl font-semibold mt-10 mb-4">About Patrick Hinrichs with Bruning Legal</h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> For people that don&apos;t know you, can you tell us who you are, your law firm, what you specialize in, and who you like working with?
              </p>

              <p className="mb-4">
                <strong>Patrick:</strong> My name is Patrick Hinrichs. I&apos;m a partner at the Bruning Law Firm in St. Louis, Missouri. We focus primarily on personal injury matters stemming from automobile crashes, truck crashes, and motorcycle crashes. We also handle product liability issues. Basically, anybody that&apos;s ever been impacted by the negligence of a driver, truck driver, or anyone who generally isn&apos;t operating with the highest degree of care, we&apos;re interested in talking to and helping out and providing the best legal service possible.
              </p>

              <p className="mb-4">
                My stock and trade is being available, being able to try a case if I need to try a case, and working hard on behalf of my clients.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Key Takeaways for Expert Witnesses
              </h2>

              <p className="mb-4">
                This conversation with Patrick highlighted several critical considerations for expert witnesses building and maintaining their practice:
              </p>

              <p className="mb-4">
                <strong>Diversify Your Network:</strong> Don&apos;t rely solely on a handful of referring attorneys. Marketing and building a broader network protects you from becoming overused. When you work with the same attorneys repeatedly, your opinions become predictable and your credibility suffers, not just with attorneys, but with judges and courts. The steady business you think you have is actually fragile and temporary.
              </p>

              <p className="mb-4">
                <strong>Understand Pattern Recognition:</strong> Courts and attorneys track how often you testify and for whom. Judges actively review these patterns and factor them into how much weight they give your opinions. If you&apos;re being used 25% of the time by the same defendant or insurance company, that&apos;s a red flag that everyone will notice. Judges will even write this into their opinions, noting that they&apos;re giving less weight to your testimony because of the pattern.
              </p>

              <p className="mb-4">
                <strong>Highlight Relevant Cases on Your CV:</strong> Beyond training and credentials, attorneys want to see notable cases where you testified and brief descriptions of your opinions. This helps them assess whether you&apos;re the right fit for their specific case and understand your track record and the types of cases you handle. Including case outcomes helps them understand the context of your work.
              </p>

              <p className="mb-4">
                <strong>Add Video Content to Your Website:</strong> Include video introducing yourself on your website, even a simple introduction. Attorneys want to see how you present yourself and communicate because it directly impacts how a jury will perceive you. Your credibility depends not just on credentials, but on communication style, demeanor, and how you handle questions. Video gives attorneys a preview of all of that.
              </p>

              <p className="mb-4">
                <strong>Invest in Professional Web Design:</strong> An outdated or poorly functioning website is a turnoff to attorneys looking outside their network. Professional design signals competence, technical proficiency, and that you take your business seriously. When attorneys are vetting unfamiliar experts, your website is often their first and deciding impression. It doesn&apos;t need to be fancy, but it needs to be current and functional.
              </p>

              <p className="mb-4">
                <strong>Balance Your Client Base Strategically:</strong> Working with both plaintiffs and defendants can enhance credibility. However, be intentional about balance. Avoid becoming known as someone who always testifies for one side. If you appear biased toward defendants or plaintiffs, opposing counsel will attack that relentlessly during cross-examination. Attorneys will research your history and use patterns against you.
              </p>

              <p className="mb-4">
                <strong>Include Photos on Your CV and Website:</strong> Have your photo on your website and your CV. Attorneys want to see who they&apos;re working with. However, be thoughtful about presentation, wear professional but modest clothing, avoid flashy jewelry or accessories that suggest excessive wealth. What experts wear and how they present themselves sends a message that juries will interpret.
              </p>

              <p className="mb-4">
                <strong>Be Found Online:</strong> Attorneys searching outside their network are going online to find experts. If you&apos;re not discoverable through search, you&apos;re missing opportunities. A professional website isn&apos;t a luxury, it&apos;s essential for being considered by attorneys who don&apos;t know you personally. This is particularly important as attorneys handle new types of cases and need experts they haven&apos;t worked with before.
              </p>

              <p className="mb-4">
                <strong>Market Thoughtfully:</strong> Some marketing is necessary to build your practice. But be smart about it. Don&apos;t market exclusively to one side or one type of client. Don&apos;t use language that makes you sound like a hired gun. Position yourself as an expert in your field who helps attorneys understand complex issues, not as someone available to testify for anyone willing to pay.
              </p>

              <CTAButtons />
            </div>
          </div>
          <Sidebar />
        </ContentBlock>
        <CTA />
      </div>
    </>
  );
}