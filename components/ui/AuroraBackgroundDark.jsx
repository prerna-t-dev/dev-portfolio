"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackgroundDark = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full w-full bg-zinc-900 text-slate-100 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        
        <div
          className={cn(
            `
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora-dark:repeating-linear-gradient(100deg,var(--indigo-800)_10%,var(--violet-700)_15%,var(--blue-900)_20%,var(--purple-900)_25%,var(--blue-800)_30%)]
            [background-image:var(--dark-gradient),var(--aurora-dark)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] opacity-75
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora-dark)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-multiply
            pointer-events-none
            absolute -inset-[10px] will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
