import { Card } from "@/components/ui/card";
import type { CornMenu } from "@/interface/corn-menu";

export default function MenuItemCard ({item} : {item:CornMenu}) {
    return (
        <div className="flex-1 border-0 my-2 mt-10 w-50">
            <div className="relative flex h-15 overflow-visible">
                <img
                    src={item.image}
                    className="h-[120px] m-auto"
                    alt="img CORN!"
                />
            </div>
            <Card className="h-50 border-0 bg-gray-100 pt-17 px-3 text-center shadow-xl">
                <p className="font-medium text-xl">{item.name.en}</p>
                <p className="font-medium text-sm">{item.name.th}</p>
                <div className="flex justify-center mt-3 gap-4">
                    <div className="px-2">
                        <p>stock</p>
                        {item.stock}
                    </div>
                    <div className="h-8 w-px mt-3 bg-amber-600/40" />
                    <div className="text-amber-600 px-2">
                        <p className="text-black">start</p>
                        {item.price} B
                    </div>
                </div>
            </Card>
        </div>
    );
}