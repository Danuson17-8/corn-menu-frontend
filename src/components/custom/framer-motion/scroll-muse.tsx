import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator({className}: {className?: string}) {
  return (
    <div className={cn(
      "flex flex-col items-center gap-2 text-white",
      className
    )}>
      <div className="w-6 h-10 border-4 border-white rounded-full flex justify-center">
        <motion.div
          className="w-1 h-2 bg-white rounded-full mt-2"
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <motion.span
        className="text-xs tracking-wide"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
        }}
      >
        <ChevronDown />
      </motion.span>
    </div>
  );
}
