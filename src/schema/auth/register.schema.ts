import z from "zod";

export const registerSchema = z.object({
  email: z.string().email("Invalid email"),
  verificationCode: z.string().min(6, "Code must be 6 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  { message: "Passwords do not match", path: ["confirmPassword"] }
);