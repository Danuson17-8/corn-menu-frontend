
import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from 'react';
import { requestAPI } from '@/lib/api';
import { useCaptcha } from './captcha';
import type { IResetPasswordSendOTP } from '@/interface/auth/reset-password.interface';
import type { IAccount } from '@/interface/user';

interface IAuth {
    isReady: boolean;
    user: IAccount | null;
    signInWithPassword: (payload: {
        path: string;
        username: string;
        password: string;
    }) => Promise<
        | {
            success: true;
        }
        | {
            success: false;
            message: string;
        }
    >;
    verifyOTP: (payload: {
        email: string
        code: string
    }) => Promise<
        | {
            success: true;
        }
        | {
            success: false;
            message: string;
        }
    >;
    sendOTP: (payload: {
        email: string;
    }) => Promise<
        | {
            success: true;
        }
        | {
            success: false;
            message: string;
        }
    >;
    resendOTP: (payload: {
        path: string;
        token: string;
    }) => Promise<
        | {
            success: true;
            data: IResetPasswordSendOTP
        }
        | {
            success: false;
            message: string;
        }
    >;
    confirmResetPassword: (payload: {
        path: string;
        token: string;
        pwd: string;
    }) => Promise<
        | {
            success: true;
            message: string;
        }
        | {
            success: false;
            message: string;
        }
    >;
    getUser: () => Promise<IAccount | null>;
    signOut: () => Promise<IAccount | null>;
}

//Default
export const authContext = createContext<IAuth>({
    isReady: false,
    user: null,
    getUser: async () => null,
    signInWithPassword: async () => ({
        success: true,
        two_factor: { enable: false, method: [] },
    }),
    sendOTP: async () => ({
        success: true,
        data: {
            mobile: '',
            ref: '',
            token: ''
        }
    }),
    resendOTP: async () => ({
        success: true,
        data: {
            mobile: '',
            ref: '',
            token: ''
        }
    }),
    confirmResetPassword: async () => ({ success: true, message: 'ok' }),
    verifyOTP: async () => ({ success: true }),
    signOut: async () => null,
});

//Hook
export function useAuth() {
    const auth = useContext(authContext);
    if (!auth)
        throw new Error(
            'AuthProvider is not provided. Please add <AuthProvider /> first'
        );
    return auth;
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const captcha = useCaptcha()

    const [ready, setReady] = useState(false);
    const [user, setUser] = useState<IAuth['user']>(null);

    const signInWithPassword: IAuth['signInWithPassword'] = async (payload) => {
        const resp = await requestAPI<{
            access_token: string;
            two_factor: boolean;
            two_factor_method: string[];
        }>({
            method: 'POST',
            url: payload.path,
            body: {
                email: payload.username,
                password: payload.password,
                "cf-turnstile-captcha": captcha.token
            },
            //headers: import.meta.env.DEV ? {"x-cf-bypass-key": import.meta.env.VITE_CF_BYPASS_KEY || ""} : {}
        });
        if (!resp.success) {
            // Reset captcha
            captcha.reset()

            return {
                success: false,
                message: resp.message,
            };
        }

        return {
            success: true,
            two_factor: {
                enable: resp.data.two_factor,
                method: resp.data.two_factor_method,
            },
        };
    };

    const verifyOTP: IAuth['verifyOTP'] = async (payload) => {
        const resp = await requestAPI({
            method: 'POST',
            url: '/auth/verify-otp',
            body: {
                email: payload.email,
                code: payload.code,
            },
        });
        if (!resp.success) {
            return {
                success: false,
                message: resp.message,
            };
        }

        return {
            success: true,
        };
    };

    const sendOTP: IAuth['sendOTP'] = async (payload) => {
        const resp = await requestAPI({
            method: 'POST',
            url: '/auth/send-otp',
            body: {
                email: payload.email,
                "cf-turnstile-captcha": captcha.token
            },
        });
        if (!resp.success) {
            return {
                success: false,
                message: resp.message,
            };
        }
        return {
            success: true,
            data: resp.data,
        };
    };

    const resendOTP: IAuth['resendOTP'] = async (payload) => {
        const resp = await requestAPI<{
            mobile: string;
            ref: string;
            token: string
        }>({
            method: 'POST',
            url: payload.path,
            body: {
                token: payload.token,
            },
        });
        if (!resp.success) {
            return {
                success: false,
                message: resp.message,
            };
        }

        return {
            success: true,
            data: resp.data
        };
    };

    const confirmResetPassword: IAuth['confirmResetPassword'] = async (payload) => {
        const resp = await requestAPI({
            method: 'POST',
            url: payload.path,
            body: {
                token: payload.token,
                password: payload.pwd
            },
        });

        return {
            success: resp.success,
            message: resp.message
        };
    };

    const getUser: IAuth['getUser'] = async () => {
        const resp = await requestAPI<IAccount>({
            method: 'GET',
            url: '/identity/profile',
        });

        //have account but not have profile
        if (resp.message == "") {
            const fallbackUser: IAccount = {
                account: '',
                role: 'user',
                name: 'Account',
                contact: {
                    email: '',
                    mobile_phone: '',
                },
                address: '',
            };
            setUser(fallbackUser);
            return fallbackUser;
        }
        if (resp.success) setUser(resp.data);

        return resp.data;
    };

    const signOut: IAuth['signOut'] = async () => {
        if (user) {
            await requestAPI<IAccount>({
                method: 'POST',
                url: '/auth/logout',
            });
            // Store user data
            const userBeforeLogout: IAccount = { ...user };
            // Clear user data
            setUser(null);
            return userBeforeLogout;
        }

        return null;
    };

    useEffect(() => {
        getUser().then(() => setReady(true));
    }, []);

    return (
        <authContext.Provider
            value={{
                isReady: ready,
                user,
                signInWithPassword,
                verifyOTP,
                sendOTP,
                confirmResetPassword,
                resendOTP,
                getUser,
                signOut,
            }}
        >
            {children}
        </authContext.Provider>
    );
}
