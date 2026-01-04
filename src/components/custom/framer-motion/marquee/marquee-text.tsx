import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface MarqueeTextProps {
  text: string
  className?: string
  speed?: number // px ต่อวินาที
}

export default function MarqueeText({
  text,
  className,
  speed = 80,
}: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const textWidth = textRef.current.offsetWidth

    const totalDistance = containerWidth + textWidth
    setDistance(totalDistance)
    setDuration(totalDistance / speed)
  }, [text, speed])

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${className}`}
    >
      <motion.div
        ref={textRef}
        className="whitespace-nowrap font-bold"
        initial={{ x: "100%" }}
        animate={{ x: -distance }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {text}
      </motion.div>
    </div>
  )
}
