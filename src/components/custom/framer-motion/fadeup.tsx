import { motion } from "framer-motion"
import { type ReactNode } from "react";

interface FadeupProps {
    children: ReactNode;
    className?: string;
    delay?: number
}

export const Fadeup = ({children, className, delay}: FadeupProps) => (
    <motion.div
        className={className}
        variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay },
        },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
    >
        {children}
    </motion.div>
);
