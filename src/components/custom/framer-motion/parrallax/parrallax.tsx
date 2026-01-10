import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

export interface BackgroundParallaxProps {
  children?: ReactNode;
  src: string;
  className?: string;
  from?: string;
  to?: string;
}

export default function BackgroundParallax({
  className,
  children,
  src,
  from = "0%",
  to = "20%",
}: BackgroundParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        className="absolute inset-0 bg-cover scale-110"
        style={{
          backgroundImage: `url(${src})`,
          y: bgY,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
