import ContentBlock from "@/app/components/content-block";
import Image from "next/image";
import "@/app/styles/blog.scss";
import type { Metadata } from "next";
import CTA from "@/app/components/reusable/cta";
import Link from "next/link";
import Sidebar from "@/app/components/reusable/Sidebar";
import CTAButtons from "@/app/components/reusable/CTAButtons";

export const metadata: Metadata = {
  title: "Brian - Advice from a Litigation Attorney",
  description:
    "A conversation with trial attorney Brian about how lawyers choose expert witnesses, what makes a professional website, and the importance of credibility in expert witness marketing.",
  openGraph: {
    title: "Brian - Advice from a Litigation Attorney",
    description:
      "A conversation with trial attorney Brian about how lawyers choose expert witnesses, what makes a professional website, and the importance of credibility in expert witness marketing.",
    url: "https://latinowebstudio.com/podcast/dettman-law-louisville",
    type: "article",
    images: [
      {
        url: "https://latinowebstudio.com/podcast/Dettman-Law-Louisville.jpg",
        width: 1200,
        height: 630,
        alt: "Brian Podcast Episode - Latino Web Studio",
      },
    ],
  },
  alternates: {
    canonical: "https://latinowebstudio.com/podcast/dettman-law-louisville/",
  },
};

export default function PodcastEpisodeBrian() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PodcastEpisode",
            name: "Brian - Advice from a Litigation Attorney",
            description:
              "A conversation with trial attorney Brian about how lawyers choose expert witnesses, what makes a professional website, and the importance of credibility in expert witness marketing.",
            url: "https://latinowebstudio.com/podcast/dettman-law-louisville/",
            datePublished: "2025-10-18",
            dateModified: "2025-10-18",
            isPartOf: {
              "@type": "PodcastSeries",
              name: "Brian Guest in Podcast",
            },
            image:
              "https://latinowebstudio.com/podcast/dettman-law-louisville.jpg",
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
                "https://latinowebstudio.com/podcast/dettman-law-louisville/",
            },
            inLanguage: "en",
            keywords:
              "expert witness marketing, how to get more cases as expert witness, personal injury attorney tips, legal expert witness SEO, attorney interviews",
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
                  src="https://www.youtube.com/embed/jiJ5CkHSKL0?si=poaE7o6YjptZXhZX"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <h2 className="text-sm font-semibold mt-10 mb-4">
                Connect with Brian:
              </h2>
              <div className="flex">
                <a
                  href="https://louisville-injury-lawyer.com/"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-website.png"
                    width={45}
                    height={45}
                    alt={
                      "Brian Dettman - Dettman Law Louisville Personal Injury Lawyer website link"
                    }
                    priority
                  />
                </a>

                <a
                  href="https://www.facebook.com/DettmanLaw/"
                  title="Brian Dettman - Dettman Law Louisville Personal Injury Lawyer TikTok link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-facebook.png"
                    width={45}
                    height={45}
                    alt={
                      "Brian Dettman - Dettman Law Louisville Personal Injury Lawyer TikTok link"
                    }
                    priority
                  />
                </a>
                <a
                  href="http://instagram.com/LawDettman"
                  title="Brian Dettman - Dettman Law Louisville Personal Injury Lawyer Instagram link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-instagram.png"
                    width={45}
                    height={45}
                    alt={
                      "Brian Dettman - Dettman Law Louisville Personal Injury Lawyer Instagram link"
                    }
                    priority
                  />
                </a>
                <a
                  href="https://x.com/TrackMyLawyer"
                  title="Brian Dettman - Dettman Law Louisville Personal Injury Lawyer TikTok link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-X.png"
                    width={45}
                    height={45}
                    alt={
                      "Brian Dettman - Dettman Law Louisville Personal Injury Lawyer X link"
                    }
                    priority
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCuUGOmgtrH2_dRFJ53vHEOg?view_as=subscriber"
                  title="Brian Dettman - Dettman Law Louisville Personal Injury Lawyer YouTube link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-youtube.png"
                    width={66}
                    height={45}
                    alt={
                      "Brian Dettman - Dettman Law Louisville Personal Injury Lawyer YouTube link"
                    }
                    priority
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/dettman-and-associates/about/"
                  title="Brian Dettman - Dettman Law Louisville Personal Injury Lawyer LinkedIn link"
                  target="_blank"
                  className="mx-2"
                >
                  <Image
                    src="/icons/icon-linkedin.png"
                    width={45}
                    height={45}
                    alt={
                      "Brian Dettman - Dettman Law Louisville Personal Injury Lawyer LinkedIn link"
                    }
                    priority
                  />
                </a>
              </div>

              <h1 className="text-3xl font-bold mb-6">
                Expert Witness Websites: What Attorneys Really Look For
              </h1>

              <p className="mb-4">
                In this conversation with Louisville, Kentucky trial attorney
                Brian, we discussed the critical factors attorneys consider when
                evaluating expert witnesses online, what makes a{" "}
                <Link href="https://latinowebstudio.com/practice-areas/web-design">
                  professional website
                </Link>
                , and how experts can market themselves without compromising
                credibility.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Search Features on Expert Websites
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> I had two people tell me different
                things about having a search icon on an expert&apos;s website.
                One said it helps when a lawyer is looking for an expert because
                they can search for different things. The other said it
                doesn&apos;t help because the opposition could use that same
                search icon and look for things that could be used against you.
                What are your thoughts?
              </p>

              <p className="mb-4">
                <strong>Brian:</strong> One of my favorite things to do when
                they hire an expert is go on the other side&apos;s website and
                go through every single file if I need to. it&apos; unbelievable
                to me how biased some of them will put their stuff. One of them
                said something like &quot;I do this stuff for the insurance
                companies, I do this all day long.&quot; And I&apos;m like,
                dude, you don&apos;t just put that on a website. You just gave
                me some fantastic cross-examination questions to ask you. Did
                you really think this out?
              </p>

              <div className="relative w-full pb-[56.25%] h-0 mb-8" id="">
                <div
                  className="absolute top-[-75px]"
                  style={{ pointerEvents: "none" }}
                  id="spotify"
                ></div>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl border-0"
                  src="https://open.spotify.com/embed/episode/5yUr8FC8EXpgJmGXBiozPL/video?utm_source=generator"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>

              <p className="mb-4">
                I guess at a certain point they&apos;re just selling themselves
                to the insurance companies that are hiring them. This was about
                seven years ago, back when insurance companies were hiring
                doctors to do peer reviews, which is to basically look through
                my client&apos;s medical records and say &quot;this person
                wasn&apos;t hurt.&quot; I&apos;d go on their websites and see
                that they believe in some of the procedures, and they actually
                provide some of the procedures that they&apos;re saying in their
                reports they don&apos;t do.
              </p>

              <p className="mb-4">
                I&apos;m like, are you really going to call this expert? Do you
                want to encourage the carrier to change their mind and actually
                pay my client to go away? Or how ugly does this have to get? But
                that&apos;s not an everyday scenario. it&apos; a fantastic one
                when a plaintiff&apos;s lawyer can get that kind of evidence.
              </p>

              <p className="mb-4">
                I&apos;m going to use anything and everything on the website for
                cross-examination if I have access to it. So you absolutely have
                to be very careful on both sides. Same thing going the other
                way. I don&apos;t want to hire somebody that does all
                plaintiff&apos;s work all day long and always testifies for the
                plaintiff and puts it on their website.
              </p>

              <p className="mb-4">
                Some experts are savvy. When I&apos;m asking them&quot;how much
                do you do for this side and how much do you do for that
                side?&quot;they&apos;ll say &quot;I don&apos;t know, I
                don&apos;t keep track of that.&quot;Well, we all know you keep
                track of it. But you&apos;re probably not going to put it on
                your website saying &quot;I do 60% this and 40% this&quot;or
                &quot;I do 95% this and 5% this.&quot;It doesn&apos;t make any
                sense to do that. You can tell when you&apos;re deposing
                somebody or cross-examining somebody how savvy they are based on
                what&apos;s on their website.
              </p>

              <CTAButtons />

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                When Opposing Counsel Nitpicks Website Details
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> Let&apos;s say the expert has a really
                good, fact-based report. Sometimes what the opposition will do
                is try to bring up stuff on their website to make them look bad,
                but it&apos; not necessarily anything bad. Like asking&quot;Why
                do you have this photo?&quot;when it&apos; just a photo they put
                there. Do you think the jury can tell they&apos;re just trying
                to make him look bad?
              </p>

              <p className="mb-4">
                <strong>Brian:</strong> If you&apos;re cross-examining somebody
                or deposing somebody and looking to make them look stupid and
                you&apos;re not doing it in a pleasant manner, then you&apos;re
                going to look like a jerk yourself. But the expert needs to
                know: my website, my Instagram, my Facebook, the other side is
                going through all this.
              </p>

              <p className="mb-4">
                Jurors are instructed during trial: do not go and research this
                stuff. You would hope that doesn&apos;t happen, but you hear
                stories. Stories of people going home and doing their own
                experiments or showing up to the scene during the middle of
                trial when they&apos;ve been specifically instructed by the
                judge not to do this thing. If they&apos;re doing that, you have
                to believe they&apos;re probably Googling each lawyer,
                they&apos;re probably Googling the experts, they&apos;re seeing
                what these people have done, they&apos;re searching their
                websites, they&apos;re looking up their past history.
              </p>

              <p className="mb-4">
                That&apos;s all stuff that I do when I&apos;m trying to figure
                out information about the other side and also about people that
                are testifying on behalf of my clients.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                The Importance of Simple, Professional Website Design
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> Do you as a lawyer care if you see a
                home tab on a website? Some people make a really big deal about
                it, but I really don&apos;t think it matters.
              </p>

              <p className="mb-4">
                <strong>Brian:</strong> If I was an expert, the safest thing for
                me in creating a website would be to make it as simple as
                possible. I don&apos;t want a bunch of tabs every which way. I
                want it to say who I am, what I do, why I can say what I can
                say, what my education is, what experience I have in this
                particular level of whatever I&apos;m testifying on.
              </p>

              <p className="mb-4">
                If it&apos; too complicated, then you&apos;re probably giving
                the other side a decent amount of information to cross-examine
                you with. A home tab? I mean, I have a home tab on my website
                that says the different things that I do. You want to make it
                easy for the user. If I go on a website and I can&apos;t figure
                out what the heck this person does or who they are, then
                I&apos;m not going to use them. If it&apos; not user-friendly
                for the person that&apos;s trying to hire them, I&apos;m going
                to click on to the next person.
              </p>

              <p className="mb-4">
                For me, a home tab wouldn&apos;t make any difference. I just
                want to make sure that the information that I need is on the
                website and that There&apos;s nothing there where I&apos;m like
                &quot;I don&apos;t want to hire this person because of X, Y, and
                Z that they posted on their website.&quot;
              </p>

              <p className="mb-4">
                Most people know to click on the logo if they want to go back to
                the home tab. it&apos; not a big deal. I would assume that most
                lawyers are relatively savvy with utilizing the internet and
                expect a certain level of professionalism from these experts and
                their websites. If the website is not professional and not put
                together well, then I&apos;m going to move on to the person that
                has the professional website that says what it needs to say and
                makes it easy for the user.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Why Modern, Professional Websites Matter
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> Some experts have websites that look
                like they were built in 2000. They tell me &quot;I don&apos;t
                need a website, lawyers can come and find me.&quot;But something
                I&apos;ve been noticing is that professionalism and looking
                modern matters. If you have two experts, one with a really old
                school website that&apos;s hard to navigate, and another with a
                really professional one that&apos;s easy to navigate and has
                nothing that could be used against them, would that weigh in on
                your decision?
              </p>

              <p className="mb-4">
                <strong>Brian:</strong> it&apos; very easy to create a
                professional website if you have the right people doing it. If
                somebody has a website from 20 years ago, and There&apos;s
                lawyers that do the same thing with websites from 20 years ago,
                I&apos;m like&quot;why are you guys having this website from 20
                years ago?&quot;it&apos; not really that difficult. You hire the
                right people, they make you a website, you&apos;re not doing it
                yourself. it&apos; not terribly cost-ineffective as well. And I
                believe it helps you rank higher in different algorithms.
              </p>

              <p className="mb-4">
                The notion that you wouldn&apos;t update your website seems
                weird to me. Maybe you&apos;re so busy that you don&apos;t need
                to do that. But that seems like an old person thing to think,
                that &quot;I don&apos;t need a new website&quot;or
                &quot;I&apos;mpos;m good with this thing that looks like AOL
                from 1998.&quot;
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Reviews and Relationships Between Experts and Attorneys
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> Some experts don&apos;t want to collect
                reviews because they think the opposition might make a
                connection and say&quot;oh, they know each other, that&apos;s
                why they hired each other, it&apos; not because he&apos;s a real
                expert.&quot;If the expert is an expert and it&apos; true that
                he&apos;s friends with the lawyer, does that really matter?
              </p>

              <p className="mb-4">
                <strong>Brian:</strong> My father-in-law is a traffic engineer
                and he is a good traffic engineer. He would make the perfect
                witness for me in all sorts of cases. But the first question
                that would ever be asked of him is&quot;how do you know
                Brian?&quot;Because if you just Googled me, you would figure out
                that&apos;s my father-in-law. So I can&apos;t hire him in a lot
                of cases. Now, I can use him behind the scenes to advise me on
                all sorts of stuff, which is super helpful.
              </p>

              <p className="mb-4">
                I would think at a certain point, if the same lawyer is hiring
                the same expert 25, 30 times in a row and it&apos; all the same
                stuff, that becomes a problem. I heard about a lawyer in
                Virginia for 20 years, there was a plaintiff&apos;s lawyer in
                town that always used the same expert for opining that different
                people had brain injuries. Whether or not they had brain
                injuries, this guy was going to say that they had a brain
                injury.
              </p>

              <p className="mb-4">
                That becomes a problem from all sorts of fronts: ethics,
                cross-examination, the same guy doing it over and over and over
                again. That&apos;s not the things that are supposed to happen. I
                don&apos;t want to hire the same expert over and over and over
                again. If they&apos;re good on a particular case and
                they&apos;re helpful and I can justify it and they&apos;re
                telling me truthful information, yeah, that&apos;s who I want to
                use if I&apos;ve used them in the past.
              </p>

              <p className="mb-4">
                But it becomes dangerous over and over and over again because
                the jury hears&quot;well, how much money has this
                plaintiff&apos;s lawyer paid this expert over
                time?&quot;or&quot;how much money has this defense lawyer paid
                this expert over time?&quot;If it&apos; in a six-figure range,
                that&apos;s probably saying to the jury&quot;what are this
                person&apos;s incentives here? Is this person just saying this
                because the lawyer&apos;s paying them to say it?&quot;
              </p>

              <p className="mb-4">
                In full candor, I can pay someone to tell you the sky is purple
                because there are all sorts of experts that, in my opinion, are
                just bought. That can go both sides, but obviously as a
                plaintiff&apos;s lawyer I&apos;m skewed to think that the
                experts telling people they&apos;re not hurt over and over and
                over again are defense hacks and insurance defense hacks paid by
                the insurance companies.
              </p>

              <p className="mb-4">
                I like experts that don&apos;t do a lot of the same stuff over
                and over again. I have a tendency to hire unique experts on all
                different types of cases that I work on. But you have to make
                sure that your expert&apos;s not going to get destroyed by the
                other side when you&apos;re thinking about who you&apos;re going
                to hire.
              </p>

              <p className="mb-4">
                If it&apos; ten years ago and you hired an expert once and you
                hire them again now, that could be a normal situation. I
                don&apos;t have any problem with that. But if I have the same
                expert saying every single one of my clients has this exact same
                injury, that&apos;s not the best thing in the world.
              </p>

              <p className="mb-4">
                There&apos;s some experts for different types of cases. You get
                your shoulder expert for a torn rotator cuff, you need a knee
                person for knee, a hip person, a back person in every which way.
                But you don&apos;t want to be hiring a shoulder guy to tell you
                that someone&apos;s hand is messed up. You&apos;d rather the
                shoulder person tell you that, so you have to make sure that
                person is experienced in that particular area.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Photos on CVs: Should Experts Include Them?
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> The CV gets handed out to the jury, to
                everyone. I see some experts that have their photo on the CV and
                others that don&apos;t. I&apos;ve heard it could cause a bias on
                race or if they look too fancy. Is it recommended that they have
                their photo or not?
              </p>

              <p className="mb-4">
                <strong>Brian:</strong> It depends on that particular case and
                how many experts are testifying. I would think that if there
                were five experts on each side, it wouldn&apos;t hurt to have
                this person&apos;s photo there. If it&apos; a one expert case, I
                don&apos;t know if you need the photograph there.
              </p>

              <p className="mb-4">
                But you&apos;re spot on. I don&apos;t want my expert looking
                like they come from a boatload of money or wearing some flashy
                Rolex or whatever. That&apos;s not a good look. Lawyers do the
                same thing. I love to try a case against lawyers that wear a big
                old flashy gold Rolex. I&apos;m like&quot;this is fantastic,
                I&apos;m glad this could be a decision to wear this
                thing&quot;because the jury sees that thing and he&apos;s
                saying&quot;don&apos;t give my client a bunch of money.&quot;And
                I&apos;m like&quot;dude&apos;s got a $25,000 watch on, he comes
                from some money, what are you talking about?&quot;
              </p>

              <p className="mb-4">
                I think jurors are smart. They put two and two together. So
                it&apos; fantastic from my side when the other side does that.
                But I definitely don&apos;t want my experts looking too fancy
                for lack of a better term.
              </p>

              <p className="mb-4">
                <strong>Tadeo:</strong> Can they update their CV depending on
                the case?
              </p>

              <p className="mb-4">
                <strong>Brian:</strong> I don&apos;t have any problem with them
                updating their CV and putting a photo on it or not putting a
                photo on it. That&apos;s fine with me. Now, if the CV gets
                entered into evidence multiple times, I guess the other side
                could obtain that and then start questioning the expert about
                why they were doing photos or not doing photos. But I don&apos;t
                really think it&apos; going to make a difference to a jury
                whether the photo is on it or not. I kind of like photos.
                I&apos;d probably put them on there.
              </p>

              <p className="mb-4">
                I want to see the expert on the website as well. Some websites
                don&apos;t have a photograph of the expert. People are people,
                humans are humans. I want to see who I&apos;m dealing with and
                who is going to be put in front of a jury at the end of the day.
                If There&apos;s not a photograph, I&apos;m like&quot;what&apos;s
                the deal? What&apos;s this person trying to hide?&quot;
              </p>

              <p className="mb-4">
                I don&apos;t think it&apos; necessarily deceptive in nature, but
                why is there not a photo of that person on the website?
                There&apos;s lawyers that have this stuff too, and I&apos;m like
                &quot;what&apos;s the deal?&quot; it&apos; usually sixty,
                seventy-year-old lawyers that for whatever reason don&apos;t put
                their photographs on their website. Or lawyers that don&apos;t
                want to be identified because they do a specific type of law
                where they don&apos;t want people finding them, which is fine, I
                get that. That&apos;s a nice exception. But if it&apos; just a
                general website, you should have your photograph on it.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Marketing as an Expert Witness
              </h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> Some experts say &quot;I don&apos;t want
                to have too much marketing because it can be used against
                me.&quot; Everything can be used against us. Do you think
                that&apos;s a good excuse to not do marketing and then not get
                as many cases as they could? Or would you still recommend that
                they should do some marketing?
              </p>

              <p className="mb-4">
                <strong>Brian:</strong> It is a business. It is a practice that
                they need to work on. A limited amount of marketing is fine.
                Most of the people that I&apos;m cross-examining are usually
                defense experts, and some of them are hired by insurance
                companies. When it says something like &quot;insurance company
                expert&quot; on their website, I can clearly see they work for
                the insurance companies. I can cross-examine you on this and
                make it look like you&apos;re biased towards them.
              </p>

              <p className="mb-4">
                They would probably be better off saying &quot;I&apos;mpos;m an
                expert in this particular area of the law&quot; and leaving it
                at that. I mean, you want to do enough marketing so you have
                some work. I think juries get that some people market themselves
                as experts.
              </p>

              <p className="mb-4">
                You want to, as an expert, not just be doing it all day long and
                not be doing anything else. You want to be actively doing the
                practice of whatever it is. So if you are testifying about
                people&apos;s injuries, you should have somewhat of a medical
                practice that&apos;s ongoing or have done it for 20, 30, 40
                years, whatever it is.
              </p>

              <p className="mb-4">
                But if you&apos;re just doing that, like if you just graduated
                med school and you&apos;re like &quot;I&apos;mpos;m going to be
                an expert witness in this particular thing,&quot; that&apos;s
                not going to look well. You don&apos;t have the experience to be
                able to testify about it and that&apos;s super important.
              </p>

              <p className="mb-4">
                <strong>Tadeo:</strong> So if they&apos;re younger, it would
                make sense if they have their actual business and do expert
                witness work on the side. And it makes sense if they might do
                more expert witness work once they get older, right?
              </p>

              <p className="mb-4">
                <strong>Brian:</strong> Once they have the experience to be able
                to testify about the thing that they&apos;re testifying about,
                that&apos;s essentially the goal. But if you&apos;re straight
                out of your education, that&apos;s not to suggest you need a
                certain type of education to be able to testify. I&apos;ve
                worked on cases before where we needed an opinion about a horse
                saddle. I drove up from South Florida to Ocala to meet with an
                expert so they could physically evaluate a saddle.
              </p>

              <p className="mb-4">
                it&apos; not like they went to college for saddle evaluation or
                anything. They just had been doing that type of work for so long
                and had been around horses for that long that they were able to
                testify about it. That level of experience allowed them to do
                so, which is why we were utilizing that expert.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">About Brian</h2>

              <p className="mb-4">
                <strong>Tadeo:</strong> For people that don&apos;t know you, can
                you tell us who you are, your law firm, what you specialize in,
                and who you like working with?
              </p>

              <p className="mb-4">
                <strong>Brian:</strong> I&apos;m a plaintiff&apos;s personal
                injury lawyer in Louisville, Kentucky. I handle cases across the
                state. I do all different types of cases. I&apos;d say the bulk
                of my cases are car crash cases. I do a lot of dog bite cases
                for whatever reason. I also represent a lot of children that are
                hurt in various daycare centers. I do some medical malpractice.
                Basically, anytime anybody is hurt and they need someone to help
                them, that&apos;s when I get involved.
              </p>

              <p className="mb-4">
                My stock and trade is being available, being able to try a case
                if I need to try a case, and working hard.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-4">
                Key Takeaways for Expert Witnesses
              </h2>

              <p className="mb-4">
                This conversation with Brian highlighted several important
                considerations for expert witnesses:
              </p>

              <p className="mb-4">
                <strong>Website Content:</strong> Be extremely careful about
                what you put on your website. Anything can and will be used for
                cross-examination. Avoid appearing biased toward one side or
                making claims that could be contradicted.
              </p>

              <p className="mb-4">
                <strong>Professionalism:</strong> Modern, professional websites
                matter. They signal credibility and make it easy for attorneys
                to find the information they need.
              </p>

              <p className="mb-4">
                <strong>Simplicity:</strong> Keep your website simple and
                focused on your credentials, experience, and expertise. Avoid
                unnecessary complexity that could provide ammunition for
                opposing counsel.
              </p>

              <p className="mb-4">
                <strong>Marketing Balance:</strong> Some marketing is necessary
                to build your practice, but maintain professionalism and avoid
                appearing too commercial or biased.
              </p>

              <p className="mb-4">
                <strong>Experience Matters:</strong> Continue practicing in your
                field while doing expert witness work, especially early in your
                career. Real-world experience enhances credibility.
              </p>

              <p className="mb-4">
                <strong>Relationship Management:</strong> While repeat business
                is valuable, be cautious about being hired too frequently by the
                same attorneys, as it can raise questions about bias.
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
