"use client";

import React from "react";
import Image from "next/image";
import Parallax from "@/components/Parallax";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
    <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function MoziWashContent({ basePath = "" }) {
  return (
    <>
      <header className="mb-14 lg:mb-20">
        <div className="relative w-screen max-w-none left-1/2 -translate-x-1/2 aspect-[1.2/1.6] lg:aspect-[2.5/1] overflow-hidden mb-8">
          <Parallax speed={0.4} className="absolute inset-0 w-full h-full overflow-hidden" id="moziwash-hero-parallax">
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <Image
                src={`${basePath}/images/bg-image-1.jpg`}
                alt="MoziWash"
                fill
                className="object-cover scale-110"
                sizes="100vw"
                priority
              />
            </motion.div>
          </Parallax>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(11,25,46,0.5) 0%, rgba(11,25,46,0.15) 50%, transparent 100%)" }}
          />
          <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-14 pb-8 lg:pb-12 pointer-events-none">
            <motion.div
              className="mix-blend-difference text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-heading-2 lg:text-heading-1 font-cabinet font-semibold leading-none mb-2">
                MoziWash
              </h1>
              <p className="text-xl lg:text-2xl leading-snug max-w-2xl opacity-90">
                Designer Scented Laundry Detergent
              </p>
            </motion.div>
            <motion.a
              href="https://www.moziwash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg bg-[#0b192e] text-white text-base w-fit font-medium hover:bg-[#050d1a] transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              View live site
              <ExternalLinkIcon />
            </motion.a>
          </div>
        </div>

        <motion.div
          className="flex flex-wrap gap-2 mb-10 lg:mb-12 pb-10 lg:pb-12 border-b border-[#0b192e]/15"
          {...fadeUp}
        >
          {["Liquid", "jQuery", "Shopify", "Recharge"].map((tag, i) => (
            <span
              key={i}
              className="py-1 px-3 border border-[#0b192e]/60 text-[#0b192e] rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </header>

      <motion.section className="mb-12 lg:mb-16" {...fadeUp}>
        <h2 className="text-heading-3 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Overview
        </h2>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          MoziWash is a designer scented laundry detergent brand. The work included a full rebrand, UX overhaul, and building a bundle and subscription experience to lift AOV and recurring revenue.
        </p>
      </motion.section>

      <motion.section className="mb-12 lg:mb-16" {...fadeUp}>
        <h2 className="text-heading-3 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Highlights
        </h2>
        <ul className="list-none space-y-2 max-w-2xl">
          {[
            "Shopify rebrand & UX overhaul",
            "Bundle builder + Subscriptions (AOV + recurring revenue)",
            "Tiered gifting logic (AOV ↑50%)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>
    </>
  );
}
