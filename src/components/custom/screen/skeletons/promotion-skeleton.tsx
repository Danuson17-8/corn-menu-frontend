import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPromotionPage() {
  return (
    <div className="relative bg-gray-950 min-h-screen select-none overflow-hidden">
      <div className="px-5 py-10">
        <Skeleton className="h-screen w-full rounded-xl" />
      </div>
    </div>
  );
}
