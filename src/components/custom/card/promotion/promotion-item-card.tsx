import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import type { Promotion } from "@/interface/promotion";
import CardContent from "@mui/material/CardContent";
import MarqueeText from "../../framer-motion/marquee/marquee-text";

interface PromotionItemCardProps {
    item: Promotion;
}

export default function PromotionItemCard({item}: PromotionItemCardProps) {
    return (
        <Card 
            className="relative border-none w-[90vw] lg:w-[75vw] h-[65vh] lg:h-[80vh] transition-transform duration-1000 overflow-hidden"
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <CardTitle className="text-4xl lg:text-6xl pt-4 pl-4 text-white">
                {item.title}
            </CardTitle>
            <CardContent className="text-white  text-2xl">
                {item.description}
            </CardContent>
            <CardFooter className="absolute bottom-6 right-4 text-white text-sm">
                {item.startDate} - {item.endDate}
            </CardFooter>
            <MarqueeText
                className="absolute bottom-0 text-[3vh] w-full py-1 bg-gray-900 text-gray-400 overflow-hidden text-sm" 
                text={`Special Future Promotion: สั่งซื้อภายในเดือนนี้ รับทันทีสิทธิ์ซื้อ "The Golden Harvest Roll" ในราคาพิเศษเพียง 30 บาท (จากปกติ 50 บาท) หรือซื้อยกเซต 3 ห่อ รับฟรี! เครื่องดื่มสมุนไพรเย็นชื่นใจ 1 แก้ว`}
            />
        </Card>
    );
}