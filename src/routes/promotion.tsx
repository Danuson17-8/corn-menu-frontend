import InternalErrorScreen from "@/components/custom/screen/internal-error"
import SkeletonPromotionPage from "@/components/custom/screen/skeletons/promotion-skeleton"
import PromotionSlider from "@/components/custom/slider/slider-promotion"
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

  return <PromotionSlider items={data.data}/>

}
