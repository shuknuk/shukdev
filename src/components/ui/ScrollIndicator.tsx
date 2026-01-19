"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Check if page is scrollable
      const isScrollable =
        document.documentElement.scrollHeight > window.innerHeight + 1;

      // Check if we are near the bottom (within 20px)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;

      setIsVisible(isScrollable && !isAtBottom);
    };

    // Check initially and on resize/scroll
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight / 2, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <motion.button
            onClick={handleScrollDown}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-[--background] text-[--foreground] border border-[--border] shadow-xl hover:bg-[--background-secondary] rounded-full flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Scroll down"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
