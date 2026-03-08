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

export default function CounterCultureCoffeeContent({ basePath = "" }) {
  return (
    <>
      <header className="mb-14 lg:mb-20">
        <div className="relative w-screen max-w-none left-1/2 -translate-x-1/2 aspect-[1.2/1.6] lg:aspect-[2.5/1] overflow-hidden mb-8">
          <Parallax speed={0.4} className="absolute inset-0 w-full h-full overflow-hidden" id="ccc-hero-parallax">
            <motion.div
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <Image
                src={`${basePath}/images/bg-image-2.jpg`}
                alt="Counter Culture Coffee"
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
                Counter Culture Coffee
              </h1>
              <p className="text-xl lg:text-2xl leading-snug max-w-2xl">
                Replatforming and Scaling a $20M+ Coffee Brand with a Custom Shopify Experience
              </p>
            </motion.div>
            <motion.a
              href="https://counterculturecoffee.com/"
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
            <dd className="text-[#0b192e]">Counter Culture Coffee — a sustainability-focused premium coffee brand offering subscriptions and specialty coffee products.</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#0b192e] uppercase tracking-wide mb-0.5">Role</dt>
            <dd className="text-[#0b192e]">Lead Shopify Developer & Technical Partner</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#0b192e] uppercase tracking-wide mb-0.5">Scope</dt>
            <dd className="text-[#0b192e]">Shopify replatforming, full site rebuild, subscription architecture, CRO strategy, and ongoing technical partnership.</dd>
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
            We also successfully <span className="font-semibold">migrated the existing subscriber base to Shopify</span>, integrating with ReCharge while maintaining subscription continuity.
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
              <p className="relative text-3xl lg:text-5xl font-cabinet font-semibold mb-2">79%</p>
              <p className="relative text-sm font-medium uppercase tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue">reduction in subscriber churn</p>
              <p className="relative text-sm lg:text-base leading-relaxed">
                Achieved through a <span className="font-semibold">custom tiered-discount system</span> and <span className="font-semibold">subscription experience improvements</span>.
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
              <p className="relative text-3xl lg:text-5xl font-cabinet font-semibold mb-2">23%</p>
              <p className="relative text-sm font-medium uppercase tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-subtle-purple via-subtle-pink to-subtle-blue">increase in conversion rate</p>
              <p className="relative text-sm lg:text-base leading-relaxed">
                Driven by <span className="font-semibold">conversion-focused UX</span>, improved product discovery, and a more effective subscription flow.
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
            Counter Culture Coffee partnered with me as their <span className="font-semibold">technical lead for over 2.5 years</span> to replatform their D2C experience and scale their ecommerce infrastructure.
          </p>
          <p>
            The project included a full rebuild of their ecommerce site on Shopify, migrating their existing subscriber base, and designing a new architecture to support both <span className="font-semibold">D2C and B2B customers</span>.
          </p>
          <p>
            Beyond development, my role also included ongoing <span className="font-semibold">CRO strategy, experimentation, and technical leadership</span> to support the brand&apos;s growth.
          </p>
        </div>
      </motion.section>

      {/* The Challenge */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          The Challenge
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          The brand was migrating from an older ecommerce platform and faced several challenges:
        </p>
        <ul className="list-none space-y-2 max-w-2xl">
          {[
            "Complex subscription migration and ReCharge integration",
            "Slow site performance impacting user experience",
            "An unstructured coffee catalog that made product discovery difficult",
            "High subscriber churn",
            "Payment integration issues",
            "SEO considerations during the migration",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          The new platform needed to improve <span className="font-semibold">performance, product discovery, and subscription retention</span> while preserving the brand&apos;s transparency and storytelling.
        </p>
      </motion.section>

      {/* Custom Shopify Architecture */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Custom Shopify Architecture
        </h3>
        <div className="max-w-3xl space-y-4 text-base lg:text-lg text-[#0b192e]/90 leading-relaxed">
          <p>
            I rebuilt the ecommerce platform end-to-end using a <span className="font-semibold">custom Shopify theme</span>, designed specifically to support Counter Culture&apos;s complex product catalog and subscription model.
          </p>
          <p>
            A key architectural improvement was implementing a <span className="font-semibold">metaobject-based data system</span> to organize the brand&apos;s coffee relationships and partnership data.
          </p>
          <p>
            This enabled the team to structure and manage complex information across the site, including their award-winning transparency reports highlighting sustainability initiatives, sourcing relationships, and profit transparency.
          </p>
        </div>
      </motion.section>

      {/* Conversion-Focused UX Improvements */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Conversion-Focused UX Improvements
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          The rebuild focused heavily on improving product discovery and subscription conversion.
        </p>

        <h4 className="text-lg font-semibold text-[#0b192e] mt-6 mb-2">Homepage Optimization</h4>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-4">
          Using insights from analytics and user recordings, I restructured the homepage to highlight key products, subscription offerings, and brand storytelling in a more conversion-focused layout. Tools used included Google Analytics, Shopify Analytics, and Hotjar user recordings.
        </p>

        <h4 className="text-lg font-semibold text-[#0b192e] mt-6 mb-2">Navigation & Product Discovery</h4>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-4">
          To improve navigation across a large coffee catalog, I implemented a custom mega menu system that organizes products by blend, roast level, coffee type, and flavor profile — making it easier for customers to discover products aligned with their preferences.
        </p>

        <h4 className="text-lg font-semibold text-[#0b192e] mt-6 mb-2">Advanced Collection Pages</h4>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-4">
          Collection pages were redesigned to support deeper exploration: advanced filtering based on roast level, origins, flavor profile, and coffee type; quick-view product previews; and improved browsing flow across collections.
        </p>

        <h4 className="text-lg font-semibold text-[#0b192e] mt-6 mb-2">Smart Search Suggestions</h4>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-4">
          Search functionality was enhanced with intelligent suggestions based on high-frequency search queries from Shopify analytics, allowing customers to quickly navigate to popular products and categories.
        </p>

        <h4 className="text-lg font-semibold text-[#0b192e] mt-6 mb-2">Custom Cart & Shipping Logic</h4>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          I developed a custom cart experience with advanced shipping logic and targeted upsell opportunities designed to increase order value.
        </p>
      </motion.section>

      {/* Subscription Retention System */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Subscription Retention System
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          The most impactful improvement was building a <span className="font-semibold">custom tiered-discount system for subscribers</span> using the ReCharge API.
        </p>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          This system incentivizes long-term subscriptions through progressive discounts, encouraging customers to remain subscribed over time.
        </p>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          The result was a dramatic <span className="font-semibold">79% reduction in subscriber churn</span>.
        </p>
      </motion.section>

      {/* Experimentation & CRO Strategy */}
      <motion.section className="mb-14 lg:mb-20" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Experimentation & CRO Strategy
        </h3>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          As Counter Culture Coffee&apos;s technical partner for over 2.5 years, I worked closely with the team to continuously improve the ecommerce experience through data-driven experimentation and iterative optimization.
        </p>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-6">
          Using insights from analytics, user recordings, and customer behavior, we regularly tested improvements across key parts of the conversion funnel.
        </p>
        <h4 className="text-lg font-semibold text-[#0b192e] mt-6 mb-2">Areas of Continuous Optimization</h4>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl mb-4">
          <span className="font-semibold">Homepage structure:</span> Based on engagement data and scroll behavior, we iterated on homepage layout to prioritize subscription offerings, best-selling coffees, and brand storytelling and sustainability messaging. These changes helped surface the most important content earlier in the customer journey.
        </p>
      </motion.section>

      {/* Technical Implementation */}
      <motion.section className="mb-4" {...fadeUp}>
        <h3 className="text-heading-4 font-cabinet font-semibold leading-none text-[#0b192e] mb-4">
          Technical Implementation
        </h3>
        <ul className="list-none space-y-2 max-w-2xl">
          {[
            "Custom Shopify theme architecture",
            "Shopify Liquid / JavaScript development",
            "ReCharge API integrations",
            "Metaobject-based CMS architecture",
            "Custom navigation and filtering systems",
            "Advanced cart logic and subscription flows",
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
