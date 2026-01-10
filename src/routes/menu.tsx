import { MarqueeImage } from "@/components/custom/framer-motion/marquee/marquee-image"
import InternalErrorScreen from "@/components/custom/screen/internal-error"
import SkeletonMenuPage from "@/components/custom/screen/skeletons/menu-skeleton"
import type { CornMenu } from "@/interface/corn-menu"
import { requestAPI } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { PromotionTeaser } from "@/components/custom/sections/menu/promotion-teaser"
import { WhyChooseSection } from "@/components/custom/sections/menu/whychoose"
import { MenuSection } from "@/components/custom/sections/menu/menu-section"
import HeroMenuSection from "@/components/custom/sections/menu/hero-menu-section"

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

  return <div className="mx-auto max-w-480 bg-black" >
    <HeroMenuSection />
    <MenuSection data={data.data}/>
    <PromotionTeaser />
    <WhyChooseSection />
    <MarqueeImage images={ImageComment}/>
  </div>
}
