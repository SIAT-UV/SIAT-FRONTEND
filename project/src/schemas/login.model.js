import { z } from "zod"

export const schemaLogin = z.object({
  identificacion: z.string().min(1, { message: "La cédula es requerida" }),
  contraseña: z.string().min(3, { message: "La contraseña es incorrecta" }),
})
