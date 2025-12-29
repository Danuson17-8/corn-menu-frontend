import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollTextProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollScale({ children, className }: ScrollTextProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      className={className}
      style={{scale}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

interface ScrollTmageProps {
  src:string;
  className?: string;
}

export function ScrollImage({src, className} : ScrollTmageProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  return (
    <motion.img
      src={src}
      className={`${className}`}
      style={{scale}}
      transition={{ duration: 0.5 }}
    />
  );
}