import MenuItemCard from "../card/menu/menu-item-card"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import type { CornMenu } from "@/interface/corn-menu"
import { Fadeup } from "../framer-motion/fadeup"
import { useEffect, useState } from "react"

interface MenuCarouselProps {
  items: CornMenu[];
  scroll?: 'Prev' | 'Next';
}

export default function MenuCarousel({ items, scroll= 'Next' }: MenuCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    const interval = setInterval(() => {
      if(scroll == 'Prev') api.scrollPrev();
      if(scroll == 'Next') api.scrollNext();
    }, 4000)

    return () => clearInterval(interval)
  }, [api, scroll])

  return (
    <div className="mx-15">
      <Carousel setApi={setApi} opts={{loop: true}}>
        <CarouselContent>
          {items?.map((item, index) => (
            <CarouselItem key={item.id} className="md:basis-1/3 lg:basis-1/5">
              <Fadeup className="px-6 pb-7" delay={index * 0.2}>
                <MenuItemCard item={item} />
              </Fadeup>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-2 py-2 mt-3">
        {Array.from({ length: items.length }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              current === index ? "bg-amber-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
