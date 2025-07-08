"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function SplitText({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <>
      <span
        ref={containerRef}
        className="split-text inline-block"
        style={{ visibility: "hidden" }}
      >
        {children}
      </span>
      <style>{`
        .split-text .split-word {
          display: inline-block;
          will-change: transform, opacity;
        }
      `}</style>
    </>
  );
}
