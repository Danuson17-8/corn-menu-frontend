import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import type { Promotion } from "@/interface/promotion"
import PromotionItemCard from "../card/promotion/promotion-item-card"
import { useEffect, useState } from "react"

export default function PromotionCarousel({ items }: { items: Promotion[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="mx-auto">
      <Carousel setApi={setApi} opts={{loop: true}}>
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id}>
              <PromotionItemCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-2 py-2 mt-3">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              current === index ? "bg-amber-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
