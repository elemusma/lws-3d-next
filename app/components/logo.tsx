"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Logo() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkMedia = () => {
      setIsDesktop(window.innerWidth > 768); // Assumes 768px as the breakpoint between desktop and mobile
    };

    checkMedia(); // Check on mount
    window.addEventListener("resize", checkMedia); // Add resize listener

    return () => window.removeEventListener("resize", checkMedia); // Cleanup listener on unmount
  }, []);
  return (
    <>
      <div
        className="flex items-center p-1 logo"
        style={{
          borderRadius: "40px",
          backgroundColor: "var(--accent-secondary)",
        }}
      >
        <div
          className="relative flex items-center justify-center logo-container"
          style={{ width: 75, height: 75 }}
        >
          <Image
            src="/assets/logo-bg.png"
            alt="Logo"
            width={75}
            height={75}
            className="absolute logo-bg"
            style={{
              top: "0%",
              left: "0%",
              transform: "translate(-50%,-50%)",
            }}
          />
          <Image
            src="/assets/logo-bird.png"
            alt="Logo"
            width={40}
            height={40}
            className="relative logo-bird"
          />
        </div>
        <div style={{ paddingLeft: 10, paddingRight: 10, marginTop: -5 }}>
          <span
            className="text-accent d-block text-shadow logo-text"
            style={{ fontSize: "1.5rem", margin: 0, lineHeight: 1 }}
          >
            Latino Web Studio
          </span>
          <p
            className="text-white d-block logo-subtext"
            style={{ margin: 0, fontSize: "70%", lineHeight: 1 }}
          >
            {isDesktop ? (
              <em>Lawyers - Retainers - Cases</em>
            ) : (
              <em>Lawyers - Retainers - Cases</em>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Logo;
