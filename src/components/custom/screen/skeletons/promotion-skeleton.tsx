import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonPromotionPage() {
  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-10 opacity-20" />
      <header className="absolute top-7 left-0 z-20 flex w-full items-center justify-between px-8 py-6 gap-3">
        <Skeleton className="h-7 w-36 bg-white/20" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-7 w-20 bg-white/20" />
          <Skeleton className="h-6 w-0.5 bg-white/20" />
          <Skeleton className="h-7 w-74 bg-white/10" />
        </div>
      </header>
      <div className="absolute bottom-[10%] left-[10%] z-20 max-w-xl space-y-4">
        <Skeleton className="h-3 w-40 bg-white/20" />
        <Skeleton className="h-12 w-105 bg-white/20" />
        <Skeleton className="h-10 w-90 bg-white/15" />
        <div className="mt-6 flex gap-8 border-t border-white/10 pt-4">
          <div className="space-y-2">
            <Skeleton className="h-3 w-20 bg-white/15" />
            <Skeleton className="h-4 w-24 bg-white/20" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-20 bg-white/15" />
            <Skeleton className="h-4 w-24 bg-white/20" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[80%] lg:bottom-[10%] right-10 z-20 flex gap-6">
        <Skeleton className="h-10 w-10 rounded-full bg-white/20" />
        <Skeleton className="h-10 w-10 rounded-full bg-white/20" />
      </div>
    </section>
  )
}
