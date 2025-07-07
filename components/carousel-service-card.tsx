"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CarouselServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  link: string
  backgroundImage: string
  isCurrent?: boolean
}

export default function CarouselServiceCard({
  icon,
  title,
  description,
  link,
  backgroundImage,
  isCurrent = false,
}: CarouselServiceCardProps) {
  return (
    <div
      className={cn(
        "relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden transition-all duration-500 group",
        isCurrent ? "opacity-100 scale-100" : "opacity-70 scale-95 hover:opacity-100 hover:scale-100",
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 transition-opacity duration-500",
          isCurrent ? "opacity-70" : "opacity-90 group-hover:opacity-70",
        )}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center p-4 md:p-6 text-white z-10">
        <div
          className={cn(
            "mb-3 md:mb-4 p-2 md:p-3 rounded-full bg-[#018dc8]/20 transition-all duration-500",
            isCurrent ? "scale-100" : "scale-90 group-hover:scale-100",
          )}
        >
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{title}</h3>
        <p className="text-white/90 mb-3 md:mb-4 max-w-xs mx-auto text-sm md:text-base">{description}</p>

        {isCurrent && (
          <Link
            href={link}
            className="mt-1 md:mt-2 inline-flex items-center justify-center px-5 md:px-6 py-1.5 md:py-2 rounded-md bg-[#018dc8] text-white font-medium hover:bg-[#018dc8]/90 transition-all transform hover:scale-105 text-sm md:text-base"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  )
}
