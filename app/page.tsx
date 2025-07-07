import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatedContact from "@/components/floated-contact"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import HeroSection from "@/components/hero-section"
import Gallery from "@/components/gallery"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <HeroSection />

        <AboutUs />

        <Services />

        <Gallery
          id="gallery1"
          title="Our Recent Projects"
          images={[
            "https://source.unsplash.com/400x300/?roof,repair1",
            "https://source.unsplash.com/400x300/?roof,repair2",
            "https://source.unsplash.com/400x300/?roof,repair3",
          ]}
        />

        <Testimonials />
      </main>

      <Footer />
      <FloatedContact />
    </div>
  )
}
