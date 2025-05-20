import { z } from "zod"
import { ACCIDENTS_ENUM } from "../../../constants"

const gravitySchema = z.object({
  type: z.literal("Gravedad del Accidente"),
  value: z.enum(ACCIDENTS_ENUM.accidentSeverity, {
    message: "Seleccione una opción válida",
  }),
})

const vehiculeSchema = z.object({
  type: z.literal("Clase de Vehículo"),
  value: z.enum(ACCIDENTS_ENUM.vehicleType, {
    message: "Seleccione una opción válida",
  }),
})

export const filterMapSchema = z.discriminatedUnion(
  "type",
  [gravitySchema, vehiculeSchema],
  { errorMap: () => ({ message: "Seleccione un filtro" }) },
)
