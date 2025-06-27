"use client";
import { useEffect, useRef } from "react";

interface ResponsiveYouTubeProps {
  videoId: string;
}

const ResponsiveYouTube = ({ videoId }: ResponsiveYouTubeProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const aspectRatio = 560 / 315;

    const resize = () => {
      iframe.style.height = `${iframe.offsetWidth / aspectRatio}px`;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      className="w-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default ResponsiveYouTube;
{
  /* <ResponsiveYouTube videoId="otuPxxnH4q0" /> */
}
