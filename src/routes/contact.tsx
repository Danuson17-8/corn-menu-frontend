import ContactCard from "@/components/custom/card/contact/contactus-card"
import { StoreInfoCard } from "@/components/custom/card/contact/storeinfo-card"
import BackgroundParallax from "@/components/custom/framer-motion/parrallax/parrallax"
import ContactForm from "@/components/form/contact-form"
import { APIError, requestAPI, type IAPIResponse } from "@/lib/api"
import type { contactSchema } from "@/schema/contact.schema"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import type z from "zod"

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
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

  return <BackgroundParallax src="images/bg/bg-corn12.jpg" from="-10%">
    <div className="relative m-5 lg:m-20 2xl:m-40 flex flex-col lg:flex-row">
      <ContactCard>
        <ContactForm onSuccess={mutate}/>
      </ContactCard>
      <StoreInfoCard />
    </div>
  </BackgroundParallax>
}
