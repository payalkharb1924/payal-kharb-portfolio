"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import profileImage from "../../assets/ProfilePic.jpg";

const AvatarTilt = () => {
  const ref = useRef(null);
  const x = useMotionValue(0.5); // default center
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width;
    const offsetY = (e.clientY - rect.top) / rect.height;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className="w-60 h-60 rounded-full border-4 border-primary mb-6 shadow-xl cursor-pointer overflow-hidden"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={profileImage}
        alt="Payal Kharb"
        className="w-full h-full object-cover rounded-full pointer-events-none"
      />
    </motion.div>
  );
};

export default AvatarTilt;
