"use client";

import Link from "next/link";
import ContactFormPodcast from "../forms/ContactFormPodcast";
import { ReactNode } from "react";

type CtaProps = {
  title?: string;
  description?: ReactNode;
};

export default function CtaPodcast({ title, description }: CtaProps) {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 100 }} id="schedule">
      <div className="mx-auto px-4">
        <div
          className="flex justify-center -mx-4 z-[1] relative"
          style={{ flexWrap: "wrap" }}
        >
          <div className="px-4 text-center w-full pb-10">
            <div className="lg:w-1/2 w-full mx-auto">
              <h2>{title || "Share Your Voice. Be a Guest on the Podcast."}</h2>
              {description || (
                <p>
                  If you&apos;re a car accident or personal injury attorney,
                  we&apos;d love to feature your insights on our podcast. Prefer
                  to call{" "}
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
            <ContactFormPodcast />
          </div>
        </div>
      </div>
    </section>
  );
}
