import { MarketingCard } from "@/components/custom/card/card-mareting";
import { ProductCard } from "@/components/custom/card/card-product";
import { Fadeup } from "@/components/custom/framer-motion/fadeup";
import BackgroundParallax from "@/components/custom/framer-motion/hover-Interaction";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { useScroll } from "framer-motion";

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  return (
    <BackgroundParallax progress={scrollYProgress} src="images/bg/bg-corn9.jpeg">
      <div className=" text-white relative h-screen lg:h-[150vh]">
        <div className="hero-container absolute left-[5%] top-[5%] lg:left-[10%] z-10 flex min-h-screen">
          <div className="hero-content">
            <p className="hero-title">Corn CORNN!</p>
            <p className="hero-subtitle">
              Freshly Grilled Corn.<br />
              Made to Make<br />
              You Smile.
            </p>
            <p className="hero-description">
              Crafted with Care. Grilled with Passion.
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
      </div>
      <div className="relative min-h-screen bg-black/90 text-white py-20 px-5 lg:px-50 space-y-25">
        <Fadeup className="flex justify-between items-center font-serif hero-description">
          <div>
            <p className="hero-subtitle">Grilled Corn</p>
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-10 bg-primary"/>
              <p>Cron Cronn</p>
            </div>
          </div>
          <p className="text-white/50">Perfectly Grilled Corn</p>
        </Fadeup>
        <MarketingCard image="images/product.jpeg" className="max-h-200 max-w-250 mx-auto">
          <p className="font-serif hero-description italic">
            Grilled to Perfection
          </p>
          <span className="text-black/50">
              Freshly grilled sweet corn made from carefully selected ingredients.<br/>
              Slowly grilled over open flame for a rich, smoky aroma.<br/>
              Coated with our signature sauce for perfectly balanced flavor.<br/>
              Available in classic and spicy options to suit every taste.<br/>
              A customer favorite, often shared across social media.<br/>
          </span>
        </MarketingCard>
        <Fadeup className="text-center font-serif hero-description text-primary">
          Smoky, Sweet & Delicious
          <p className="text-lg text-white/50">Corn You Feel It?</p>
        </Fadeup>
      </div>
    </BackgroundParallax>
  )
}
