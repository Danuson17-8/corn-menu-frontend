import type { Promotion } from "@/interface/promotion"
import { useEffect, useState } from "react"
import MarqueeText from "../framer-motion/marquee/marquee-text"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PromotionSlider({ items }: { items: Promotion[] }) {
  const [index, setIndex] = useState(0)

  const total = items.length

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", handleKey)
    const interval = setInterval(() => {
      next()
    }, 6000)

    return () => {
      window.removeEventListener("keydown", handleKey)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      
      <div className="grain pointer-events-none fixed inset-0 z-10" />

      <header className="pointer-events-none absolute lg:fixed lg:top-15 left-0 z-20 flex w-full items-center justify-between px-8 py-6 gap-3">
        <h1 className="pointer-events-auto font-serif text-xl tracking-widest uppercase">
          Promotion
        </h1>
        <div className="flex gap-2">
          <p className="pointer-events-auto font-serif text-lg uppercase tracking-wider text-white/50">
            Special
          </p>
          <div className="h-6 bg-white/50 w-0.5"/>
          <MarqueeText
              className="overflow-hidden pointer-events-auto text-lg max-w-80 uppercase tracking-wider hover:text-white" 
              text={`สั่งซื้อภายในเดือนนี้ รับทันทีสิทธิ์ซื้อ "The Golden Harvest Roll" ในราคาพิเศษเพียง 30 บาท (จากปกติ 50 บาท) `}
              speed={30}
          />
        </div>
      </header>

      {items.map((item, i) => (
        <article
          key={i}
          className={`absolute inset-0 transition-opacity duration-1500 ease-out
            ${i === index ? "opacity-100 z-0" : "opacity-0"}
          `}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`h-full w-full object-cover transition-transform duration-8000 ease-out ${i === index ? "scale-100" : "scale-120"}`}
          />

          <div className="pointer-events-none absolute inset-0 z-5 bg-linear-to-t from-black/80 via-black/40 to-transparent lg:bg-linear-to-r"/>

          <div
            className={`absolute z-10 bottom-[10%] left-[10%] max-w-xl transition-all duration-700
              ${i === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}
          >
            <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-white/60">
              Exclusive for Members
            </span>

            <h2 className="hero-subtitle leading-tight">
              {item.title}
              <span className="block italic">{item.description}</span>
            </h2>

            <div className="mt-6 flex w-70 gap-8 border-t border-white/20 pt-4 text-sm">
              <div>
                <span className="block text-xs uppercase text-white/50">
                  Start Date
                </span>
                {item.startDate}
              </div>
              <div>
                <span className="block text-xs uppercase text-white/50">
                  End Date
                </span>
                {item.endDate}
              </div>
            </div>
          </div>
        </article>
      ))}

      <nav className="absolute bottom-[82%] lg:bottom-[10%] right-10 z-20 flex items-center gap-6">
        <button
          onClick={prev}
          className="nav-btn"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="nav-btn"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </nav>
    </section>
  )
}
