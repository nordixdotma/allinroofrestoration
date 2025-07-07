"use client"

import { useRef, useState } from "react"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import SectionTitle from "./section-title"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const testimonials = [
    {
      quote:
        "All In Roof Restoration did an amazing job on our roof repair. The team was professional, efficient, and the quality of work exceeded our expectations. Our roof looks brand new!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      name: "John Smith",
      position: "Homeowner",
    },
    {
      quote:
        "I was impressed with their roof cleaning service. They removed years of moss and stains, and now our house looks fantastic. The team was courteous and completed the work on time.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      name: "Sarah Johnson",
      position: "Property Owner",
    },
    {
      quote:
        "The roof painting service was exceptional. They matched the color perfectly and the finish looks professional. Great value for money and excellent customer service throughout.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      name: "Mike Davis",
      position: "Business Owner",
    },
    {
      quote:
        "Fast, reliable, and high-quality work. They fixed our leak problem quickly and provided excellent maintenance tips. I would definitely recommend them to anyone needing roof services.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      name: "Lisa Wilson",
      position: "Satisfied Customer",
    },
    {
      quote:
        "Professional team with great attention to detail. They transformed our old roof and the results are outstanding. The project was completed on schedule and within budget.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      name: "Robert Brown",
      position: "Homeowner",
    },
    {
      quote:
        "Excellent service from start to finish. The team was knowledgeable, friendly, and delivered exactly what they promised. Our roof has never looked better!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      name: "Jennifer Taylor",
      position: "Happy Customer",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#007BFF]/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#007BFF]/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-4 relative z-10">
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Read what our satisfied customers have to say about our roofing services"
        />

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={12}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            loop={true}
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex)
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} isActive={index === activeIndex} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-slide {
          transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          transform: scale(0.95);
          height: auto;
          padding: 20px 0;
        }
        
        .testimonial-swiper .swiper-slide-active {
          transform: scale(1);
          z-index: 2;
        }
        
        @media (max-width: 767px) {
          .testimonial-swiper .swiper-slide {
            opacity: 1 !important;
          }
        }
        
        @media (min-width: 768px) {
          .testimonial-swiper .swiper-slide {
            opacity: 0.4;
            transform: scale(0.85);
          }
          
          .testimonial-swiper .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
          }
          
          .testimonial-swiper .swiper-slide-prev,
          .testimonial-swiper .swiper-slide-next {
            opacity: 0.7;
            transform: scale(0.9);
          }
          
          .testimonial-swiper .swiper-slide:hover {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

const TestimonialCard = ({ testimonial, isActive }: { testimonial: any; isActive: boolean }) => {
  const { quote, image, name, position } = testimonial

  return (
    <div className="relative px-2 py-1 flex flex-col items-center h-full">
      <div className="rounded-2xl bg-gradient-to-br from-black to-gray-900 text-white p-5 shadow-lg relative mb-6 w-full h-[200px] flex flex-col">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -ml-10 -mb-10"></div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/10">Review</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#018dc8] fill-[#018dc8]" />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex-1 overflow-hidden">
          <Quote className="h-8 w-8 text-white/20 rotate-180 absolute -left-1 -top-1" />
          <div className="pl-7 pt-2">
            {isActive ? (
              <AnimatedQuote quote={quote} />
            ) : (
              <p className="text-sm leading-relaxed font-light line-clamp-4">{quote}</p>
            )}
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-gray-900"></div>
      </div>

      <div className="flex flex-col items-center text-center mt-auto">
        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-[#018dc8]/30 shadow-md mb-2">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=150&width=150"
            }}
          />
        </div>
        <div>
          <motion.h3
            className="font-semibold text-black"
            initial={isActive ? { opacity: 0, y: 5 } : {}}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="text-xs text-gray-600"
            initial={isActive ? { opacity: 0, y: 5 } : {}}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {position}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

const AnimatedQuote = ({ quote }: { quote: string }) => {
  return (
    <motion.p className="text-sm leading-relaxed font-light">
      {quote.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: 5,
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.03 * index,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  )
}
