import React from "react";
import Image from "next/image";

export default function ScoopContent({ basePath = "" }) {
  return (
    <>
      <header className="mb-12 lg:mb-16">
        <div className="relative aspect-[2/1] lg:aspect-[3/1] rounded-2xl lg:rounded-3xl overflow-hidden mb-8">
          <Image
            src={`${basePath}/images/bg-image-3.jpg`}
            alt="Scoop Studio"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 1260px"
            priority
          />
        </div>
        <h1 className="text-heading-2 lg:text-heading-1 font-cabinet font-medium text-[#0b192e] mb-2">
          Scoop Studio
        </h1>
        <p className="text-xl text-[#0b192e]/80 mb-6">
          Luxury Lingerie for all sizes
        </p>
        <div className="flex flex-wrap gap-2">
          {["Liquid", "Shopify", "Tailwind", "GSAP", "Shopify Flow"].map((tag, i) => (
            <span
              key={i}
              className="py-1 px-3 border border-[#0b192e]/60 text-[#0b192e] rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="https://www.shopscoopstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-[#0b192e] font-medium underline underline-offset-4 hover:opacity-80"
        >
          View live site →
        </a>
      </header>

      <section className="mb-12 lg:mb-16">
        <h2 className="text-heading-3 font-cabinet font-medium text-[#0b192e] mb-4">
          Overview
        </h2>
        <p className="text-base lg:text-lg text-[#0b192e]/90 leading-relaxed max-w-3xl">
          Scoop Studio is a luxury lingerie brand offering inclusive sizing and a premium shopping experience. The project involved custom Shopify architecture and a guided sizing experience to reduce returns and build confidence.
        </p>
      </section>

      <section className="mb-12 lg:mb-16">
        <h2 className="text-heading-3 font-cabinet font-medium text-[#0b192e] mb-4">
          Highlights
        </h2>
        <ul className="list-none space-y-2 max-w-2xl">
          {[
            "Custom Shopify architecture",
            "Guided sizing quiz system",
            "Hybrid product + service flows",
            "Advanced size-based filtering",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0b192e]/90">
              <span className="text-[#0b192e] mt-0.5">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Add any custom sections / HTML below */}
    </>
  );
}
