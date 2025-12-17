import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import type { DialogProps } from "./login-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RegisterForm from "@/components/form/auth/register-form";
import { requestAPI, type APIError, type IAPIResponse } from "@/lib/api";
import type z from "zod";
import type { registerSchema } from "@/schema/auth/register.schema";
import { toast } from "sonner";
import { useCaptcha } from "@/context/captcha";


export default function RegisterDialog({open, setOpen}: DialogProps) {
    const captcha = useCaptcha();
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
        onSuccess: async (result) => toast.success(result.message),
        onError: async (err) => toast.error(err.message)
    })

    return (
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
                <RegisterForm onSuccess={mutate} isPending={isPending}/>
            </DialogContent>
        </Dialog>
    );
}