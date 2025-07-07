"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      // Calculate viewport height minus mobile browser toolbar
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
      setViewportHeight(window.innerHeight)
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)
    window.addEventListener("orientationchange", updateHeight)

    return () => {
      window.removeEventListener("resize", updateHeight)
      window.removeEventListener("orientationchange", updateHeight)
    }
  }, [])

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height: "calc(var(--vh, 1vh) * 100)",
        minHeight: "100vh",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://source.unsplash.com/1600x900/?roof,construction)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-white">
        <div className="text-left px-4 md:px-8 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            All In Roof Restoration
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed text-gray-100"
          >
            We bring your roof back to life—repair, clean, paint—with quality you can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#018dc8] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Contact Us
            </Link>

            <Link
              href="tel:+11234567890"
              className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm text-[#018dc8] font-semibold rounded-lg hover:bg-white/60 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Call Now: (123) 456‑7890
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
