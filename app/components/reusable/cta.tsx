"use client";

import Link from "next/link";
import ContactForm from "../forms/ContactForm";
import { ReactNode } from "react";

type CtaProps = {
  title?: string;
  description?: ReactNode;
};

export default function Cta({ title, description }: CtaProps) {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 100 }} id="schedule">
      <div className="mx-auto px-4">
        <div
          className="flex justify-center -mx-4 z-[1] relative"
          style={{ flexWrap: "wrap" }}
        >
          <div className="px-4 text-center w-full pb-10">
            <div className="lg:w-1/2 w-full mx-auto">
              <h2>{title || "Get More Cases and Get Found by Attorneys"}</h2>
              {description || (
                <p>
                  If you want more cases and get found by more attorneys as an
                  expert witness fill out the form below or call{" "}
                  <Link href="tel:+13039278228" className="text-link">
                    303.927.8228
                  </Link>
                  .
                </p>
              )}
            </div>
          </div>
          <div
            className="lg:w-1/2 w-full px-4 text-center w-full"
            id="calendar"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
