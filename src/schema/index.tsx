import * as z from "zod";
export const ContactSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().min(1, "Email is required.").email("Invalid email."),
  message: z.string().min(1, "Message is required"),
});
export const BookingSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().min(1, "Email is required.").email("Invalid email."),
  rollno: z.string().min(1, "Roll No is required."),
  department: z.string().min(1, "Dept name is required."),
  message: z.string().min(1, "Message is required."),
});
export const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().min(1, "Email is required.").email("Invalid email."),
  phone: z.number().min(1, "Phone number is required"),
  dob: z.number().min(1, "DOB is required"),
});
