interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-10 md:mb-16">
      <div className="inline-block bg-[#018dc8]/10 rounded-full px-4 py-1.5 md:px-6 md:py-2 mb-3 md:mb-4">
        <h2 className="text-[#018dc8] text-xl md:text-2xl lg:text-3xl font-bold">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-700 max-w-2xl mx-auto mt-3 md:mt-4 text-sm md:text-base px-2">{subtitle}</p>}
    </div>
  )
}
