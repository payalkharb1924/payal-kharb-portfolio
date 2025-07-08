"use client";

import { AnimatePresence, motion, wrap } from "motion/react";
import { useEffect, useState, forwardRef } from "react";

const items = [
  { id: 1, color: "#f472b6", title: "Amazing Websites" },
  { id: 2, color: "#60a5fa", title: "UI/UX Designs" },
  { id: 3, color: "#34d399", title: "Creative Frontends" },
  { id: 4, color: "#facc15", title: "Product Designs" },
  { id: 5, color: "#a78bfa", title: "Graphic Designs" },
  { id: 6, color: "#34d399", title: "Solid Backends" },
];

export default function SlidingCard() {
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = wrap(0, items.length, selected + 1);
      setSelected(next);
      setDirection(1);
    }, 1500); // faster slide
    return () => clearInterval(interval);
  }, [selected]);

  return (
    <div className="w-[300px] h-[300px] mx-auto relative overflow-hidden rounded-2xl">
      <AnimatePresence custom={direction} mode="popLayout" initial={false}>
        <SlideCard
          key={items[selected].id}
          item={items[selected]}
          direction={direction}
        />
      </AnimatePresence>
    </div>
  );
}

const SlideCard = forwardRef(({ item, direction }, ref) => {
  const offset = 100;
  return (
    <motion.div
      ref={ref}
      key={item.id}
      initial={{ x: direction * offset, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -direction * offset, opacity: 0 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-2xl shadow-xl text-white text-2xl font-bold"
      style={{ backgroundColor: item.color }}
    >
      {item.title}
    </motion.div>
  );
});
