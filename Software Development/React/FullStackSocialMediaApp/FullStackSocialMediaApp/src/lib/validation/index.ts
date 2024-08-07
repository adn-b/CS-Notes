import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, {
        message: "Surely your name is longer than that..."
    }),
    username: z.string().min(2, {
        message: "Username must contain at least 2 characters."
    }).max(50),
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must contain 8 characters."
    })
}) 

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must contain 8 characters."
    })
}) 