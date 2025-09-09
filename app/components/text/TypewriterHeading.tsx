"use client";

import React from "react";

export default function TypewriterHeading() {
  const title = "Episode #1: Thousand Oaks Personal Injury Lawyer";

  return (
    <>
      <h1 className="typewriter-heading text-secondary pb-2">
        {title.split("").map((c, i) => (
          <span
            key={i}
            className="char"
            style={{ [`--i`]: i.toString() } as React.CSSProperties}
          >
            {c === " " ? "\u00A0" : c}
          </span>
        ))}
      </h1>
      <h2 className="fade-up-heading m-0 text-secondary pb-2">
        <span className="ml-1">🎤</span> Inside the Attorney&apos;s Mind
      </h2>
    </>
  );
}
