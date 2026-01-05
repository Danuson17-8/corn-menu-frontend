import { motion, useScroll, useTransform } from "framer-motion"
import { type ReactNode } from "react"

interface BackgroundParallaxProps {
    children: ReactNode;
    src: string;
}

export default function BackgroundParallax({children, src}: BackgroundParallaxProps) {
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="relative bg-black overflow-hidden">
        <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
            backgroundImage:  `url(${src})`,
            y: bgY
            }}
        />
        <div className="absolute inset-0 bg-black/20" />
        {children}
    </div>
  )
}
