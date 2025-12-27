import PromotionCategoryCard from "@/components/custom/card/promotion/promotion-category-card"
import PromotionCarousel from "@/components/custom/carousel/promotion-carousel"
import InternalErrorScreen from "@/components/custom/screen/internal-error"
import { LoadingScreen } from "@/components/custom/screen/loading-screen"
import type { Promotion } from "@/interface/promotion"
import { requestAPI } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["promoton"],
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    queryFn: () =>
      requestAPI<Promotion[]>({
        method: "GET",
        url: `/promotion`,
        throwHTTPError: true,
      })
  })

  if (error) return <InternalErrorScreen error={error}/>
  if (isLoading || !data?.data) return <LoadingScreen open={true}/>

  return <div className="relative bg-gray-950 min-h-screen select-none overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: "url('/images/bg/bg-corn2.jpg')" }}
      />
      <PromotionCategoryCard />
      <div className="absolute z-10 inset-0 top-40 lg:top-15 md:px-10 px-5 lg:px-50 mx-auto">
        <PromotionCarousel items={data.data} />
      </div>
  </div>
}
