import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import { type DialogProps } from "./login-dialog";
import RegisterForm from "@/components/form/auth/register-form";
import { requestAPI, type APIError, type IAPIResponse } from "@/lib/api";
import type z from "zod";
import type { registerSchema } from "@/schema/auth/register.schema";
import { toast } from "sonner";
import { useCaptcha } from "@/context/captcha";
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function RegisterDialog({open, setOpen, opendialog}: DialogProps) {
    const captcha = useCaptcha();
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const {mutate, isPending} = useMutation<
        IAPIResponse<{massage: string}>,
        APIError,
        z.infer<typeof registerSchema>
    >({
        mutationFn: async (payload) => 
            requestAPI({
                method: 'POST',
                url: `/auth/register`,
                body: {
                    email: payload.email,
                    password: payload.password,
                    "cf-turnstile-captcha": captcha.token
                },
                throwHTTPError: true
            }),
        onSuccess:(result) => {
            toast.success(result.message)
            setRegisterSuccess(true)
        },
        onError:(err) => toast.error(err.message)
    })

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="p-10">
                    <DialogHeader>
                        <DialogTitle className="text-center">
                            <span className="text-amber-400">Corn</span> Corn
                        </DialogTitle>
                        <div className="pb-4 text-center">
                            <h1 className="font-bold text-2xl">Register</h1>
                        </div>
                    </DialogHeader>
                    {!registerSuccess && <RegisterForm onSuccess={mutate} isPending={isPending}/>}
                    {registerSuccess && (
                        <>
                            <p className="text-center">Account created successfully</p>
                            <Button
                                className="btn-primary cursor-pointer" 
                                onClick={() => {
                                    setOpen(false)
                                    opendialog()
                                    setRegisterSuccess(false)
                                }}
                            >
                                Go to login.
                            </Button>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}