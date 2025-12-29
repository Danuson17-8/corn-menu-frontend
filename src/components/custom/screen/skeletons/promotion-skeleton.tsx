import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPromotionPage() {
  return (
    <div className="relative bg-gray-950 min-h-screen select-none overflow-hidden">
      <div className="relative z-10 py-20 px-5 lg:px-40 space-y-4">
        <Skeleton className="h-[550px] w-full rounded-xl" />
      </div>
    </div>
  );
}
