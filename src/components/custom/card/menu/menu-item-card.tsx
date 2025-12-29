import { Card } from "@/components/ui/card";
import type { CornMenu } from "@/interface/corn-menu";

export default function MenuItemCard ({item} : {item:CornMenu}) {
    return (
        <div className="border-0 my-2 mt-10 2xl:mt-20 w-[55vw] lg:w-[15vw] 2xl:w-[15vw]">
            <div className="h-[7vh] overflow-visible">
                <img
                    src={item.image}
                    className="h-[14vh] m-auto"
                    alt="img CORN!"
                />
            </div>
            <Card className="h-[28vh] border-0 bg-gray-100 pt-17 px-3 text-center shadow-xl">
                <p className="font-medium text-[clamp(1.2rem,1.3vw,3rem)]">{item.name.en}</p>
                <p className="font-medium text-[clamp(1rem,1.1vw,2.2rem)]">{item.name.th}</p>
                <div className="flex justify-center mt-3 gap-4">
                    <div className="px-2 text-[clamp(1rem,1.1vw,2.2rem)]">
                        <p>stock</p>
                        {item.stock}
                    </div>
                    <div className="h-8 2xl:h-12 w-px mt-3 bg-amber-600/40" />
                    <div className="text-amber-600 px-2 text-[clamp(1rem,1.1vw,2.2rem)]">
                        <p className="text-black">start</p>
                        {item.price} B
                    </div>
                </div>
            </Card>
        </div>
    );
}