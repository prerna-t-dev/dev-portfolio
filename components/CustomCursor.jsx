"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Lenis from "lenis";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Ensure Lenis is initialized only on the client side
    const lenisInstance = new Lenis();
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const handleLenisScroll = () => {
      // Adjust Y based on Lenis's velocity
      setCursorPosition((prev) => ({
        ...prev,
        y: prev.y + lenis.velocity,
      }));
    };

    lenis.on("scroll", handleLenisScroll);

    return () => {
      lenis.off("scroll", handleLenisScroll);
    };
  }, [lenis]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[100] will-change-transform"
      style={{
        width: "1200px",
        height: "1200px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(29, 78, 216, 0.06), transparent 50%)",
      }}
      animate={{
        x: cursorPosition.x - 600, // Half the width
        y: cursorPosition.y - 600,
      }}
      transition={{
        duration: 0.2, // Slight delay for smoothness
        ease: "easeOut",
      }}
    />
  );
};

export default CustomCursor;
