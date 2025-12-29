import PromotionCarousel from "@/components/custom/carousel/promotion-carousel"
import InternalErrorScreen from "@/components/custom/screen/internal-error"
import SkeletonPromotionPage from "@/components/custom/screen/skeletons/promotion-skeleton"
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
  if (isLoading || !data?.data) return <SkeletonPromotionPage/>

  return <div className="relative py-20">
    <div
      className="absolute inset-0 bg-cover bg-center blur-sm"
      style={{ backgroundImage: "url('/images/bg/bg-corn2.jpg')" }}
    />
    <div className="relative mx-auto">
      <PromotionCarousel items={data.data} />
    </div>
  </div>

}
