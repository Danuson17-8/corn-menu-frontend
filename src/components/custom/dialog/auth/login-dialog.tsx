import type { IAdminFormProps } from "@/components/form/auth/login-form";
import LoginAdminForm from "@/components/form/auth/login-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAuth } from "@/context/auth";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import RegisterDialog from "./register-dialog";

export interface DialogProps {
    open: boolean;
    setOpen: (open: boolean) => void
}

export function DialogLogin ({ open, setOpen }: DialogProps) {
    const [openRegis, setOpenRegis] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);

    const doLoginWithPassword: IAdminFormProps['onSuccess'] = async (
        payload
    ) => {
        setLoading(true);
        const resp = await auth.signInWithPassword({
            path: '/auth/login',
            username: payload.account,
            password: payload.password,
        });
        setLoading(false);
        if (!resp.success)
            return toast.error(resp.message, {
                style: {
                    color: '#ef4444',
                },
            });
        // Get user
        const result = await auth.getUser();
        if (result) {
            setOpen(false)
            navigate({ to: '/' });
        }
        return {
            success: true,
        };
    };

    return <>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="rounded-3xl p-10 shadow-lg overflow-hidden">
                <DialogHeader>
                    <DialogTitle className="text-center">
                    <span className="text-amber-400">Corn</span> Corn
                    </DialogTitle>
                </DialogHeader>
                <div className="pb-4 text-center">
                    <h1 className="font-bold text-2xl">Log In</h1>
                </div>
                <LoginAdminForm
                    onSuccess={doLoginWithPassword}
                    isLoading={isLoading}
                />
                <div className="text-center relative mt-6 mb-3">
                    <hr className="border-gray-300" />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-gray-500 text-sm">
                        หรือ
                    </span>
                </div>
                <button 
                    className="cursor-pointer text-yellow-800"
                    onClick={() => {
                        setOpen(false)
                        setOpenRegis(true)
                    }}
                >
                    Register Now
                </button>
            </DialogContent>
        </Dialog>
        <RegisterDialog open={openRegis} setOpen={setOpenRegis}/>
    </>
}
