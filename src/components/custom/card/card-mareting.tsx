import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarketingCardProps {
    className?: string;
    children: ReactNode;
    image: string;
}
export const MarketingCard = ({className, children, image}: MarketingCardProps) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 bg-white shadow-2xl", className)}>
            <img src={image} alt="Image" className="object-cover"/>
            <div className="p-5">
                <div className="ml-auto h-6 w-6 border-r-3 border-t-3 border-primary "/>
                <div className="m-5 text-black text-sm">
                    {children}
                </div>
            </div>
        </div>
    )
}