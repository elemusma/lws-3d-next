import CalendlyWidget from "../components/calendly";
import Main from "../js/main";

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
              <div className="px-4 text-center lg:w-1/2">
                <h1>Web Design and SEO</h1>
                <p>
                  Schedule a time below to learn how we can help you get started
                  with your website or start an SEO strategy that results in
                  more business.
                </p>
                <small>
                  It&apos;s not by attending more networking events, although it
                  is recommended.
                </small>
              </div>
              <div className="px-4 text-center w-full" id="calendar">
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
