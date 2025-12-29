import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonMenuPage() {
    return (
        <div className="bg-gray-950 overflow-hidden">
            <div className="w-full overflow-hidden">
                <Skeleton className="h-[300px] w-full rounded-xl" />
            </div>
            <div className="py-15 bg-cover flex flex-col items-center space-y-4">
                <Skeleton className="h-4 w-[30%] rounded-full" />
                <Skeleton className="h-12 w-[20%] rounded-full" />
                <Skeleton className="h-4 w-[25%] rounded-full" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-[250px]">
                    <Skeleton className="h-[125px] w-full rounded-xl" />
                    <Skeleton className="h-4 w-[70%] mt-2 rounded-full" />
                    <Skeleton className="h-4 w-[50%] mt-1 rounded-full" />
                </div>
                ))}
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-40 mt-20 mb-10">
                <Skeleton className="h-[37vh] w-[300px] rounded-xl" />
                <div className="space-y-3">
                <Skeleton className="h-8 w-[250px] rounded-full" />
                <Skeleton className="h-6 w-[200px] rounded-full" />
                <Skeleton className="h-6 w-[180px] rounded-full" />
                <Skeleton className="h-6 w-[220px] rounded-full" />
                <Skeleton className="h-6 w-[210px] rounded-full" />
                </div>
            </div>
        </div>
    );
}
