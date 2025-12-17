export interface IResetPasswordSendOTP {
    mobile: string;
    ref: string;
    token: string;
}

export interface IResetPasswordVerifyOTP {
    is_valid: boolean
    is_expired: boolean;
    retries: number;
}