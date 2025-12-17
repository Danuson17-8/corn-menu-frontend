import ContactAddressCard from "@/components/custom/card/contact/contact-address-card"
import ContactCard from "@/components/custom/card/contact/contactus-card"
import { LoadingScreen } from "@/components/custom/screen/loading-screen"
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
      isPending,
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

  if(isPending) return <LoadingScreen open={true}/>

  return <div className="relative min-h-screen py-10 px-30">
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: "url('/images/bg/bg-corn1.jpg')" }}
    />
    <svg 
      className="absolute right-0 bottom-0 h-100"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1440 320"
    >
      <path fill="#ffd700" fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,165.3C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    <div className="relative flex">
      <ContactCard> 
        <ContactForm onSuccess={mutate} isLoading={isPending}/>
      </ContactCard>
      <div className="mt-48 ml-40">
      <ContactAddressCard/>
      </div>
    </div>
  </div>
}
