import MenuCategoryCard from "@/components/custom/card/menu/menu-category-card.tsx"
import MenuCarousel from "@/components/custom/carousel/menu-carousel"
import { Fadeup } from "@/components/custom/framer-motion/fadeup"
import InternalErrorScreen from "@/components/custom/screen/internal-error"
import { LoadingScreen } from "@/components/custom/screen/loading-screen"
import type { CornMenu } from "@/interface/corn-menu"
import { requestAPI } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Flag, HandCoins, Store, Wheat } from "lucide-react"

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
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
  if (isLoading || !data?.data) return <LoadingScreen open={true}/>

  return <>
    <MenuCategoryCard/>
    <div
      className="py-15 bg-cover"
      style={{ backgroundImage: "url('/images/bg/bg-corn3.jpg')"}}
    >
      <Fadeup className="text-center text-gray-500 text-lg">
        <p className="text-sm">Grilled Fresh to Order</p>
        <p className="text-red-500 text-5xl">𝓶𝓮𝓷𝓾</p>
        <p>Top Selling Products for you</p>
      </Fadeup>
      <MenuCarousel items={data.data}/>
      <div  className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-40 mt-20 mb-10">
        <Fadeup>
          <img src="images/promotion/promo1.jpg" alt="image" className="h-[37vh]" />
        </Fadeup>
        <div className="text-[clamp(1.1rem,1.4vw,4rem)] space-y-3.5">
          <Fadeup className="text-[clamp(1.5rem,3vw,4rem)] font-bold" delay={0.3}>Why Choose CORN CORNN</Fadeup>
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
    </div>
  </>
}
