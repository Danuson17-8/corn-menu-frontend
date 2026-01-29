import { MarqueeImage } from "@/components/custom/framer-motion/marquee/marquee-image"
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

export const cornMenus: CornMenu[] = [
  {
    id: "corn-001",
    name: {
      th: "ข้าวโพดปิ้งเนย",
      en: "Butter Grilled Corn",
    },
    price: 35,
    image: "/images/menu/corn1.png",
    stock: 20,
    description: "ข้าวโพดหวานปิ้งหอม ๆ ทาเนยแท้",
  },
  {
    id: "corn-002",
    name: {
      th: "ข้าวโพดมะนาวพริกเกลือ",
      en: "Lime Corn",
    },
    price: 45,
    image: "/images/menu/corn3.png",
    stock: 15,
    description: "ข้าวโพดราดชีสเข้มข้น",
  },
  {
    id: "corn-003",
    name: {
      th: "ข้าวโพดสไปซี่",
      en: "Spicy Corn",
    },
    price: 40,
    image: "/images/menu/corn2.png",
    stock: 10,
    description: "ข้าวโพดคลุกผงพริกสูตรพิเศษ",
  },
  {
    id: "corn-004",
    name: {
      th: "ข้าวโพดเนยน้ำตาล",
      en: "Sweet Butter Corn",
    },
    price: 50,
    image: "/images/menu/corn4.png",
    stock: 8,
    description: "หวานหอมคาราเมล เคี้ยวเพลิน",
  },
  {
    id: "corn-005",
    name: {
      th: "ข้าวโพดเนยหอม",
      en: "Aromatic Butter Corn",
    },
    price: 30,
    image: "/images/menu/corn5.png",
    stock: 25,
  },
  {
    id: "corn-006",
    name: {
      th: "ข้าวโพดแก้ว",
      en: "Grilled Glass Corn",
    },
    price: 45,
    image: "/images/menu/corn6.png",
    stock: 12,
    description: "ซอสบาร์บีคิวหอม ๆ สไตล์สตรีทฟู้ด",
  },
  {
    id: "corn-006",
    name: {
      th: "ข้าวโพดชีส",
      en: "Cheese Corn",
    },
    price: 40,
    image: "/images/menu/corn4.png",
    stock: 16,
    description: "ชีสหอม ๆ สไตล์สตรีทฟู้ด",
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

  //if (error) return <InternalErrorScreen error={error} />
  //if (isLoading) return <SkeletonMenuPage/>

  return <div className="mx-auto max-w-480 bg-black" >
    <HeroMenuSection />
    <MenuSection data={data?.data ?? cornMenus}/>
    <PromotionTeaser />
    <WhyChooseSection />
    <MarqueeImage images={ImageComment}/>
  </div>
}
