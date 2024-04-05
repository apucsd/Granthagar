import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email!!!"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email!!!"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  dateOfBirth: z.string(),
  gender: z
    .enum(["Male", "Female", "Other"], {
      required_error: "Gender must be Male, Female, or Other",
    })
    .default("Male"),
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    zipCode: z.string().optional(),
  }),
  phoneNumber: z.string().optional(),
  image: z.string().optional(),
});
