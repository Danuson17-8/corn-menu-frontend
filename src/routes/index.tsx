import { HeroHomeSection } from "@/components/custom/sections/home/hero-home-section";
import { MarketingHomeSection } from "@/components/custom/sections/home/marketing-section";

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <HeroHomeSection />
      <MarketingHomeSection />
    </>
  )
}
