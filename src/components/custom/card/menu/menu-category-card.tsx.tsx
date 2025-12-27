import { motion } from "framer-motion";
import MarqueeText from "../../framer-motion/marquee-text";
import ScrollScale, { ScrollImage } from "../../framer-motion/scroll-scale-motion";

export default function MenuCategoryCard () {
    return (
        <div className="relative bg-black h-114 w-full">
            <motion.div
                className="bg-primary h-120 w-82 border-0 rounded-2xl overflow-hidden"
                style={{ position: "absolute", top: 41, right: 215 }}
                animate={{
                    width: "100vw",
                    height: "60vh",
                    top: 0,
                    right: 0,
                    borderRadius: 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <ScrollImage src="/images/new-corn.png"/>
                    <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-center font-bold"
                    initial={{ y: 30, opacity: 0, }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeIn", delay: 0.7 }}
                    >
                    <div className="flex justify-between gap-50 lg:gap-130">
                        <ScrollScale className="text-5xl lg:text-[100px]">                       
                            <span className="text-black">ME</span><span className="text-white">NU</span>
                            <p className="text-[50px]">SHOP</p>
                        </ScrollScale>
                        <ScrollScale className="text-white text-[100px]">
                            <p className="text-amber-400 text-[50px] text-end lg:text-start">CORN</p>
                            C<span className="text-black">O</span><span className="text-amber-400">R</span><span className="text-black">N</span>N<span className="text-red-500">!</span>
                            <div className="w-[370px] overflow-hidden relative bg-gray-900 rounded-b-xl text-gray-400">
                                <MarqueeText text="SUPER CORN CORNN! SUPER CORN CORNN! "/>
                            </div>
                        </ScrollScale>
                    </div>
                    </motion.div>
            </motion.div>
        </div>
    );
}