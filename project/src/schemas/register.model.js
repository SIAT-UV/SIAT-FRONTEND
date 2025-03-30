import { z } from "zod"

export const schemaRegister = z
  .object({
    identificacion: z.string().min(6, { message: "La identificación es requerida" }),
    first_name: z.string().min(2, { message: "El nombre debe tener por lo menos 2 caracteres" }),
    last_name: z.string().min(2, { message: "El apellido debe tener por lo menos 2 caracteres" }),
    email: z.string().email({ message: "Debe ser un correo electrónico válido" }),
    password: z.string().min(6, { message: "La contraseña debe tener por lo menos 6 caracteres" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  })
