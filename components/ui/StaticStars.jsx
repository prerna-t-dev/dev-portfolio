"use client";

import React from "react";
import { cn } from "@/lib/utils";

/** Light static star field. No animation. Use on white (default) or pass light for white stars on dark bg. */
const STAR_POSITIONS = [
  [8, 12], [22, 8], [45, 15], [68, 10], [85, 18], [12, 28], [38, 32], [72, 26], [92, 35],
  [5, 45], [28, 48], [55, 42], [78, 50], [18, 62], [48, 58], [82, 65], [35, 78], [65, 82],
  [10, 85], [50, 90], [88, 88],
];

export function StaticStars({ className, opacity = 0.06, light = false, ...props }) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      aria-hidden
      {...props}
    >
      {STAR_POSITIONS.map(([x, y], i) => (
        <div
          key={i}
          className={cn("absolute rounded-full", light ? "bg-white" : "bg-[#0b192e]")}
          style={{
            width: i % 3 === 0 ? 1.5 : 1,
            height: i % 3 === 0 ? 1.5 : 1,
            left: `${x}%`,
            top: `${y}%`,
            opacity,
          }}
        />
      ))}
    </div>
  );
}
