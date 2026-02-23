import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prernat.dev";

export const metadata = {
  title: "Prerna Tripathy - Shopify Developer",
  description:
    "Senior Shopify Developer. I develop scalable, conversion-focused e-commerce solutions using modern front-end technologies.",
  openGraph: {
    title: "Prerna Tripathy — Senior Shopify Developer",
    description:
      "I develop scalable, conversion-focused Shopify storefronts, delivering fast, intuitive experiences that support business growth.",
    url: siteUrl,
    siteName: "Prerna Tripathy",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
