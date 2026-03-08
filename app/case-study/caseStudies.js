export const basePath = (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_USE_CUSTOM_DOMAIN !== "true") ? "/dev-portfolio" : "";

/** Metadata for each case study (SEO, titles). Content is in contents/ per slug. */
export const caseStudies = {
  scoop: {
    slug: "scoop",
    title: "Scoop Studio",
    overview: "Scoop Studio is a luxury lingerie brand offering inclusive sizing and a premium shopping experience.",
  },
  moziwash: {
    slug: "moziwash",
    title: "MoziWash",
    overview: "MoziWash is a designer scented laundry detergent brand. Full rebrand, UX overhaul, and bundle + subscription experience.",
  },
  "counter-culture-coffee": {
    slug: "counter-culture-coffee",
    title: "Counter Culture Coffee",
    overview: "Counter Culture Coffee needed a conversion-focused Shopify storefront with subscriptions, custom bundling, and dynamic discounting.",
  },
};

export const caseStudySlugs = Object.keys(caseStudies);
