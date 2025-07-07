"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionTitle from "./section-title"
import BeforeAfterSlider from "./before-after-slider"

// Sample before/after comparison data for roofing projects
const beforeAfterItems = [
  {
    id: 1,
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop",
    title: "Complete Roof Restoration",
    description: "Full roof repair with new shingles and protective coating",
  },
  {
    id: 2,
    beforeImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1920&auto=format&fit=crop",
    title: "Roof Cleaning & Painting",
    description: "Professional cleaning and fresh protective paint application",
  },
  {
    id: 3,
    beforeImage: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1920&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop",
    title: "Tile Roof Renovation",
    description: "Complete tile replacement and structural reinforcement",
  },
]

export default function Gallery() {
  return (
    <section id="gallery1" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <SectionTitle
          title="Before / After"
          subtitle="Discover the spectacular transformations we've achieved for our roofing clients."
        />

        <div className="mt-12 mb-16">
          <BeforeAfterSlider items={beforeAfterItems} />
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 border border-[#018dc8] text-sm sm:text-base font-medium rounded-md text-[#018dc8] bg-white hover:bg-[#018dc8] hover:text-white transition-colors duration-200"
          >
            View More Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
