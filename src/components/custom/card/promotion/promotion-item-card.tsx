import { Card, CardTitle } from "@/components/ui/card";
import type { Promotion } from "@/interface/promotion";

export default function PromotionItemCard({item}: {item:Promotion}) {
    return (
        <Card 
            className="h-[500px] border-0"
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <CardTitle className="text-4xl pt-4 pl-4 text-white shadow-2xl">
                {item.title}
            </CardTitle>
        </Card>
    );
}