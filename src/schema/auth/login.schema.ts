import { z } from 'zod';

export const loginSchema = z.object({
    account: z.string().nonempty({ message: 'กรุณากรอกข้อมูล' }),
    password: z.string().nonempty({ message: 'กรุณากรอกข้อมูล' }),
});
