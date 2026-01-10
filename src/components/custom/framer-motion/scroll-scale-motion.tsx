import { motion, MotionValue, useTransform } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollScaleProps {
  progress: MotionValue<number>;
  children: ReactNode;
  className?: string;
}

export default function ScrollScale({ progress, children, className }: ScrollScaleProps) {
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

interface ScrollImageProps {
  progress: MotionValue<number>;
  src:string;
  className?: string;
}

export function ScrollImage({progress, src, className} : ScrollImageProps) {
  const scale = useTransform(progress, [0, 1], [1, 7]);
  return (
    <motion.img
      src={src}
      className={className}
      style={{scale}}
    />
  );
}