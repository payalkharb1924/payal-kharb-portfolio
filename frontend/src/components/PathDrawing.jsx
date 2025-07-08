"use client";

import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const shapeStyle = {
  strokeWidth: 10,
  strokeLinecap: "round",
  fill: "transparent",
  stroke: "currentColor", // 👈 This makes it theme-adaptive
};

export default function PathDrawing() {
  const strokeClasses = [
    "text-primary",
    "text-secondary",
    "text-accent",
    "text-info",
    "text-success",
    "text-warning",
    "text-error",
  ];

  return (
    <motion.svg
      width="500"
      height="500"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
      className="text-primary" // 👈 Replace with theme class dynamically if needed
    >
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        className="text-error"
        variants={draw}
        custom={1}
        style={shapeStyle}
      />
      <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        className="text-success"
        variants={draw}
        custom={2}
        style={shapeStyle}
      />
      <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="30"
        className="text-success"
        variants={draw}
        custom={2.5}
        style={shapeStyle}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="30"
        rx="20"
        className="text-info"
        variants={draw}
        custom={3}
        style={shapeStyle}
      />
      <motion.circle
        cx="100"
        cy="300"
        r="80"
        className="text-info"
        variants={draw}
        custom={2}
        style={shapeStyle}
      />
      <motion.line
        x1="220"
        y1="230"
        x2="360"
        y2="370"
        className="text-error"
        custom={3}
        variants={draw}
        style={shapeStyle}
      />
      <motion.line
        x1="220"
        y1="370"
        x2="360"
        y2="230"
        className="text-error"
        custom={3.5}
        variants={draw}
        style={shapeStyle}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="230"
        rx="20"
        className="text-success"
        custom={4}
        variants={draw}
        style={shapeStyle}
      />
      <motion.circle
        cx="100"
        cy="500"
        r="80"
        className="text-success"
        variants={draw}
        custom={3}
        style={shapeStyle}
      />
      <motion.line
        x1="220"
        y1="430"
        x2="360"
        y2="570"
        className="text-info"
        variants={draw}
        custom={4}
        style={shapeStyle}
      />
      <motion.line
        x1="220"
        y1="570"
        x2="360"
        y2="430"
        className="text-info"
        variants={draw}
        custom={4.5}
        style={shapeStyle}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="430"
        rx="20"
        className="text-error"
        variants={draw}
        custom={5}
        style={shapeStyle}
      />
    </motion.svg>
  );
}
