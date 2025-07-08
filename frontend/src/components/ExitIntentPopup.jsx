"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlidingCard from "./miniComponents/SlidingCard";
import { MonitorDown, X } from "lucide-react";

const COOLDOWN_MINUTES = 1; // 💡 Change this if needed

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSecondHeading, setShowSecondHeading] = useState(false);

  // ✅ Clear exitIntentLastShown on each refresh
  useEffect(() => {
    const lastShown = localStorage.getItem("exitIntentLastShown");
    if (lastShown) {
      const diff = (Date.now() - Number(lastShown)) / (1000 * 60);
      if (diff >= COOLDOWN_MINUTES) {
        localStorage.removeItem("exitIntentLastShown");
      }
    }
  }, []);

  // ✅ Check if popup is allowed
  const isCooldownActive = () => {
    const lastShown = localStorage.getItem("exitIntentLastShown");
    if (!lastShown) return false;

    const diff = (Date.now() - Number(lastShown)) / (1000 * 60);
    console.log("⏱ Time since last popup:", diff.toFixed(2), "minutes");
    return diff < COOLDOWN_MINUTES;
  };

  // ✅ Show popup if allowed
  const tryToShowPopup = () => {
    if (!isCooldownActive()) {
      setShowPopup(true);
      localStorage.setItem("exitIntentLastShown", Date.now().toString());
    }
  };

  // ✅ Exit intent (mouseleave or tab close)
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10) tryToShowPopup();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") tryToShowPopup();
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // ✅ Optional: Scroll trigger + delay
  useEffect(() => {
    const scrollHandler = () => {
      const scrolled =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled > 0.5) {
        setTimeout(tryToShowPopup, 10000); // 10s delay
        window.removeEventListener("scroll", scrollHandler);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // ✅ Trigger 2nd heading
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowSecondHeading(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
    setShowSecondHeading(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex justify-center items-center"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
            className="relative bg-base-100/40 backdrop-blur-lg border border-base-content/20 shadow-xl text-base-content max-w-xl w-[90%] sm:w-[90%] md:w-[85%] lg:w-full p-6 sm:p-8 md:p-10 rounded-2xl text-center"
          >
            {/* ❌ Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-primary hover:text-error transition duration-200"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 👇 Headings */}
            <AnimatePresence mode="wait">
              {!showSecondHeading ? (
                <motion.h2
                  key="heading1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary"
                >
                  Are you going?
                </motion.h2>
              ) : (
                <motion.h2
                  key="heading2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8"
                >
                  <span className="text-primary font-[Poppins]">
                    See what I can{" "}
                  </span>
                  <span className="text-secondary font-[Pacifico]">create</span>{" "}
                  <span className="inline-block animate-pulse text-secondary ml-2 text-3xl">
                    <MonitorDown className="size-10 mt-4 mb-0" />
                  </span>
                </motion.h2>
              )}
            </AnimatePresence>

            {showSecondHeading && (
              <div className="my-6">
                <SlidingCard autoSlide />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
