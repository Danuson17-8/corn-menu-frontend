import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonMenuPage() {
  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden text-white">
      <div className="w-full">
        <Skeleton className="h-[65vh] w-full rounded-none bg-white/5" />
      </div>
      <div className="mx-auto mt-16 flex max-w-8xl flex-wrap justify-center gap-6 px-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-60 space-y-2">
            <Skeleton className="h-35 w-full rounded-xl bg-white/10" />
            <Skeleton className="h-4 w-[70%] rounded-full bg-white/20" />
            <Skeleton className="h-4 w-[50%] rounded-full bg-white/15" />
          </div>
        ))}
      </div>
      <div className="py-20 flex flex-col items-center space-y-4">
        <Skeleton className="h-4 w-32 rounded-full bg-white/20" />
        <Skeleton className="h-12 w-48 rounded-full bg-white/25" />
        <Skeleton className="h-4 w-40 rounded-full bg-white/20" />
      </div>
      <div className="mx-auto mb-20 flex max-w-6xl flex-col items-center gap-10 px-6 lg:flex-row lg:gap-32">
        <Skeleton className="h-[38vh] w-75 rounded-2xl bg-white/10" />
        <div className="space-y-4">
          <Skeleton className="h-8 w-64 rounded-full bg-white/25" />
          <Skeleton className="h-6 w-56 rounded-full bg-white/20" />
          <Skeleton className="h-6 w-52 rounded-full bg-white/20" />
          <Skeleton className="h-6 w-60 rounded-full bg-white/20" />
          <Skeleton className="h-6 w-58 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
