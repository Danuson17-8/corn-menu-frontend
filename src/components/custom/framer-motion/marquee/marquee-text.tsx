import { motion } from "framer-motion";

interface MarqueeTextProps {
    text: string;
    className?: string;
}

export default function MarqueeText ({text, className}: MarqueeTextProps) {
    return (
        <div className={className}>
            <motion.div
                className={`whitespace-nowrap font-bold`}
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
        </div>
    );
}