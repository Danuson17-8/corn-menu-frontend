import { Flag, HandCoins, Store, Wheat } from "lucide-react";
import { Fadeup } from "../../framer-motion/fadeup";
import BackgroundParallax from "../../framer-motion/parrallax/parrallax";
import HoverParallaxImage from "../../framer-motion/parrallax/parrallax-hover";

const features = [
  { icon: Wheat, text: "Quality Ingredients", bg: "bg-amber-100" },
  { icon: Store, text: "40 Branches Nationwide", bg: "bg-green-100" },
  { icon: Flag, text: "Monthly Promotions", bg: "bg-pink-100" },
  { icon: HandCoins, text: "Great Value, Accessible to All", bg: "bg-blue-100" },
];

export function WhyChooseSection() {
    return (
      <BackgroundParallax
        from="-10%"
        src="images/bg/bg-corn11.jpg"
        className="h-250 py-40"
      >
        <Fadeup className="flex flex-col justify-center items-center">
          <div className="text-white backdrop-blur-[3px] p-10 rounded-2xl bg-black/50 space-y-10 font-serif">
            <HoverParallaxImage className="h-50 md:h-90" src="images/menu/corn-promot.png"/>
            <div className="flex flex-col md:flex-row gap-5">
              <Fadeup className="hero-subtitle" delay={0.3}>
                Why Choose <br/>CORN CORNN
              </Fadeup>
              <div className="space-y-4 text-[clamp(1.1rem,1.4vw,4rem)] border-l-2 border-white px-10">
                {features.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Fadeup
                      key={item.text}
                      delay={0.4 + index * 0.2}
                      className="feature-item flex items-center gap-3"
                    >
                      <Icon className={`${item.bg} icon-feature`} />
                      {item.text}
                    </Fadeup>
                  );
                })}
              </div>
            </div>
          </div>
        </Fadeup>
      </BackgroundParallax> 
    );
}