import { Button } from "@/components/ui/button";
import BackgroundParallax from "../../framer-motion/parrallax/parrallax";
import { RevealText } from "../../framer-motion/reveal-text";
import { useNavigate } from "@tanstack/react-router";
import { Fadeup } from "../../framer-motion/fadeup";

export function PromotionTeaser() {
    const navigate = useNavigate();
    
    return (
        <section className="relative h-350 md:h-370 lg:h-290">
            <BackgroundParallax src="images/menu/corn-promot3.jpg" className="absolute h-full inset-0" />
            <div className="absolute z-10 inset-0 bg-black/87 py-20 md:p-25">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div>
                            <BackgroundParallax from="-10%" src="images/menu/corn-promot3.jpg" className="h-100 w-85" />
                            <BackgroundParallax from="-20%" src="images/menu/corn-promot4.jpg" className="h-100 w-85" />
                        </div>
                        <div className="mt-30 hidden md:block">
                            <BackgroundParallax from="-10%" src="images/menu/corn-promot1.jpg" className="h-100 w-85" />
                            <BackgroundParallax from="-20%" src="images/menu/corn-promot2.jpg" className="h-100 w-85" />
                        </div>
                    </div>
                    <div className="hero-subtitle px-5 sticky top-[20vh] self-start text-white font-medium">
                        <div className="text-white font-serif">
                            <RevealText text="We craft our grilled corn" />
                            <RevealText text="with quality ingredients" delay={0.2} />
                            <RevealText text="for bold flavor and aroma." delay={0.3} />
                        </div>
                        <Fadeup>
                            <p className="text-xl mt-10">Enjoy monthly promotions and exclusive discounts.</p>
                            <Button 
                                onClick={() => navigate({to: "/promotion"})}
                                className="bg-black/10 border-2 p-5 border-white text-white mt-8 cursor-pointer hover:bg-white/20"
                            >
                                Promotion
                            </Button>
                        </Fadeup>
                    </div>
                </div>
            </div>
        </section>
    );
}
