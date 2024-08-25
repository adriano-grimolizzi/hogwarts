import * as z from "zod"

export const wizardSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
})

export type WizardSchema = z.infer<typeof wizardSchema>
