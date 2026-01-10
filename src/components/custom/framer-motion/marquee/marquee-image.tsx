import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MarqueeImageProps {
  images: string[];
  from?: string;
  to?: string;
  duration?: number;
  className?:string;
}

export const MarqueeImage = ({
  images,
  from = "0%",
  to = "-100%",
  duration = 40,
  className,
}: MarqueeImageProps) => {
  return (
    <div className={cn("flex overflow-hidden mask-image-linear", className)}>
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0"
      >
        {images.map((image, index) => (
          <img
            key={`first-${index}`}
            src={image}
            alt={`marquee-${index}`}
            className="h-80 w-80 object-cover shrink-0"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0"
      >
        {images.map((image, index) => (
          <img
            key={`second-${index}`}
            src={image}
            alt={`marquee-${index}`}
            className="h-80 w-80 object-cover shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};
