import * as z from "zod";
export const ContactSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().min(1, "Email is required.").email("Invalid email."),
  message: z.string().min(1, "Message is required"),
});
