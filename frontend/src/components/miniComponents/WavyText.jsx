"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function WavyText({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      const { chars } = splitText(containerRef.current);
      containerRef.current.style.visibility = "visible";

      const staggerDelay = 0.15;

      animate(
        chars,
        { y: [-20, 20] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(staggerDelay, {
            startDelay: -staggerDelay * chars.length,
          }),
        }
      );
    });
  }, []);

  return (
    <span ref={containerRef} className="inline-block wavy-text">
      {children}
      <style>{`
        .wavy-text {
          display: inline-block;
          visibility: hidden;
        }
        .wavy-text .split-char {
          display: inline-block;
          will-change: transform;
        }
      `}</style>
    </span>
  );
}
