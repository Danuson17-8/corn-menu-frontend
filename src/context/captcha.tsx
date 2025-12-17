import { Turnstile } from "@marsidev/react-turnstile";
import { createContext, useContext, useState, type ReactNode } from "react";

interface ICaptcha {
    is_completd: boolean;
    token: string;
    render: () => ReactNode;
    reset: () => void
}

export const captchaContext = createContext<ICaptcha>({
    is_completd: true,
    token: "",
    render: () => <></>,
    reset: () => { },
});

export function useCaptcha() {
    const admission = useContext(captchaContext);
    if (!admission)
        throw new Error(
            'CaptchaProvider is not provided. Please add <CaptchaProvider /> first'
        );
    return admission;
}

export default function CaptchaProvider({ children }: { children: ReactNode }) {
    const [widget, setWidget] = useState({
        site_key: import.meta.env.PROD ? import.meta.env.VITE_CF_SITE_KEY : "1x00000000000000000000AA",
        is_completd: false,
        token: ""
    })

    return <captchaContext.Provider value={{
        is_completd: widget.is_completd,
        token: widget.token,
        render: () => <Turnstile
            siteKey={widget.site_key}
            onSuccess={(token) => setWidget((p) => {
                p.is_completd = true
                p.token = token
                return { ...p }
            })}
        />,
        reset: () => {
            window.turnstile?.reset()
            setWidget((p) => {
                p.is_completd = false
                p.token = ""
                return { ...p }
            })
        },
    }}>
        {children}
    </captchaContext.Provider>
}