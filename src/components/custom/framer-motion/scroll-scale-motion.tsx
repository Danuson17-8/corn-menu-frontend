import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollTextProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollScale({ children, className }: ScrollTextProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
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

export function ScrollImage({src} : {src:string;}) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  return (
    <motion.img
      src={src}
      className="w-full h-full object-contain"
      style={{scale}}
      transition={{ duration: 0.5 }}
    />
  );
}