"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import SectionTitle from "./section-title"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <SectionTitle title="About All In Roof Restoration" />
            <div className="text-gray-600">
              <motion.p
                className={`mb-6 text-sm md:text-base leading-relaxed text-justify transition-all duration-1000 ease-out delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                All In Roof Restoration brings your roof back to life with quality craftsmanship you can trust. We
                specialize in comprehensive repair, cleaning, and painting services.
              </motion.p>
              <motion.p
                className={`mb-6 text-sm md:text-base leading-relaxed text-justify transition-all duration-1000 ease-out delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Our experienced team combines traditional techniques with modern materials, ensuring every project meets
                the highest standards of quality and durability.
              </motion.p>
              <motion.p
                className={`text-sm md:text-base leading-relaxed text-justify transition-all duration-1000 ease-out delay-600 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                We provide complete solutions from consultation to maintenance, keeping your roof in excellent condition
                year-round.
              </motion.p>
            </div>

            <motion.div
              className={`mt-8 text-lg md:text-xl font-semibold transition-all duration-1000 ease-out delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-gray-800">Built with </span>
              <span className="text-[#018dc8]">Excellence & Trust</span>
            </motion.div>

            <motion.div
              className={`h-1 bg-gradient-to-r from-[#018dc8]/60 to-[#018dc8] rounded-full mt-8 transition-all duration-1000 ease-out delay-800 ${
                isVisible ? "w-24 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>

          <motion.div
            className={`md:col-span-2 aspect-square bg-gray-900 rounded-lg overflow-hidden relative transition-all duration-1200 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
            }`}
          >
            <Image
              src="/logo.png"
              alt="All In Roof Restoration Team"
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />

            <motion.div
              className={`absolute -top-4 -left-4 w-16 h-16 border-2 border-[#018dc8]/40 rounded-full transition-all duration-1000 ease-out delay-1000 ${
                isVisible ? "opacity-30 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"
              }`}
            />
            <motion.div
              className={`absolute -bottom-4 -right-4 w-12 h-12 border-2 border-[#018dc8]/40 rounded-full transition-all duration-1000 ease-out delay-1200 ${
                isVisible ? "opacity-30 scale-100 rotate-0" : "opacity-0 scale-50 rotate-45"
              }`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
