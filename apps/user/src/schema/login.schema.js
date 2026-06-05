import { z } from "zod";

export const createLoginSchema = (formatMessage) =>
  z.object({
    email: z
      .string()
      .trim()
      .min(1, formatMessage({ id: "login.emailRequired" }))
      .email(formatMessage({ id: "login.emailInvalid" })),
    password: z
      .string()
      .min(1, formatMessage({ id: "login.passwordRequired" })),
  });
