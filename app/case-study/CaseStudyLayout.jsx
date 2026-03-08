import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CaseStudyLayout({ children }) {
  return (
    <div className="relative font-grotesk bg-white text-[#0b192e] z-[10] overflow-hidden min-h-screen">
      <Navbar lightBg />

      <Link
        href="/#pf--projects"
        className="absolute top-24 lg:top-40 left-6 lg:left-14 z-20 inline-flex items-center gap-2 text-transparent font-medium bg-gradient-to-r from-subtle-purple-light via-subtle-pink-light to-subtle-blue-light bg-clip-text text-base lg:text-base hover:opacity-90 transition-opacity"
        style={{
          backgroundSize: "200% 100%",
          animation: "gradientShift 2s ease infinite",
        }}
      >
        <span>←</span> Back to projects
      </Link>

      <article className="max-w-[1260px] mx-auto px-6">
        {children}
      </article>

      <div className="max-w-[1260px] mx-auto px-6 mt-16 lg:mt-20">
        <Link
          href="/#pf--projects"
          className="inline-flex items-center gap-2 text-[#0b192e] font-medium text-base border-b border-[#0b192e] pb-0.5 w-fit hover:opacity-80 transition-opacity"
        >
          <span>←</span> Back to projects
        </Link>
      </div>

      <div className="px-6 pb-12 mt-12 lg:mt-16">
        <Footer />
      </div>
    </div>
  );
}
