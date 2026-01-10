import { MarketingCard } from "../../card/card-mareting";
import { Fadeup } from "../../framer-motion/fadeup";
import { RevealText } from "../../framer-motion/reveal-text";

const marketingContent = {
  title: "Grilled to Perfection",
  descriptions: [
    "Freshly grilled sweet corn made from carefully selected ingredients.",
    "Slowly grilled over open flame for a rich, smoky aroma.",
    "Coated with our signature sauce for perfectly balanced flavor.",
    "Available in classic and spicy options to suit every taste.",
    "A customer favorite, often shared across social media.",
  ],
};

export function MarketingHomeSection() {
    return (
        <section className="relative min-h-screen bg-black text-white py-20 px-5 lg:px-50 space-y-25">
            <div className="flex justify-between items-center font-serif hero-description">
                <Fadeup>
                    <h2 className="hero-subtitle">Grilled Corn</h2>
                    <div className="flex items-center gap-4">
                    <div className="h-0.5 w-10 bg-primary"/>
                    <p>Cron Cronn</p>
                    </div>
                </Fadeup>
                <RevealText className="text-white/50" text="Perfectly Grilled Corn"/>
            </div>
            <Fadeup>
                <MarketingCard image="images/product.jpeg" className="max-h-200 max-w-250 mx-auto">
                    <p className="font-serif hero-description italic">
                        {marketingContent.title}
                    </p>
                    <div className="text-black/50 space-y-1">
                        {marketingContent.descriptions.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                </MarketingCard>
            </Fadeup>
            <div className="font-serif text-center">
                <RevealText className="hero-description text-primary" text="Smoky, Sweet & Delicious"/>
                <RevealText className="text-lg text-white/50" text="Corn You Feel It?"/>
            </div>
        </section>
    );
}