import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import type { Promotion } from "@/interface/promotion";
import CardContent from "@mui/material/CardContent";

interface PromotionItemCardProps {
    item: Promotion;
}

export default function PromotionItemCard({item}: PromotionItemCardProps) {
    return (
        <Card 
            className="relative border-none w-[90vw] lg:w-[80vw] h-[65vh] lg:h-[80vh] transition-transform duration-1000"
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
            <CardFooter className="absolute bottom-4 right-4 text-white text-sm">
                {item.startDate} - {item.endDate}
            </CardFooter>
        </Card>
    );
}