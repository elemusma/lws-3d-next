// "use client";
import Logo from "@/app/components/logo";
import Link from "next/link";
import Image from "next/image";
import Main from "@/app/js/main";
import "@/app/styles/podcast.scss";
import TypewriterHeading from "@/app/components/text/TypewriterHeading";

// import { useEffect, useRef } from "react";
// import { animate, text, stagger } from "https://cdn.jsdelivr.net/npm/animejs/+esm";
// import anime from "animejs";
// import anime from "animejs/lib/anime.es.js";
// import * as anime from "animejs";
// import anime from "animejs/lib/anime.es.js";

export default function pageTest() {
  return (
    <>
      <Main />
      <main>
        <div className="pt-[200px]"></div>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full">
              {/* <div className="text-container">
  <p id="animated-text">HELPING EXPERT WITNESSES:</p>
</div> */}

              <div className="w-1/4 mx-auto">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <div className="text-center">
                <TypewriterHeading />
              </div>
            </div>
            <div className="w-1/3 text-center fade-up-heading">
              <h2 className="text-lg">Host</h2>
              <Image
                src="/assets/Headshot_1.png"
                alt="Tadeo (Ted) Martinez - Helping Expert Witnesses"
                width="250"
                height="250"
                className="mx-auto" // Add any Tailwind or custom classes
              />
              <h3 className="text-2xl">Tadeo (Ted) Martinez</h3>
            </div>
            <div className="w-1/6">
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511 510.07"
              >
                <g id="Layer_1-2">
                  <g id="F37TJA.tif">
                    {/* <!-- SCALE ARM (pans + crossbar) --> */}
                    <g className="scale-arm">
                      <path d="M0,312.45l23.07-.59,64.28-171.06c2.82-11.07,15.99-13.87,20.63-2.69l65.69,174.34h22.96c-14.52,41.78-53.8,70.3-98.31,70.3-44.82,0-81.55-27.65-98.31-68.31v-2ZM152.7,312.45l-54.39-143.73-54.39,143.73h108.79Z" />
                      <path d="M488.05,312.45h22.96c-18.17,52.55-73.56,81.52-127.52,66.14-31.79-9.06-58.49-34.88-69.1-66.14h22.96l65.69-174.34c3.34-9,13.99-9.84,18.89-1.56l66.13,175.9ZM467.09,312.45l-54.39-143.73-54.39,143.73h108.79Z" />
                    </g>

                    {/* <!-- CENTER POLE (static) --> */}
                    <path d="M292.43,155.76c.31,9.89-3.96,18.82-10.44,25.99-2.22,2.45-6.67,3.32-6.58,7.4l.21,227.44c4.94,3.57,10.85,5.46,15.72,9.23,13.61,10.55,21.97,27.1,23.09,44.27,1.93,1.87,40.16-3.2,50.19,3.21,2.9,1.85,8.64,9.11,8.64,12.31v24.45h-235.54v-24.45c0-3.2,5.74-10.46,8.64-12.31,10.03-6.4,48.26-1.34,50.19-3.21,1.12-17.17,9.48-33.72,23.09-44.27,4.87-3.77,10.79-5.66,15.72-9.23l.21-227.44c.09-4.08-4.36-4.95-6.58-7.4-6.49-7.16-10.76-16.1-10.44-25.99h73.86Z" />

                    {/* <!-- Decorative Top (optional) --> */}
                    <path d="M255.01.06c1.45-.36,1.64.92,2.33,1.65,2.68,2.84,8.28,11.68,10.55,15.4,9.55,15.66,18.4,32.16-.4,45.33l14.45,10.44c35.9-31.47,80.07-8.42,115.96,9.86,8.57-6.31,17.63-8.81,26.74-1.82,16.58,12.74,4.92,39.23-15.49,35.45-11.78-2.18-10.32-9.93-16.57-14.37-4.95-3.51-23.05-11.4-29.62-14.3-24.27-10.7-52.62-18.78-72.31,4.78,3.32,48.65-65.47,55.41-71.13,4.83-.21-1.86,1.24-3.75.57-5.41-1.46-3.61-13-10.65-16.96-12.04-19.38-6.77-38.07.32-55.78,8.16-5.24,2.32-26.4,11.79-29.55,14.37-4.48,3.66-4,9.16-11.5,12.46-22.25,9.78-38.58-20.68-19.4-34.37,9.06-6.47,17.83-3.87,26.18,2.26,35.84-18.34,80.07-41.31,115.96-9.86l14.45-10.44c-25.41-17.64-.27-44.55,11.51-62.38Z" />
                  </g>
                </g>
              </svg>
              <h3 className="text-sm animated-heading">
                Helping Expert Witnesses
              </h3>
            </div>

            <div className="w-1/3 text-center fade-up-heading">
              <h2 className="text-lg">Guest Attorney</h2>
              <Image
                src="/podcast/Logan-Quirk-Podcast.png"
                alt="Tadeo (Ted) Martinez - Helping Expert Witnesses"
                width="250"
                height="250"
                className="mx-auto" // Add any Tailwind or custom classes
              />
              <h3 className="text-2xl">Logan Quirk</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
