import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form"
import { registerSchema } from "@/schema/auth/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import type z from "zod";
import FloatingInput from "../floating-input";
import { useCaptcha } from "@/context/captcha";
import { toast } from "sonner";
import { useState } from "react";
import { useAuth } from "@/context/auth";
import { CountdownButton } from "@/components/custom/button/contdown-button";
import { LoadingScreen } from "@/components/custom/screen/loading-screen";

export interface FormProps {
    isPending: boolean;
    onSuccess: (data: z.infer<typeof registerSchema>) => void;
}

export default function RegisterForm({isPending, onSuccess}: FormProps) {
    const auth = useAuth();
    const captcha = useCaptcha();
    const [isLoading, setLoading] = useState(false);

    const sendOTP = async (payload: {
        email: string;
    }) => {
        setLoading(true);
        const resp = await auth.sendOTP({
            email: payload.email,
        })
        setLoading(false);

        if (!resp.success) return toast.error(resp.message);

        return {
            success: true,
        };
    };

    const verifyOTP = async (payload: {
        email: string;
        code: string
    }) => {
        setLoading(true);
        const resp = await auth.verifyOTP({
            email: payload.email,
            code: payload.code
        });
        setLoading(false);

    if (!resp.success) {
        toast.error(resp.message);
        return {success: false};
    }

        return {success: true};
    };

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            verificationCode: '',
            password: '',
            confirmPassword: ''
        }
    });

    const doRegister: FormProps["onSuccess"] = async (payload) => {
        try {
            const res = await verifyOTP({
                email: payload.email,
                code: payload.verificationCode
            })
            if(res.success) {
                onSuccess(payload)
            }
        } catch (err: any) {
            toast.error(err.massage)
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(doRegister)} className="space-y-5">
                    <FloatingInput
                        control={form.control}
                        name="email"
                        label="Email"
                        type="text"
                        maxLength={50}
                    />
                    <div className="flex items-center">
                        <div className="basis-4/5">
                            <FloatingInput
                                control={form.control}
                                name="verificationCode"
                                label="Verification Code"
                                type="text"
                                onChangeExternal={(value) => {
                                    const onlyNumbers = value.replace(/[^0-9]/g, "");
                                    return onlyNumbers.slice(0, 6);
                                }}
                            />
                        </div>
                        <CountdownButton onClick={async () => await sendOTP({ email: form.getValues("email")})}/>
                    </div>
                    <FloatingInput
                        control={form.control}
                        name="password"
                        label="Enter password"
                        type="password"
                        maxLength={30}
                    />
                    <FloatingInput
                        control={form.control}
                        name="confirmPassword"
                        label="Please enter password again"
                        type="password"
                        maxLength={30}
                    />
                    <div className="flex justify-center">
                        {captcha.render()}
                    </div>
                    <Button type="submit" className="w-full cursor-pointer btn-primary" disabled={isLoading || isPending}>
                        Register
                    </Button>
                </form>
            </Form>
            <LoadingScreen open={isLoading || isPending}/>
        </>
    )
}