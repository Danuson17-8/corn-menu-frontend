import { ProductCard } from "@/components/custom/card/card-product";
import { Fadeup } from "@/components/custom/framer-motion/fadeup";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  return (
    <>
      <div className="bg-gray-950 text-white relative h-screen lg:h-[190vh]">
        <div className="hero-container absolute left-[10%] z-10 flex min-h-screen items-center px-12">
          <div className="hero-content max-w-xl">
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
      <div className="bg-gray-950 min-h-screen text-white py-20 px-5 lg:px-50 space-y-25">
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
        <Fadeup className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-end gap-10">
          <span className="leading-8">
            Freshly grilled sweet corn made from carefully selected ingredients.<br/>
            Slowly grilled over open flame for a rich, smoky aroma.<br/>
            Coated with our signature sauce for perfectly balanced flavor.<br/>
            Available in classic and spicy options to suit every taste.<br/>
            A customer favorite, often shared across social media.<br/>
          </span>
          <img src="images/product.jpeg" alt="Product" className="max-h-50" />
        </Fadeup>
        <Fadeup className="text-center font-serif hero-description text-primary">
          Smoky, Sweet & Delicious
          <p className="text-lg text-white/50">Corn You Feel It?</p>
        </Fadeup>
      </div>
    </>
  )
}
