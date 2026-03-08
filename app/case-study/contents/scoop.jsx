"use client";

import React from "react";
import Image from "next/image";
import Parallax from "@/components/Parallax";
import { StaticStars } from "@/components/ui/StaticStars";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export default function ScoopContent({ basePath = "" }) {
  return (
    <>
      <header className="mb-14 lg:mb-20">
        <div className="relative w-screen max-w-none left-1/2 -translate-x-1/2 aspect-[1.2/1.6] lg:aspect-[2.5/1] overflow-hidden mb-8">
          <Parallax speed={0.4} className="absolute inset-0 w-full h-full overflow-hidden" id="scoop-hero-parallax">
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <Image
                src={`${basePath}/images/casestudy/scoop-cs-hero.webp`}
                alt="Scoop Studio"
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
              className="mix-blend-difference_ text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-heading-2 lg:text-heading-1 font-cabinet font-semibold leading-none mb-2">
                Scoop Studio
              </h1>
              <p className="text-xl lg:text-2xl leading-snug max-w-2xl">
                Launching an Inclusive Luxury Lingerie Brand with a Conversion-Focused Shopify Experience
              </p>
            </motion.div>
            <motion.a
              href="https://www.shopscoopstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex animate-shimmer items-center justify-center gap-2 mt-6 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white hover:text-slate-300 w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              View live site
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </div>

        

        <motion.dl
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 text-sm border-t_ border-b border-[#0b192e]/15 py-3 mb-10 lg:mb-12"
          {...fadeUp}
        >
          <div>
            <dt className="font-semibold text-[#0b192e] uppercase tracking-wide mb-0.5">Client</dt>
            <dd className="text-[#0b192e]">Scoop Studio — a luxury lingerie brand focused on inclusive sizing.</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#0b192e] uppercase tracking-wide mb-0.5">Role</dt>
            <dd className="text-[#0b192e]">Lead Shopify Developer & Architect</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#0b192e] uppercase tracking-wide mb-0.5">Scope</dt>
            <dd className="text-[#0b192e]">Custom Shopify store development, proprietary sizing quiz, conversion-focused product discovery, and POS integration.</dd>
          </div>
        </motion.dl>
        

        {/* Results — above the fold */}
        <section className="mb-10 lg:mb-12 pb-10 lg:pb-12 border-b border-[#0b192e]/15">
          <motion.h2
            className="text-heading-3 font-cabinet font-semibold leading-none text-[#0b192e] mb-4"
            {...fadeUp}
          >
            Results
          </motion.h2>
          <motion.p
            className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
          >
            The new Shopify platform enabled the brand to <span className="font-semibold">scale beyond in-store sales</span> while maintaining its <span className="font-semibold">personalized fitting experience</span>.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              className="p-6 pb-10 lg:p-8 lg:pb-14 rounded-2xl text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0b192e 0%, #152942 50%, #0d2137 100%)" }}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <StaticStars light opacity={0.5} className="rounded-2xl" />
              <span className="absolute top-3 right-3 text-white/20 text-lg" aria-hidden>✦</span>
              <p className="relative text-3xl lg:text-5xl font-cabinet font-semibold mb-2">142%</p>
              <p className="relative text-sm font-medium uppercase tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue">increase in returning customer rate</p>
              <p className="relative text-sm lg:text-base leading-relaxed">
                The <span className="font-semibold">sizing quiz and personalized recommendations</span> helped customers confidently discover their <span className="font-semibold">correct fit</span>, encouraging repeat purchases.
              </p>
            </motion.div>
            <motion.div
              className="p-6 pb-10 lg:p-8 lg:pb-14 rounded-2xl text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0b192e 0%, #152942 50%, #0d2137 100%)" }}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              <StaticStars light opacity={0.5} className="rounded-2xl" />
              <span className="absolute top-3 right-3 text-white/20 text-lg" aria-hidden>✦</span>
              <p className="relative text-3xl lg:text-5xl font-cabinet font-semibold mb-2">37%</p>
              <p className="relative text-sm font-medium uppercase tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue">increase in gross sales</p>
              <p className="relative text-sm lg:text-base leading-relaxed">
                Launching the online store <span className="font-semibold">expanded the brand’s reach</span> and enabled customers to shop <span className="font-semibold">without requiring in-person fittings</span>.
              </p>
            </motion.div>
          </div>
        </section>

        
        
      </header>

      {/* The Challenge */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          The Challenge
        </h3>
        <div className="max-w-3xl space-y-4 text-base lg:text-lg text-[#0b192e]/90 leading-relaxed">
          <p>
            Scoop Studio previously relied on <span className="font-semibold">in-person fittings</span> to help customers determine their correct bra size, which <span className="font-semibold">limited the brand’s reach</span>.
          </p>
          <p>
            Shopping for lingerie online can be difficult due to <span className="font-semibold">sizing complexity</span>, often leading to uncertainty and returns.
          </p>
          <p>
            The challenge was to <span className="font-semibold">recreate the personalized fitting experience digitally</span> while helping customers confidently find the right products.
          </p>
        </div>
      </motion.section>

      {/* My Approach */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4  font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          My Approach
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          The ecommerce experience was designed around three goals:
        </p>
        <ul className="list-none space-y-2 max-w-2xl">
          {[
            "Replicate the in-store fitting process online",
            "Reduce friction in product discovery",
            "Increase trust and purchase confidence",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          This required combining <span className="font-semibold">custom development, personalization, and structured product navigation</span>.
        </p>
      </motion.section>

      {/* Bra Quiz image — parallax */}
      <div className="relative mt-6 max-w-5xl aspect-[1.8/1] lg:aspect-[2.5/1] rounded-2xl lg:rounded-3xl overflow-hidden mb-8 [contain:paint] shadow-[0_8px_24px_-4px_rgba(11,25,46,0.08)]">
        <Parallax speed={0.4} className="absolute inset-0 w-full h-[120%]" id="scoop-bra-quiz-parallax">
          <div className="h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden">
            <Image
              src={`${basePath}/images/casestudy/scoop-cs-bra-quiz.png`}
              alt="Scoop Studio bra sizing quiz"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-center min-h-full"
            />
          </div>
        </Parallax>
      </div>
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Proprietary Bra Size Quiz
        </h3>
        <div className="max-w-3xl space-y-4 text-base lg:text-lg text-[#0b192e]/90 leading-relaxed">
          <p>
            A core feature of the platform is a <span className="font-semibold">custom-built bra sizing quiz</span> that calculates a user’s <span className="font-semibold">ideal size</span> and recommends suitable products.
          </p>
          <p>
            Because body shapes vary significantly, the quiz algorithm was designed to account for <span className="font-semibold">multiple fit variables</span> and provide more accurate sizing guidance.
          </p>
          <p>
            To support long-term personalization, I also implemented flows that capture and store quiz responses, allowing the store to reference sizing data later and provide more relevant product recommendations.
          </p>
          <p>
            This makes it easier for returning customers to shop confidently once their <span className="font-semibold">fit profile</span> has been established.
          </p>
        </div>
      </motion.section>
      

      {/* Conversion-Focused Product Discovery */}
      <div className="relative mt-6 max-w-5xl aspect-[2.5/1] lg:aspect-[3/1] rounded-2xl lg:rounded-3xl overflow-hidden mb-8 [contain:paint] shadow-[0_8px_24px_-4px_rgba(11,25,46,0.08)]">
        <Parallax speed={0.4} className="absolute inset-0 w-full h-[120%]" id="scoop-bra-quiz-parallax">
          <div className="h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden">
            <Image
              src={`${basePath}/images/casestudy/scoop-cs-navigation.png`}
              alt="Scoop Studio bra sizing quiz"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-center min-h-full"
            />
          </div>
        </Parallax>
      </div>
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Conversion-Focused Product Discovery
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          To simplify navigating a complex sizing catalog, the store was structured around <span className="font-semibold">multiple browsing paths</span>. Customers can explore products:
        </p>
        <ul className="list-none space-y-2 max-w-2xl mb-6">
          {["By size", "By feature", "By style"].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          This layered structure helps customers quickly find products that match their <span className="font-semibold">preferences and body type</span>.
        </p>
      </motion.section>

      {/* Smart Size-Based Navigation */}
      <div className="relative mt-6 max-w-5xl aspect-[2.5/1] lg:aspect-[3.6/1] rounded-2xl lg:rounded-3xl overflow-hidden mb-8 [contain:paint] shadow-[0_8px_24px_-4px_rgba(11,25,46,0.08)]">
        <Parallax speed={0.4} className="absolute inset-0 w-full h-[120%]" id="scoop-bra-quiz-parallax">
          <div className="h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden">
            <Image
              src={`${basePath}/images/casestudy/scoop-cs-size-nav.png`}
              alt="Scoop Studio bra sizing quiz"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-center min-h-full"
            />
          </div>
        </Parallax>
      </div>
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Smart Size-Based Navigation
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          I built a <span className="font-semibold">custom mega menu</span> organized by size, allowing shoppers to easily browse products within their range. The navigation includes logic that <span className="font-semibold">automatically disables unavailable sizes</span>, preventing frustration and improving browsing efficiency.
        </p>
      </motion.section>

      {/* Advanced Filtering System */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Advanced Filtering System
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          The store includes a <span className="font-semibold">structured filtering system</span> designed to streamline product discovery. Customers can filter products by:
        </p>
        <ul className="list-none space-y-2 max-w-2xl">
          {["Size", "Style", "Fit features"].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          This ensures shoppers only see products that <span className="font-semibold">match their requirements</span>.
        </p>
      </motion.section>

      {/* Educational Experience */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Educational Experience
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          To help customers better understand lingerie sizing and terminology, I created a <span className="font-semibold">Glossary page</span> explaining the anatomy of a bra and key fit concepts. This educational layer supports <span className="font-semibold">first-time buyers</span> and builds <span className="font-semibold">trust in the brand</span>.
        </p>
      </motion.section>

      {/* Technical Implementation */}
      <motion.section className="mb-4" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Technical Implementation
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          The entire platform was <span className="font-semibold">custom built on Shopify</span> to support the brand’s specialized sizing experience. <span className="font-semibold">Key implementations</span> included:
        </p>
        <ul className="list-none space-y-2 max-w-2xl">
          {[
            "Custom Shopify theme architecture",
            "Proprietary bra sizing quiz with stored customer fit data",
            "Structured product filtering system",
            "Size-based mega navigation",
            "Shopify POS integration for unified inventory",
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
