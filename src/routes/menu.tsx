import MenuCategoryCard from "@/components/custom/card/menu/menu-category-card.tsx"
import MenuCarousel from "@/components/custom/carousel/menu-carousel"
import { Fadeup } from "@/components/custom/framer-motion/fadeup"
import BackgroundParallax from "@/components/custom/framer-motion/hover-Interaction"
import { MarqueeImage } from "@/components/custom/framer-motion/marquee/marquee-image"
import InternalErrorScreen from "@/components/custom/screen/internal-error"
import SkeletonMenuPage from "@/components/custom/screen/skeletons/menu-skeleton"
import type { CornMenu } from "@/interface/corn-menu"
import { requestAPI } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { useScroll } from "framer-motion"
import { Flag, HandCoins, Store, Wheat } from "lucide-react"

const ImageComment: string[] = [
  "images/comments/comment1.png",
  "images/comments/comment2.png",
  "images/comments/comment3.png",
  "images/comments/comment4.png",
  "images/comments/comment5.png",
  "images/comments/comment6.png",
];


export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  const { scrollYProgress } = useScroll();
  const { data, isLoading, error } = useQuery({
    queryKey: ["menu_corn"],
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    queryFn: () =>
      requestAPI<CornMenu[]>({
        method: "GET",
        url: `/menu/corn`,
        throwHTTPError: true,
      })
  })

  if (error) return <InternalErrorScreen error={error} />
  if (isLoading || !data?.data) return <SkeletonMenuPage/>

  return <BackgroundParallax progress={scrollYProgress} className="mx-auto max-w-480" src="images/bg/bg-corn6.jpeg" >
    <MenuCategoryCard/>
    <div className="pb-20 pt-[65vh] space-y-85">
      <MenuCarousel items={data.data}/>
      <div
        className="bg-cover min-h-[110vh] pt-30"
        style={{backgroundImage: "url('images/bg/bg-corn10.jpg')"}}
      >
          <Fadeup className="text-center text-white/70 text-lg">
            <p className="text-sm">Grilled Fresh to Order</p>
            <p className="text-red-500 text-5xl">𝓶𝓮𝓷𝓾</p>
            <p>Top Selling Products for you</p>
          </Fadeup>
          <MenuCarousel scroll='Prev' items={data.data}/>
      </div>
      <Fadeup className="max-h-[50vh] my-30 bg-cover min-h-[60vh] flex flex-col justify-center items-center">
        <div className="text-white backdrop-blur-[3px] p-5 rounded-2xl bg-black/50 space-y-10 font-serif">
          <Fadeup className="text-[clamp(1.5rem,3vw,4rem)]" delay={0.3}>Why Choose CORN CORNN</Fadeup>
          <div className="space-y-4 text-[clamp(1.1rem,1.4vw,4rem)]">
            <Fadeup delay={0.4} className="feature-item">
              <Wheat className="bg-amber-100 icon-feature" />
              Quality Ingredients
            </Fadeup>
            <Fadeup delay={0.6} className="feature-item">
              <Store className="bg-green-100 icon-feature" />
              40 Branches Nationwide
            </Fadeup>
            <Fadeup delay={0.8} className="feature-item">
              <Flag className="bg-pink-100 icon-feature" />
              Monthly Promotions
            </Fadeup>
            <Fadeup delay={1} className="feature-item">
              <HandCoins className="bg-blue-100 icon-feature" />
              Great Value, Accessible to All
            </Fadeup>
          </div>
        </div>
      </Fadeup>
    </div>
    <MarqueeImage images={ImageComment}/>
  </BackgroundParallax>
}
