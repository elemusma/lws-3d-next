import CalendlyWidget from "../calendly";

export default function Cta() {
    return (
        <>
        <section style={{ paddingTop: 100, paddingBottom: 100 }} id="schedule">
          <div className="mx-auto px-4">
            <div
              className="flex justify-center -mx-4"
              style={{ flexWrap: "wrap" }}
            >
              <div className="px-4 text-center w-full">
                <div className="lg:w-1/2 w-full mx-auto">
                <h2>Get More Cases and Get Found by Attorneys</h2>
                <p>
                  Schedule a time below to learn how we can help you get more cases and get found by more attorneys as an expert witness.
                </p>
                </div>
                {/* <small>It&apos;s not by attending the SEAK conference every year, although it is recommended.</small> */}
              </div>
              <div className="px-4 text-center w-full" id="calendar">
                {/* <!-- Calendly inline widget begin --> */}
                <CalendlyWidget />
                {/* <!-- Calendly inline widget end --> */}
              </div>
            </div>
          </div>
        </section>
        </>
    )
}