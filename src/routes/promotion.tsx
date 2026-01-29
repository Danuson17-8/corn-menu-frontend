import PromotionSlider from "@/components/custom/slider/slider-promotion"
import type { Promotion } from "@/interface/promotion"
import { requestAPI } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"

export const promotions: Promotion[] = [
  {
    id: "promo-001",
    title: "New Menu Try",
    description: "ลองเมนูใหม่ รับส่วนลดทันที 20 บาท",
    image: "/images/promotion/promo5.jpeg",
    startDate: "2026-02-15",
    endDate: "2026-02-28",
    isActive: true,
    link: "/promotion/new-menu",
  },
  {
    id: "promo-002",
    title: "Share & Save",
    description: "แชร์ร้านลงโซเชียล รับส่วนลด 15% เมื่อแสดงโพสต์ที่ร้าน",
    image: "/images/promotion/promo4.jpeg",
    startDate: "2026-02-01",
    endDate: "2026-03-01",
    isActive: true,
    link: "/promotion/share-save",
  },
  {
    id: "promo-003",
    title: "Butter Corn Day",
    description: "ซื้อข้าวโพดเนย รับส่วนลดพิเศษเฉพาะวันนี้",
    image: "/images/promotion/promo3.jpeg",
    startDate: "2026-02-01",
    endDate: "2026-02-07",
    isActive: true,
    link: "/promotion/butter-corn-day",
  },
  {
    id: "promo-004",
    title: "Cheese Lover",
    description: "เมนูชีสทุกชนิด ลดทันที 10%",
    image: "/images/promotion/promo2.jpeg",
    startDate: "2026-02-05",
    endDate: "2026-02-12",
    isActive: true,
    link: "/promotion/cheese-lover",
  },
  {
    id: "promo-005",
    title: "Sweet Corn Week",
    description: "ข้าวโพดหวานทุกเมนู ราคาพิเศษตลอดสัปดาห์",
    image: "/images/promotion/promo1.jpg",
    startDate: "2026-02-10",
    endDate: "2026-02-17",
    isActive: true,
    link: "/promotion/sweet-corn-week",
  },
];

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  const { 
    data, 
    //isLoading, 
    //error 
  } = useQuery({
    queryKey: ["promotion"],
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    queryFn: () =>
      requestAPI<Promotion[]>({
        method: "GET",
        url: `/promotion`,
        throwHTTPError: true,
      })
  })

  //if (error) return <InternalErrorScreen error={error}/>
  //if (isLoading || !data?.data) return <SkeletonPromotionPage/>

  return <PromotionSlider items={data?.data ?? promotions}/>
}
