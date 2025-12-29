import Link from "next/link";
import CalendlyWidget from "../components/calendly";
import Main from "../js/main";
import ContactForm from "../components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Main />
      <main>
        <section style={{ paddingTop: 50, paddingBottom: 50 }} id="schedule">
          <div className="container mx-auto px-4">
            <div
              className="flex justify-center -mx-4"
              style={{ flexWrap: "wrap" }}
            >
              <div className="px-4 text-center w-full">
                <h1>
                  Improve Your Online Presence, Name Recognition &amp; Branding
                </h1>
              </div>
              <div className="px-4 text-center lg:w-3/4 w-full" id="calendar">
                <p>
                  If you need help getting more clients send a message to help
                  you get started with your website or start an SEO strategy
                  that gets you ranking in Google and AI resulting in more phone
                  calls, texts and emails. Prefer to call?{" "}
                  <Link href="tel:+13039278228" className="text-link">
                    303.927.8228
                  </Link>
                </p>
                <ContactForm />
              </div>
              <div className="w-full text-center px-4 pt-20">
                <h2 style={{ marginBottom: 0 }}>Prefer to Schedule a Call?</h2>
                {/* <!-- Calendly inline widget begin --> */}
                <CalendlyWidget />
                {/* <!-- Calendly inline widget end --> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
