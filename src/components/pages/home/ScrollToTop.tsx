"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../../ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="scrollToTop"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2 }} // Set duration here
          style={{
            position: "fixed",
            bottom: "100px",
            right: "40px",
            zIndex: 9999,
          }}
        >
          <Button className={`px-2 py-3 rounded-full`} onClick={scrollToTop}>
            <ChevronUp className="size-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
