import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPromotionPage() {
  return (
    <div className="relative bg-gray-950 min-h-screen select-none overflow-hidden">
      <div className="relative z-10 p-10 space-y-4">
        <Skeleton className="h-8 w-[20%] rounded-full" />
        <Skeleton className="h-6 w-[10%] rounded-full" />
        <Skeleton className="h-[550px] w-full rounded-xl" />
      </div>
    </div>
  );
}
