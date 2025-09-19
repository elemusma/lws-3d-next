// components/ResponsiveEmbeds.tsx
'use client';

import { useEffect } from 'react';

const ResponsiveEmbeds = () => {
  useEffect(() => {
    const adjustIframes = () => {
      const iframes = document.querySelectorAll<HTMLIFrameElement>('.wp-block-embed__wrapper iframe');
      const aspectRatio = 560 / 315; // 16:9 ratio

      iframes.forEach((iframe) => {
        iframe.style.height = `${iframe.offsetWidth / aspectRatio}px`;
      });
    };

    adjustIframes(); // Initial run
    window.addEventListener('resize', adjustIframes); // Re-run on resize

    return () => {
      window.removeEventListener('resize', adjustIframes);
    };
  }, []);

  return null;
};

export default ResponsiveEmbeds;
