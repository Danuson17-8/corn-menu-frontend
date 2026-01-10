import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ProductCard } from "../../card/card-product";
import BackgroundParallax from "../../framer-motion/parrallax/parrallax";

const heroContent = {
  title: "Corn CORNN!",
  subtitle: ["Freshly Grilled Corn.", "Made to Make.", "You Smile."],
  description: "Crafted with Care. Grilled with Passion."
}

export function HeroHomeSection() {
    const navigate = useNavigate();

    return (
        <BackgroundParallax src="images/bg/bg-corn1.jpeg" from="-10%" to="10%">
            <section className="relative h-screen lg:h-[150vh] text-white">
                <div className="hero-container absolute left-[5%] top-[5%] lg:left-[10%] z-10">
                    <div className="hero-content">
                        <h1 className="hero-title">{heroContent.title}</h1>
                        <h2 className="hero-subtitle w-130">
                            {heroContent.subtitle.map((text, index) => (
                                <p key={index} className="block">
                                    {text}
                                </p>
                            ))}
                        </h2>
                        <p className="hero-description">
                            {heroContent.description}
                        </p> 
                        <div className="flex items-center gap-5 mt-4">
                            <Button
                                className="cursor-pointer text-black"
                                onClick={() => navigate({ to: "/menu" })}
                            >
                                Buy Now
                            </Button>
                            <button
                                className="cursor-pointer"
                                onClick={() => navigate({ to: "/promotion" })}
                            >
                                Promotion Event
                            </button>
                        </div>
                    </div>
                </div>
                <ProductCard/>
            </section>
        </BackgroundParallax>
    );
}