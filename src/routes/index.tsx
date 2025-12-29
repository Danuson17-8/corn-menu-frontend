import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <div
      className="hero-wrapper bg-gray-950 text-white"
      style={{ backgroundImage: "url('/images/bg/bg-corn.png')" }}
    >
      <div className="hero-container sticky top-30">
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
        <Card className="hidden md:block bg-primary h-[480px] w-[400px] border-0 rounded-2xl overflow-hidden group relative transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">
          <img
            src="/images/new-corn.png"
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            alt="Corn Corn"
          />
          <button
            onClick={() => navigate({ to: "/menu" })}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black cursor-pointer text-white font-bold py-2 px-6 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-600"
          >
            Buy Now
          </button>
        </Card>
      </div>
    </div>
  );
}

