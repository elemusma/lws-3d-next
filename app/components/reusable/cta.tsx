import Link from "next/link";
import ContactForm from "../forms/ContactForm";

export default function Cta() {
  return (
    <>
      <section style={{ paddingTop: 100, paddingBottom: 100 }} id="schedule">
        <div className="mx-auto px-4">
          <div
            className="flex justify-center -mx-4 z-[1] relative"
            style={{ flexWrap: "wrap" }}
          >
            <div className="px-4 text-center w-full pb-10">
              <div className="lg:w-1/2 w-full mx-auto">
                <h2>Get More Cases and Get Found by Attorneys</h2>
                <p>
                  If you want more cases and get found by more attorneys as an
                  expert witness fill out the form below or call{" "}
                  <Link href="tel:+13039278228" className="text-link">
                    303.927.8228
                  </Link>
                  .
                </p>
              </div>
              {/* <small>It&apos;s not by attending the SEAK conference every year, although it is recommended.</small> */}
            </div>
            <div
              className="lg:w-1/2 w-full px-4 text-center w-full"
              id="calendar"
            >
              {/* <!-- Calendly inline widget begin --> */}
              <ContactForm />
              {/* <CalendlyWidget /> */}
              {/* <!-- Calendly inline widget end --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
