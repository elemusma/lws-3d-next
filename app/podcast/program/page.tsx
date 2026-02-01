"use client";
import GoogleReviews from "@/app/components/reusable/GoogleReviews";
import Image from "next/image";
// import Link from "next/link";

export default function PodcastProgram() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Cover Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Inside the
                <br />
                Attorney&apos;s
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Mind
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
                Guiding Experts in Working with Attorneys
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                This podcast explores what expert witnesses need to know to
                stand out in a competitive market and, more importantly, how to
                become an indispensable partner to the attorneys who hire them
                (you).
              </p>
            </div>
            <div className="flex flex-col gap-6 h-full relative">
  <Image 
    src="/assets/Program-Podcast-01.jpg" 
    alt="Inside the Attorney's Mind Logo" 
    width={400} 
    height={600}
    className="w-full h-full object-cover object-top rounded-lg lg:absolute"
  />
</div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-24 px-4 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">The Mission</h2>
          <div className="bg-gray-900 rounded-lg p-12 border border-purple-500/30">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At Inside the Attorney&apos;s Mind, here&apos;s the dedicated and clear
              purpose:
            </p>
            <p className="text-2xl font-semibold text-purple-400 mb-8">
              To help expert witnesses understand what attorneys are truly
              looking for, bridging the communication gap between specialized
              knowledge and legal application.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              As your host, I&apos;ll guide our conversations to uncover valuable
              perspectives from both sides of the expert-attorney relationship,
              ensuring you&apos;re prepared to provide the most effective testimony
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Episode Structure */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Episode Structure - 30 minutes total
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Introduction",
                description:
                  "This is your promotional opportunity where we'll talk about you and your law firm for 5-8 minutes.",
                icon: "🎬",
              },
              {
                title: "Main Discussion",
                description:
                  "The heart of our episode will focus on three core areas:\n• Common myths about attorney expectations\n• Real-world expert witness stories\n• Practical advice for effective testimony",
                icon: "💬",
              },
              {
                title: "Wrap-Up & Takeaways",
                description:
                  "We'll conclude with your most valuable insights and any final thoughts you'd like our audience to remember.",
                icon: "✨",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg p-8 border border-purple-500/30 hover:border-purple-500/60 transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  {item.title}
                </h3>
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-24 px-4 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Technical Requirements
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Equipment
              </h3>
              <ul className="space-y-4">
                {[
                  "No headphones or earphones preferably",
                  "Webcam enabled for better connection",
                  "Quiet, echo-free environment",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Platform
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The podcast software is called <span className="font-bold text-purple-400">Squadcast</span> for high-quality
                remote recording.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You can join with a simple browser link which will be in the
                Google calendar invitation.
              </p>
            </div>
</div>

            <div className="flex flex-col gap-6 h-full relative">
  <Image 
    src="/assets/Program-Taylor.jpg" 
    alt="Inside the Attorney's Mind Logo" 
    width={400} 
    height={600}
    className="w-full h-full object-cover object-top rounded-lg lg:absolute"
  />
</div>
          </div>
        </div>
      </section>

      {/* Speaking Freely */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Speaking Freely
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col gap-6 h-full relative">
  <Image 
    src="/assets/Program-Logan.jpeg" 
    alt="Inside the Attorney's Mind Logo" 
    width={400} 
    height={600}
    className="w-full h-full object-cover object-top rounded-lg lg:absolute"
  />
</div>
            <div className="space-y-6">
              <p className="text-xl text-gray-300 font-semibold">
                During our conversation, please:
              </p>
              <ul className="space-y-4">
                {[
                  "Speak naturally and conversationally",
                  "Share candid insights and authentic experiences",
                  "Don't worry about perfect phrasing - we'll edit for clarity.",
                  "No need to share anything private like names or specific cases, just general examples are more than enough.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6 mt-8">
                <p className="text-blue-200">
                  <span className="font-bold">Need something off the record?</span> Simply say &quot;Let&apos;s keep this part
                  private&quot; immediately after speaking, and we&apos;ll flag it for
                  removal during editing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Topics */}
      <section className="py-24 px-4 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Conversation Topics
          </h2>
          <div className="mb-12 bg-gray-900 rounded-lg p-8 border border-gray-700">
            <p className="text-gray-300 mb-6">
              While our discussion will flow naturally, here are some areas
              we&apos;ll explore:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Common Misconceptions",
                  description:
                    "What do expert witnesses often get wrong about working with attorneys? Where do communication breakdowns typically occur?",
                },
                {
                  title: "Success Stories & Challenges",
                  description:
                    "Your best and worst experiences with expert witnesses. What made the difference between exceptional and problematic testimony?",
                },
                {
                  title: "Selection Process",
                  description:
                    "How you identify, evaluate, and ultimately choose expert witnesses for your cases. What qualities make an expert stand out?",
                },
                {
                  title: "Pre-Interview Questionnaire",
                  description:
                    "We'll also incorporate questions from our pre-interview questionnaire you completed.",
                },
              ].map((topic, idx) => (
                <div key={idx} className="bg-gray-800 rounded p-6 border border-purple-500/20">
                  <h4 className="text-lg font-bold text-purple-400 mb-2">
                    {topic.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Guest Questionnaire */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Attorney Guest Questionnaire
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Here are some of the topics we&apos;ll cover (but not strictly) during
            our podcast session.
          </p>
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "Common Misconceptions",
                description:
                  "What is one common misconception you see expert witnesses have about working with attorneys or getting hired for cases?",
              },
              {
                num: "2",
                title: "Memorable Experience",
                description:
                  "Can you share a story—good or bad—about working with an expert witness that really stood out to you? (No names needed, just the lesson or takeaway.)",
              },
              {
                num: "3",
                title: "Finding Expert Witnesses",
                description:
                  "When you need an expert witness, what is your typical process for finding (what keywords do you search online) and vetting them?",
              },
              {
                num: "4",
                title: "Decision Factors",
                description:
                  "Websites and marketing are usually neglected by experts and prefer not to do marketing. We'll go over some questions about what you as a consumer in this situation might like to see in an expert's website.",
              },
              {
                num: "5",
                title: "Advice to Expert Witnesses",
                description:
                  "If you could give expert witnesses one piece of advice to stand out to attorneys like yourself, what would it be?",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-8 border border-purple-500/30 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-600">
                    <span className="text-white font-bold">{item.num}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Episode Promotion */}
      <section className="py-24 px-4 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Episode Promotion
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-900 rounded-lg p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                After our conversation, we&apos;ll:
              </h3>
              <ul className="space-y-4">
                {[
                  "Edit for clarity while preserving your authentic voice",
                  "Create professional show notes with key takeaways",
                  "Distribute across social media platforms",
                  "Please send us a full body photo that you'd like to use for the thumbnail",
                  "You'll receive a notification after publication and a link to watch.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-1">★</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 h-full relative">
  <Image 
    src="/assets/Porgram-Promotion-YouTube.jpg" 
    alt="Inside the Attorney's Mind Logo" 
    width={400} 
    height={600}
    className="w-full h-full object-cover object-top rounded-lg lg:absolute"
  />
</div>
          </div>
          <div className="mt-8 p-6 bg-purple-900/20 border border-purple-500/30 rounded-lg text-center">
            <p className="text-gray-300">
              <span className="text-purple-400 font-semibold">We encourage you to share the episode with your network</span> - we&apos;ll provide easy
              sharing links!
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Share */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Ready to Share Your Expertise?
          </h2>
          <div className="w-full mb-12">
            {[
              {
                stat: "1.25K",
                label: "LinkedIn & YouTube Followers",
                description: "Growing audience of entrepreneurs and expert witnesses.",
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-3">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
            <GoogleReviews
            placeId="ChIJ_TB4z7-JbIcRsXgIetzV1uU"
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          />
          <div className="bg-gray-800 rounded-lg mt-10 p-8 border border-purple-500/30 text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Your insights will help bridge the gap between specialized
              knowledge and legal application, making a real difference for both
              experts and attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-800 to-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📞",
                label: "Phone",
                value: "303.927.8228",
              },
              {
                icon: "✉️",
                label: "Email",
                value: "info@latinowebstudio.com",
              },
              {
                icon: "🌐",
                label: "Website",
                value: "LatinoWebStudio.com/Podcast",
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-lg p-8 border border-purple-500/30 text-center hover:border-purple-500/60 transition"
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-purple-400 font-bold mb-2">
                  {contact.label}
                </h3>
                <p className="text-gray-300 font-semibold text-base">{contact.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg">
              We&apos;re excited to collaborate with you and share your valuable
              expertise with our audience!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}