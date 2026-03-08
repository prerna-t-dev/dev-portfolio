import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CaseStudyLayout({ children }) {
  return (
    <div className="relative font-grotesk bg-white text-[#0b192e] z-[10] overflow-hidden min-h-screen">
      <Navbar lightBg />

      <article className="max-w-[1260px] mx-auto px-6 pt-24 lg:pt-32 pb-16 lg:pb-24">
        <Link
          href="/#pf--projects"
          className="inline-flex items-center gap-2 text-[#0b192e]/80 text-sm hover:text-[#0b192e] transition-colors mb-8"
        >
          <span>←</span> Back to projects
        </Link>
        {children}
      </article>

      <div className="px-6 pb-12 border-t border-[#0b192e]/10">
        <Footer />
      </div>
    </div>
  );
}
