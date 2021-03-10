import * as z from "zod"

export const ContactInquiry = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
})
