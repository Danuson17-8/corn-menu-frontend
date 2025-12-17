import { z } from 'zod';

export const confirmOTPSchema = z.object({
    code: z
        .string()
        .length(6, {
            message: 'กรุณากรอก Code ให้ครบ 6 หลัก / Please fill code 6 digits',
        }),
});