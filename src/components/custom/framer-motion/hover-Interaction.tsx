import { motion, MotionValue, useTransform } from "framer-motion"
import { type ReactNode } from "react"

export interface BackgroundParallaxProps {
  progress: MotionValue<number>;
  children: ReactNode;
  src: string;
  className?: string;
}

export default function BackgroundParallax({className, progress, children, src}: BackgroundParallaxProps) {
  const bgY = useTransform(progress, [0, 1], ["0%", "35%"])

  return (
    <div className={`relative bg-black overflow-hidden ${className}`}>
        <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
            backgroundImage:  `url(${src})`,
            y: bgY
            }}
        />
        <div className="relative">
          {children}
        </div>
    </div>
  )
}
