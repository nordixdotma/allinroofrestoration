import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#018dc8] text-white">
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/">
              <Image
                src="/logowhite.png"
                alt="All In Roof Restoration Logo"
                width={120}
                height={60}
                className="h-12 md:h-16 w-auto mb-3 md:mb-4 brightness-0 invert"
              />
            </Link>
            <p className="mt-3 md:mt-4 text-blue-100 text-sm md:text-base">
              Expert roofing, cleaning & painting services. We bring your roof back to life with quality craftsmanship
              you can trust. Our commitment is excellence in every project.
            </p>
            <div className="flex space-x-3 md:space-x-4 mt-4 md:mt-6">
              <SocialLink href="https://www.facebook.com/allinroofrestoration" icon={<Facebook size={16} />} />
              <SocialLink href="https://www.instagram.com/allinroofrestoration" icon={<Instagram size={16} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#gallery1">Gallery</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5 text-blue-100 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Your City, State</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 text-blue-100" />
                <span className="text-sm md:text-base">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5 text-blue-100" />
                <span className="text-sm md:text-base">info@allinroof.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separated copyright section */}
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row md:justify-between text-xs md:text-sm text-blue-100">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} All In Roof Restoration. All rights reserved.
          </p>
          <p className="text-center md:text-left mt-2 md:mt-0">
            Developed and designed by{" "}
            <Link href="https://www.instagram.com/nordix.ma" className="hover:underline" target="_blank">
              <span className="text-white font-bold">NORDIX</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

type SocialLinkProps = {
  href: string
  icon: React.ReactNode
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="bg-white/10 hover:bg-white/20 h-7 w-7 md:h-8 md:w-8 rounded-full flex items-center justify-center transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  )
}

type FooterLinkProps = {
  href: string
  children: React.ReactNode
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="hover:text-blue-200 transition-colors footer-link text-sm md:text-base">
        {children}
      </Link>
    </li>
  )
}
