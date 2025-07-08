"use client";

import { useEffect, useState } from "react";
import SignatureName from "./SignatureName";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-base-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SignatureName />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
