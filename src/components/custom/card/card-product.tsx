import { useNavigate } from "@tanstack/react-router"
import { motion, useScroll, useTransform } from "framer-motion"

export const ProductCard = () => {
  const navigate = useNavigate()
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 0.4], ["30px", "100vw"])
  const height = useTransform(scrollYProgress, [0, 0.4], ["70px", "80vh"])
  const radius = useTransform(scrollYProgress, [0, 0.4], ["24px", "0px"])
  const top = useTransform(scrollYProgress, [0, 0.4], ["5%", "28%"])
  const right = useTransform(scrollYProgress, [0, 0.4], ["12%", "0%"])
  const bgImageOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])

  return (
    <motion.div
      style={{ width, height, top, right, borderRadius: radius }}
      className="hidden lg:block sticky top-[20%] ml-auto mr-12 shadow-lg overflow-hidden bg-primary z-30"
    >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
              backgroundImage: "url('/images/bg/bg-corn4.jpg')",
              opacity: bgImageOpacity,
          }}
        >
            <div className="absolute z-5 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent"/>
        </motion.div>
        <div className="relative z-10 h-full">
            <img
                src="/images/new-corn.png"
                className="w-full h-full object-contain"
                alt="Corn Corn"
            />
            <button
              onClick={() => navigate({ to: "/menu" })}
              className="absolute bottom-8 left-1/2 cursor-pointer -translate-x-1/2 bg-black text-white font-bold py-3 px-8 rounded-full transition hover:bg-amber-600"
            >
            Buy Now
            </button>
        </div>
    </motion.div>
  )
}
