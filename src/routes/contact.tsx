import ContactCard from "@/components/custom/card/contact/contactus-card"
import BackgroundParallax from "@/components/custom/framer-motion/hover-Interaction"
import ContactForm from "@/components/form/contact-form"
import { APIError, requestAPI, type IAPIResponse } from "@/lib/api"
import type { contactSchema } from "@/schema/contact.schema"
import { useMutation } from "@tanstack/react-query"
import { useScroll } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { toast } from "sonner"
import type z from "zod"

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  const { scrollYProgress } = useScroll();
  const {
      mutate,
  } = useMutation<
      IAPIResponse<{ message: string; }>,
      APIError,
      z.infer<typeof contactSchema>
  >({
      mutationKey: ["contact"],
      mutationFn: async (body) => 
        requestAPI({
              method: "POST",
              url: "/contact",
              body,
          }),
      onSuccess: (result) => toast.success(result.message),
      onError: (err) => toast.error(err.message),
  })

  return <BackgroundParallax progress={scrollYProgress} src="images/bg/bg-corn12.jpg">
    <svg
      className="absolute bottom-0 h-[50vh]"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1440 320"
    >
      <path 
        fill="#ffd700" 
        fill-opacity="1" 
        d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,165.3C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
      </path>
    </svg>
    <div className="relative flex flex-col lg:flex-row 2xl:m-30 md:mx-40 py-10 px-3">
      <ContactCard>
        <ContactForm onSuccess={mutate}/>
      </ContactCard>
      <div className="bg-white/30 backdrop-blur-md p-10 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none shadow-lg space-y-10 text-gray-800">
        <div className="flex gap-3">
          <MapPin className="mt-1"/>
          <div className="font-bold text-2xl">
              Location
              <p className="font-medium text-sm">Thailand, Chiang Mai</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Phone className="mt-1"/>
          <div className="font-bold text-2xl">
              Phone
              <p className="font-medium text-sm">012-345-6789</p>
            </div>
        </div>
        <div className="flex gap-3">
          <Mail className="mt-1"/>
          <div className="font-bold text-2xl">
              Email
              <p className="font-medium text-sm">corncorn@gmail.com </p>
          </div>
        </div>
      </div>
    </div>
  </BackgroundParallax>
}
