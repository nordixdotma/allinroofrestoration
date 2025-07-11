"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Wrench, Brush, Shield, CheckCircle } from "lucide-react"
import CarouselServiceCard from "./carousel-service-card"
import SectionTitle from "./section-title"

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayOptions = { delay: 4000, stopOnInteraction: false }
  const autoplayPlugin = useRef(Autoplay(autoplayOptions))

  const services = [
    {
      icon: <Wrench className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      title: "Roof Repair",
      description: "Professional roof repair services to fix leaks, damaged shingles, and structural issues.",
      link: "/services#repair",
      backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop",
    },
    {
      icon: <Brush className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      title: "Roof Cleaning",
      description: "Comprehensive roof cleaning services to remove moss, algae, debris, and stains.",
      link: "/services#cleaning",
      backgroundImage: "https://images.unsplash.com/photo-1635424710918-d5c138981922?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      title: "Roof Painting",
      description: "Professional roof painting and coating services using premium materials.",
      link: "/services#painting",
      backgroundImage: "https://plus.unsplash.com/premium_photo-1683140838720-0757ec5dfe06?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      title: "Maintenance",
      description: "Regular maintenance programs to keep your roof in optimal condition.",
      link: "/services#maintenance",
      backgroundImage: "hhttps://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [autoplayPlugin.current],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive roofing solutions to keep your property protected and looking its best"
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-2 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <CarouselServiceCard {...service} isCurrent={index === currentIndex} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
