import type { CornMenu } from "@/interface/corn-menu";
import MenuCarousel from "../../carousel/menu-carousel";
import { Fadeup } from "../../framer-motion/fadeup";
import BackgroundParallax from "../../framer-motion/parrallax/parrallax";

export function MenuSection({data}: {data: CornMenu[];}) {
    return (
        <BackgroundParallax
            from="-10%"
            src="images/bg/bg-corn10.jpg"
            className="h-250"
        >
            <div className="mt-50">
                <Fadeup className="text-center text-white/70 text-lg">
                    <p className="text-sm">Grilled Fresh to Order</p>
                    <p className="text-red-500 text-5xl">𝓶𝓮𝓷𝓾</p>
                    <p>Top Selling Products for you</p>
                </Fadeup>
                <MenuCarousel scroll='Prev' items={data}/>
            </div>
        </BackgroundParallax>
    );
}