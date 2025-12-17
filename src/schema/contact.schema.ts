import z from "zod";

export const contactSchema = z.object({
  //topic: z.enum(['Feedback', 'Bug', 'Question', 'Other']),
  topic: z.string().nonempty({ message: 'กรุณาระบุ topic' }),
  name: z.string().nonempty({ message: 'กรุณากรอกชื่อ' }),
  email: z.string().email({ message: 'อีเมลไม่ถูกต้อง' }),
  message: z.string().nonempty({ message: 'กรุณากรอกข้อความ' }),
});