import * as React from "react"
import MenuItemCard from "../card/menu/menu-item-card"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import type { CornMenu } from "@/interface/corn-menu"
import { Fadeup } from "../framer-motion/fadeup"

export default function MenuCarousel({ items }: { items: CornMenu[] }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  //const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    //setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="mx-auto">
      <Carousel setApi={setApi} opts={{loop: true}}>
        <CarouselContent>
          {items?.map((item, index) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
              <Fadeup className="px-5 pb-10" delay={index * 0.2}>
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
