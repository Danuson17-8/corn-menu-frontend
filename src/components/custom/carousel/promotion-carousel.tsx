import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import type { Promotion } from "@/interface/promotion"
import PromotionItemCard from "../card/promotion/promotion-item-card"

export default function PromotionCarousel({ items }: { items: Promotion[] }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="mx-auto">
      <Carousel setApi={setApi} opts={{loop: true}} className="w-300">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={item.id} className="basis-1/3">
              <div className={`p-1 transition-transform duration-300 ${current === index ? "scale-100" : "scale-70 brightness-40"}`}>
                <PromotionItemCard item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
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
