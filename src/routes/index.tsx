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
      className="text-white flex justify-between px-[200px] py-[40px] min-h-screen bg-cover bg-gray-950 select-none"
      style={{backgroundImage: "url('/images/bg/bg-corn.png')",}}
    >
      <div className="space-y-5">
        <p className="text-7xl">Corn CORNN!</p>
        <p className="text-6xl">Freshly Grilled Corn. Made to Make You Smile.</p>
        <p className="text-2xl">Crafted with Care. Grilled with Passion.</p>
        <Button className="text-black mr-5 cursor-pointer" onClick={() => navigate({to: "/menu"})}>
          Buy Now
        </Button>
        <button className="cursor-pointer" onClick={() => navigate({to: "/promotion"})}>
          Promotion Event
        </button>
      </div>
      <Card className="bg-primary h-120 w-130 border-0 rounded-2xl overflow-hidden group relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">
        <img
          src="/images/new-corn.png"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          alt="Corn Corn"
        />
        <div className="flex justify-center pb-6">
          <button
            onClick={() => navigate({to: "/menu"})}
            className="bg-black text-white font-bold py-2 px-6 rounded-full mt-4 cursor-pointer absolute bottom-6 -translate-x-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-600"
          >
            Buy Now
          </button>
        </div>
      </Card>
    </div>
  );
}
