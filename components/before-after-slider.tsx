"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BeforeAfterItem {
  id: number
  beforeImage: string
  afterImage: string
  title?: string
  description?: string
}

interface BeforeAfterSliderProps {
  items: BeforeAfterItem[]
}

export default function BeforeAfterSlider({ items }: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentItem = items[currentIndex]

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
    setSliderPosition(50)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
    setSliderPosition(50)
  }

  // Position calculation
  const calculatePosition = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    calculatePosition(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) calculatePosition(e.clientX)
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    calculatePosition(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) calculatePosition(e.touches[0].clientX)
  }

  const handleEnd = () => setIsDragging(false)

  // Global mouse tracking for smooth dragging
  useEffect(() => {
    if (!isDragging) return

    const handleGlobalMouseMove = (e: MouseEvent) => calculatePosition(e.clientX)
    const handleGlobalMouseUp = () => setIsDragging(false)

    document.addEventListener("mousemove", handleGlobalMouseMove)
    document.addEventListener("mouseup", handleGlobalMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
    }
  }, [isDragging])

  if (!items?.length) {
    return <div className="text-center p-8 text-gray-500">No images available</div>
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Image Comparison Area */}
        <div
          ref={containerRef}
          className="relative w-full h-[500px] sm:h-[500px] md:h-[500px] lg:h-[450px] overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleEnd}
          style={{ touchAction: "none" }}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <Image
              src={currentItem.afterImage || "/placeholder.svg"}
              alt="After transformation"
              fill
              className="object-cover"
              priority
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden transition-all duration-75 ease-out"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image
              src={currentItem.beforeImage || "/placeholder.svg"}
              alt="Before transformation"
              fill
              className="object-cover"
              priority
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 transition-all duration-75 ease-out"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#018dc8] to-white opacity-80" />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-[#018dc8] z-30 transition-all duration-75 ease-out"
            style={{
              left: `${sliderPosition}%`,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2), 0 0 0 2px rgba(1, 141, 200, 0.1)",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-[#018dc8]"
            >
              <path d="M8 3L4 7l4 4" />
              <path d="M16 3l4 4-4 4" />
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="21" x2="14" y2="21" />
              <line x1="12" y1="3" x2="12" y2="21" />
            </svg>
          </div>

          {/* Labels with dynamic visibility */}
          <div
            className={`absolute top-6 left-6 z-10 transition-opacity duration-200 ${
              sliderPosition < 25 ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse" />
                Before
              </span>
            </div>
          </div>

          <div
            className={`absolute top-6 right-6 z-10 transition-opacity duration-200 ${
              sliderPosition > 75 ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="bg-[#018dc8]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                After
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation (only if multiple items) */}
      {items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 shadow-md flex items-center justify-center transition-colors border border-gray-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 shadow-md flex items-center justify-center transition-colors border border-gray-200"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      )}
    </div>
  )
}
