import z from "zod";

export const LoginFormShema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Please enter a valid email.",
    })
    .trim(),
  password: z
    .string()
    .min(1, { message: "Password is required." })
    .min(6, { message: "Password must be at least 8 characters long." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^()_+\-=\[\]{};':"\\|,.<>\/?]).{6,100}$/,
      {
        message:
          "Password must be 6-100 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      }
    )
    .trim(),
});
