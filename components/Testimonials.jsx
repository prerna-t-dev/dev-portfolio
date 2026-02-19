"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    quote: "Prerna delivered exceptional work on our Shopify store. Her attention to detail and technical expertise transformed our site into a high-performing e-commerce platform.",
    author: "Sarah Johnson",
    role: "CEO, Brand Co."
  },
  {
    id: 2,
    quote: "I had the pleasure of working with Prerna, an exceptionally talented developer. She led the dev roadmap and efficiently carried out the project end to end. Highly recommended!",
    author: "Sid",
    role: "Co-Founder, Soket AI Labs"
  },
  {
    id: 3,
    quote: "Prerna's front-end development skills are outstanding. She created a seamless shopping experience that our customers love, and her code is clean and maintainable.",
    author: "Emily Rodriguez",
    role: "Head of E-commerce, Retail Brand"
  },
  {
    id: 4,
    quote: "Prerna has supported countless projects and everything we've ever done on Shopify. Her contribution to our site launch and continued store development has made our growth possible. She's been there for us at every step and has been a joy to work with!",
    author: "Penelope Hearne",
    role: "Head of E-commerce, Counter Culture Coffee"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 10000) // Rotate every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="pf--testimonials" className="max-w-[1260px] px-6 mx-auto pt-24 lg:pt-32 pb-24 lg:pb-24">
      <h2 className="mb-8 lg:mb-12 text-heading-2 lg:text-heading-3 font-cabinet font-medium text-secondary-500">
      Client Testimonials
      </h2>
      
      <div className="relative min-h-[300px]_ lg:min-h-[400px]_">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl"
          >
            <blockquote className="text-xl lg:text-2xl font-general text-secondary-300 leading-relaxed mb-6">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>
            <div className="flex flex-col">
              <cite className="text-lg font-semibold text-secondary-500 not-italic">
                {testimonials[currentIndex].author}
              </cite>
              <span className="text-sm text-secondary-500 opacity-70">
                {testimonials[currentIndex].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicator dots */}
        <div className="flex gap-3 mt-8 lg:mt-12 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                index === currentIndex
                  ? 'w-16 h-[2px] rounded-full bg-secondary-500'
                  : 'w-5 h-5 flex items-center justify-center text-secondary-500 hover:opacity-80 text-lg'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              {index !== currentIndex && <span>✦</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
