import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export default function AnimatedButton({ to, children }: { to: string; children: React.ReactNode }) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  return (
    <motion.button
      className="px-3 pt-0.5 pb-1 rounded-full font-medium text-sm
                 text-yellow-50 bg-primary select-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={clicked ? { scale: 3, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={() => setClicked(true)}
      onAnimationComplete={() => {
        if (clicked) navigate({
          to: "/",
        });
      }}
    >
      {children}
    </motion.button>
  );
}
