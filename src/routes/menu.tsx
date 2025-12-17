import MenuCategoryCard from "@/components/custom/card/menu/menu-category-card.tsx"
import MenuCarousel from "@/components/custom/carousel/menu-carousel"
import InternalErrorScreen from "@/components/custom/screen/internal-error"
import { LoadingScreen } from "@/components/custom/screen/loading-screen"
import type { CornMenu } from "@/interface/corn-menu"
import { requestAPI } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"

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

  return <div className="relative">
    <MenuCategoryCard/>
    <p className="text-red-500 absolute top-97 left-30 text-4xl">𝓶𝓮𝓷𝓾</p>
    <div 
      className="px-25 pb-2 pt-5 w-full bg-cover"
      style={{ backgroundImage: "url('/images/bg/bg-corn3.jpg')"}}
    >
      <MenuCarousel items={data.data}/>
    </div>
  </div>
}
