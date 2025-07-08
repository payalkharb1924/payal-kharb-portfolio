"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/ProfilePic.jpg";
import AvatarTilt from "./miniComponents/AvatarTilt";
import SplitText from "./miniComponents/SplitText";

const themes = [
  "valentine",
  "abyss",
  "dracula",
  "aqua",
  "night",
  "cyberpunk",
  "retro",
  "cupcake",
  "coffee",
  "luxury",
];

const About = () => {
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    setAnimateImage(true);
  }, []);

  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10"
    >
      {/* LEFT: Draggable Theme Buttons */}
      <div className="w-full md:w-[40%]">
        <div className="rounded-xl p-4 bg-base-100/40 backdrop-blur-md border border-base-content/20 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-extrabold text-base-content text-center mb-12">
            <span className="block text-primary tracking-wide mb-2">
              Pick a Theme
            </span>
            <span className="text-sm font-medium text-base-content/70 flex items-center justify-center gap-2">
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full border border-secondary/30 shadow-sm transition hover:scale-105">
                Click to Change
              </span>
              <span className="text-base-content/40">+</span>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/30 shadow-sm transition hover:scale-105">
                Drag for Fun
              </span>
            </span>
          </h2>

          <div className="flex flex-wrap gap-4 justify-center items-stretch">
            {themes.map((theme) => (
              <motion.button
                key={theme}
                drag
                layout={false}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ rotate: 5 }}
                onClick={() => handleThemeChange(theme)}
                data-theme={theme}
                className="theme-pebble bg-base-100 text-base-content rounded-full px-4 py-2 font-semibold shadow-md backdrop-blur-md border border-base-content/10 transition-all cursor-grab active:cursor-grabbing"
              >
                {theme}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Avatar + Intro */}
      <div className="flex flex-col items-center text-center max-w-md">
        {/* <motion.img
          src={profileImage}
          alt="Payal Kharb"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: [null, 1.1, 1.1],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
            },
          }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", bounce: 0.5, duration: 0.4 },
            ease: "easeOut",
          }}
          className="w-56 h-56 rounded-full object-cover border-4 border-primary mb-6 shadow-xl cursor-pointer"
        /> */}
        <AvatarTilt />

        <h1 className="text-3xl font-bold text-base-content mb-1">
          Hi, I’m{" "}
          <span
            className="text-primary font-signature text-4xl inline-block"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Payal Kharb
          </span>
        </h1>

        <p className="text-base-content mb-4">
          <SplitText>
            A passionate developer focused on crafting clean, modern, and
            accessible web apps.
          </SplitText>
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-primary text-primary-content rounded-lg font-semibold hover:scale-105 transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default About;
