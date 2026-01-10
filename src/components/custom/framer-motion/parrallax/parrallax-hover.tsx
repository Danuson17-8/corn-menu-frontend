import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const PARALLAX = {
  moveX: 40,
  moveY: 25,
  rotateX: 6,
  rotateY: 6,
  rotateZ: 3,
  scale: 1.05,
} as const;

interface HoverParallaxImageProps {
    src: string;
    className?: string;
}

export default function HoverParallaxImage({src, className}: HoverParallaxImageProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 70, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 30 });

  const x = useTransform(springX, [-0.5, 0.5], [-PARALLAX.moveX, PARALLAX.moveX]);
  const y = useTransform(springY, [-0.5, 0.5], [-PARALLAX.moveY, PARALLAX.moveY]);

  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    [PARALLAX.rotateX, -PARALLAX.rotateX]
  );
  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    [-PARALLAX.rotateY, PARALLAX.rotateY]
  );
  const rotateZ = useTransform(
    springX,
    [-0.5, 0.5],
    [-PARALLAX.rotateZ, PARALLAX.rotateZ]
  );

  function updateMousePosition(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      onMouseMove={updateMousePosition}
      onMouseLeave={reset}
      className={cn("relative perspective-[1000px]", className)}
    >
      <motion.img
        src={src}
        draggable={false}
        className="absolute inset-0 object-cover will-change-transform"   
        style={{
          x,
          y,
          rotateX,
          rotateY,
          rotateZ,
          scale: PARALLAX.scale,
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
}
