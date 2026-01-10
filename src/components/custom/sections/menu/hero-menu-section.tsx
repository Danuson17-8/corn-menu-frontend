import { motion, useScroll } from "framer-motion";
import MarqueeText from "../../framer-motion/marquee/marquee-text";
import ScrollScale, { ScrollImage } from "../../framer-motion/scroll-scale-motion";
import ScrollIndicator from "../../framer-motion/scroll-muse";

export default function HeroMenuSection() {
    const { scrollYProgress } = useScroll();

    return (
        <section className="relative h-[95vh]">
            <motion.div
                className="bg-primary h-150 w-100 border-0 rounded-2xl overflow-hidden shadow-2xl"
                style={{ position: "absolute", top: 41, right: 215 }}
                animate={{
                    width: "100%",
                    height: "95vh",
                    top: 0,
                    right: 0,
                    borderRadius: 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <ScrollImage progress={scrollYProgress} className="absolute z-10 inset-0 h-[60vh] lg:h-[70vh] mx-auto mt-10" src="/images/new-corn.png"/>
                <motion.div
                    className="font-bold mt-20"
                    initial={{ y: 30, opacity: 0, }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeIn", delay: 0.7 }}
                >
                    <ScrollScale progress={scrollYProgress} className="absolute left-10 text-[clamp(3rem,10vw,12.5rem)]">                     
                        <span className="text-black">ME</span><span className="text-white">NU</span>
                        <p className="text-[50px]">SHOP</p>
                    </ScrollScale>
                    <ScrollScale progress={scrollYProgress} className="absolute z-20 right-10 text-white text-[clamp(3rem,8vw,12.5rem)] mt-50 lg:mt-30">
                        <p className="text-amber-400 text-[50px] text-end">CORN</p>
                        C<span className="text-black">O</span><span className="text-amber-400">R</span><span className="text-black">N</span>N<span className="text-red-500">!</span>
                        <MarqueeText 
                            className="text-xl w-45 md:w-112 2xl:w-142 overflow-hidden bg-gray-900 rounded-b-xl text-gray-400" 
                            text="Join us for a special corn sale! Fresh, sweet, and juicy corn awaits you."
                        />
                    </ScrollScale>
                    <ScrollScale progress={scrollYProgress} className="absolute left-1/2 -translate-x-1/2 bottom-15 md:bottom-10 flex justify-center gap-4 mt-[25vh] text-5xl text-white">
                        <div className="flex">
                            <p className="hidden md:block">SCROLL T</p>
                            <ScrollIndicator className="mt-2" />
                        </div>
                        <p className="hidden md:block">CONTINUE</p>
                    </ScrollScale>
                </motion.div>
            </motion.div>
        </section>
    );
}