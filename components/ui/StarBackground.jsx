"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const StarBackground = ({ className, ...props }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Reduced number of stars (e.g., 50 stars)
    const starCount = 72; // Number of stars
    const starsArray = [];

    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 1.5 + 0.5; // Random size for stars
      const xPos = Math.random() * 100; // Random horizontal position
      const yPos = Math.random() * 100; // Random vertical position
      const delay = Math.random() * 10; // Random delay for animation

      starsArray.push({ xPos, yPos, size, delay });
    }

    setStars(starsArray);
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none z-[-10] overflow-hidden opacity-0 animate-fadeIn", // Add fadeIn animation here
        className
      )}
      {...props}
    >
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001f3f] to-[#0a0a0a]"></div> */}


      {/* Random Stars */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.yPos}vh`,
              left: `${star.xPos}vw`,
              backgroundColor: "rgba(255, 255, 255, 0.4)", // Stars slightly more visible
              animation: `starAnimation ${Math.random() * 10 + 5}s linear infinite, floatUpDown ${Math.random() * 5 + 3}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
