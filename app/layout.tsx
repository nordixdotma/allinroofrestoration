import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'All in Roof Restoration',
  description: 'Professional roofing services including repair, cleaning, and painting. We bring your roof back to life with quality craftsmanship you can trust. Get your free quote today!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
