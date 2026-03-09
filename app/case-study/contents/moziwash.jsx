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
                alt="Moziwash"
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
                Moziwash
              </h1>
              <p className="text-xl lg:text-2xl leading-snug max-w-2xl">
                Increasing AOV and Conversion Through a Conversion-Focused Shopify Audit
              </p>
            </motion.div>
            <motion.a
              href="https://www.moziwash.com/"
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
            <dd className="text-[#0b192e]">Moziwash — a fast-growing D2C homecare brand offering laundry detergents inspired by iconic perfumes and colognes.</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#0b192e] uppercase tracking-wide mb-0.5">Role</dt>
            <dd className="text-[#0b192e]">Lead Shopify Developer & Technical Partner</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#0b192e] uppercase tracking-wide mb-0.5">Scope</dt>
            <dd className="text-[#0b192e]">Full website audit, CRO strategy, UX improvements, performance optimization, and iterative experimentation.</dd>
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
            Improved <span className="font-semibold">performance and user experience</span> through technical optimization and data-driven UX improvements.
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
              <p className="relative text-3xl lg:text-5xl font-cabinet font-semibold mb-2">53%</p>
              <p className="relative text-sm font-medium uppercase tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue">increase in average order value</p>
              <p className="relative text-sm lg:text-base leading-relaxed">
                AOV increased from approximately <span className="font-semibold">$35 → $53</span> through bundles, upsells, and cart incentives.
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
              <p className="relative text-3xl lg:text-5xl font-cabinet font-semibold mb-2">21%</p>
              <p className="relative text-sm font-medium uppercase tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue">increase in conversion rate</p>
              <p className="relative text-sm lg:text-base leading-relaxed">
                Driven by <span className="font-semibold">conversion-focused UX</span>, clearer product storytelling, and a gamified cart and bundle experience.
              </p>
            </motion.div>
          </div>
        </section>
      </header>

      {/* Overview */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Overview
        </h3>
        <div className="max-w-3xl space-y-4 text-base lg:text-lg text-[#0b192e]/90 leading-relaxed">
          <p>
            Moziwash partnered with me to conduct a <span className="font-semibold">comprehensive audit</span> of their Shopify storefront to identify opportunities for improving performance, conversion rates, and average order value.
          </p>
          <p>
            The engagement combined <span className="font-semibold">technical auditing, CRO strategy, and iterative experimentation</span> using analytics data and user behavior insights.
          </p>
          <p>
            Using data from analytics and Hotjar recordings, I identified key friction points across the customer journey and implemented improvements to the <span className="font-semibold">homepage, product pages, bundles, and cart experience</span>.
          </p>
        </div>
      </motion.section>

      {/* The Challenge */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          The Challenge
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          The existing storefront faced several issues that limited growth:
        </p>
        <ul className="list-none space-y-2 max-w-2xl">
          {[
            "Slow site performance",
            "Inconsistent brand presentation",
            "Low average order value",
            "Conversion friction across product pages and cart",
            "Limited upsell opportunities",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          The goal was to improve <span className="font-semibold">product discovery, purchasing incentives, and overall store performance</span>.
        </p>
      </motion.section>

      {/* Homepage Optimization */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Homepage Optimization
        </h3>
        <div className="relative mt-6 max-w-5xl aspect-[2.6/1] lg:aspect-[3.6/1]_ overflow-hidden mb-8 [contain:paint] shadow-[0_8px_24px_-4px_rgba(11,25,46,0.08)]">
          <Parallax speed={-0.4} className="absolute inset-0 w-full h-[120%]" id="moziwash-homepage-parallax">
            <div className="h-full w-full overflow-hidden">
              <Image
                src={`${basePath}/images/casestudy/mozi-cs-product-homepage.png`}
                alt="Moziwash homepage"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-center min-h-full"
              />
            </div>
          </Parallax>
        </div>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          The homepage was redesigned to better reflect the brand&apos;s identity and highlight its unique value proposition.
        </p>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-4">
          Key improvements included:
        </p>
        <ul className="list-none space-y-2 max-w-2xl mb-6">
          {[
            "Clearer product storytelling",
            "Featured products and collections",
            "Highlighting unique scent profiles inspired by iconic fragrances",
            "Social proof and user-generated content",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          These changes helped <span className="font-semibold">establish trust</span> while guiding visitors toward key products.
        </p>
      </motion.section>

      {/* Gamified Bundle Builder */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Gamified Bundle Builder
        </h3>
        <div className="relative mt-6 max-w-5xl aspect-[2.6/1] lg:aspect-[3.6/1]_ overflow-hidden mb-8 [contain:paint] shadow-[0_8px_24px_-4px_rgba(11,25,46,0.08)]">
          <Parallax speed={-0.4} className="absolute inset-0 w-full h-[120%]" id="moziwash-homepage-parallax">
            <div className="h-full w-full overflow-hidden">
              <Image
                src={`${basePath}/images/casestudy/mozi-cs-bundle-builder.png`}
                alt="Moziwash bundle builder"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-center min-h-full"
              />
            </div>
          </Parallax>
        </div>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          To increase average order value, I built a <span className="font-semibold">custom gamified bundle builder</span> that encourages customers to purchase multiple products together.
        </p>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          The experience allows customers to mix and match products while unlocking bundle benefits.
        </p>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          As a result, customers began purchasing <span className="font-semibold">1–2 additional products on average</span>, significantly increasing order value.
        </p>
      </motion.section>

      {/* Gamified Cart Experience */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Gamified Cart Experience
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          I also implemented a custom cart experience with <span className="font-semibold">tiered incentives</span>, designed to reward customers for increasing their cart value.
        </p>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-4">
          Features included:
        </p>
        <ul className="list-none space-y-2 max-w-2xl mb-6">
          {[
            "Tiered gifting and discount thresholds",
            "Dynamic cart messaging",
            "Upsell suggestions",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          This gamified approach encouraged customers to <span className="font-semibold">add additional items before checkout</span>.
        </p>
      </motion.section>

      {/* Conversion-Optimized Product Pages */}
      
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Conversion-Optimized Product Pages
        </h3>
        <motion.div className="relative mt-6 max-w-5xl rounded-2xl lg:rounded-3xl overflow-hidden mb-8 shadow-[0_8px_24px_-4px_rgba(11,25,46,0.08)]" {...fadeUp}>
        <video
          className="w-full aspect-video_ object-cover bg-[#0b192e]/5"
          src={`${basePath}/images/casestudy/mozi-cs-product-gallery.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Moziwash case study video"
        >
          <source src={`${basePath}/images/casestudy/mozi-cs-product-gallery.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          Product pages were redesigned with a stronger focus on <span className="font-semibold">conversion and trust</span>.
        </p>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-4">
          Key improvements included:
        </p>
        <ul className="list-none space-y-2 max-w-2xl mb-6">
          {[
            "Conversion-focused image gallery highlighting product features",
            "Clear presentation of signature scent profiles",
            "Featured reviews and user-generated content",
            "Brand comparisons and product benefits",
            "Trust badges and subscription options",
            "Sticky add-to-cart functionality",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          These changes improved both <span className="font-semibold">purchase confidence and product engagement</span>.
        </p>
      </motion.section>

      {/* Performance & Technical Optimization */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Performance & Technical Optimization
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          Alongside CRO improvements, I conducted a <span className="font-semibold">full technical audit</span> to improve site performance and reliability.
        </p>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-4">
          This included:
        </p>
        <ul className="list-none space-y-2 max-w-2xl mb-6">
          {[
            "Page speed improvements",
            "Bug fixes and stability improvements",
            "SEO optimization",
            "Analytics and Hotjar audit for behavior insights",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          These technical improvements ensured the site could <span className="font-semibold">support increased traffic and conversion</span>.
        </p>
      </motion.section>

      {/* Experimentation & Optimization */}
      <motion.section className="mb-4" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Experimentation & Optimization
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          The engagement included ongoing <span className="font-semibold">A/B testing and iterative optimization</span> to continuously improve results.
        </p>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          By analyzing user behavior and testing different UX patterns, we refined key areas of the customer journey including:
        </p>
        <ul className="list-none space-y-2 max-w-2xl">
          {[
            "Bundle interactions",
            "Cart incentives",
            "Product page layout",
            "Homepage messaging",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          This data-driven approach helped steadily increase both <span className="font-semibold">conversion rate and average order value</span>.
        </p>
      </motion.section>
    </>
  );
}
