import { motion, MotionValue, useTransform } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollTextProps {
  progress: MotionValue<number>;
  children: ReactNode;
  className?: string;
}

export default function ScrollScale({ progress, children, className }: ScrollTextProps) {
  const scale = useTransform(progress, [0, 1], [1, 0]);
  return (
    <motion.div
      className={className}
      style={{scale}}
    >
      {children}
    </motion.div>
  );
}

interface ScrollTmageProps {
  progress: MotionValue<number>;
  src:string;
  className?: string;
}

export function ScrollImage({progress, src, className} : ScrollTmageProps) {
  const scale = useTransform(progress, [0, 1], [1, 4]);
  return (
    <motion.img
      src={src}
      className={className}
      style={{scale}}
    />
  );
}