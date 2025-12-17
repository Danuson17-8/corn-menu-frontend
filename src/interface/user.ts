export interface IAccount {
    account: string;
    role: string;
    name: string;
    contact: {
        email: string;
        mobile_phone: string;
    };
    address: string;
}
