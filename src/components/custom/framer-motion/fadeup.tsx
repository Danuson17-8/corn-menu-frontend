import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, type ReactNode } from "react";

interface FadeupProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export const Fadeup = ({ children, className, delay = 0 }: FadeupProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const inView = useInView(ref, { margin: "-100px 0px -100px 0px" });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay },
            });
        } else {
            controls.start({
                opacity: 0,
                y: 40,
                transition: { duration: 0.8 },
            });
        }
    }, [inView, controls, delay]);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
        >
            {children}
        </motion.div>
    );
};
