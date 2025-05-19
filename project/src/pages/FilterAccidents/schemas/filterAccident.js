import { z } from "zod"

const dateSchema = z.object({
  type: z.literal("Fecha del Accidente"),
  startDate: z
    .string()
    .date("Formato inválido, se requiere (YYYY-MM-DD)")
    .refine((date) => date <= new Date().toLocaleDateString("en-ca"), {
      message: "La fecha no debe ser mayor que la actual",
    }),
  endDate: z
    .string()
    .date("Formato inválido, se requiere (YYYY-MM-DD)")
    .refine((date) => date <= new Date().toLocaleDateString("en-ca"), {
      message: "La fecha no debe ser mayor que la actual",
    }),
})

const addressSchema = z.object({
  type: z.literal("Dirección del Accidente"),
  value: z.string().min(3, "Se requiere la dirección del accidente"),
})

export const filterAccidentSchema = z
  .discriminatedUnion("type", [dateSchema, addressSchema], {
    errorMap: () => ({
      message: "Seleccione un filtro",
    }),
  })
  .refine((data) => data.startDate <= data.endDate, {
    path: ["endDate"],
    message: "La fecha final no puede ser menor que la fecha inicial",
  })
