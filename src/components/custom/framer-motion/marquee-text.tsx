import { motion } from "framer-motion";

export default function MarqueeText ({text}:{text: string;}) {
    return (
        <motion.div
            className="whitespace-nowrap text-lg font-bold"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
            }}
            >
            {text}
        </motion.div>
    );
}