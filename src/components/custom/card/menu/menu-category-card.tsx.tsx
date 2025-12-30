import { motion } from "framer-motion";
import MarqueeText from "../../framer-motion/marquee/marquee-text";
import ScrollScale, { ScrollImage } from "../../framer-motion/scroll-scale-motion";

export default function MenuCategoryCard () {
    return (
        <div className="relative">
            <motion.div
                className="bg-primary h-120 w-82 border-0 rounded-2xl overflow-hidden shadow-2xl"
                style={{ position: "absolute", top: 41, right: 215 }}
                animate={{
                    width: "100%",
                    height: "90vh",
                    top: 0,
                    right: 0,
                    borderRadius: 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <ScrollImage className="h-[60vh] lg:h-[70vh] mx-auto mt-5" src="/images/new-corn.png"/>
                <motion.div
                    className="absolute inset-0 lg:pt-40 font-bold"
                    initial={{ y: 30, opacity: 0, }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeIn", delay: 0.7 }}
                >
                    <div className="flex justify-around mt-20 lg:mt-0 gap-5 lg:gap-120">
                        <ScrollScale className="text-5xl lg:text-[130px]">                     
                            <span className="text-black">ME</span><span className="text-white">NU</span>
                            <p className="text-[50px]">SHOP</p>
                        </ScrollScale>
                        <ScrollScale className="text-white text-5xl md:text-[100px] mt-60 md:mt-50 lg:mt-20">
                            <p className="text-amber-400 text-[50px] text-end">CORN</p>
                            C<span className="text-black">O</span><span className="text-amber-400">R</span><span className="text-black">N</span>N<span className="text-red-500">!</span>
                            <MarqueeText 
                                className="text-xl w-45 md:w-[370px] overflow-hidden relative bg-gray-900 rounded-b-xl text-gray-400" 
                                text="Join us for a special corn sale! Fresh, sweet, and juicy corn awaits you."
                            />
                        </ScrollScale>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}