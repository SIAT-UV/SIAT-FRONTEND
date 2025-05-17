import { z } from "zod"
import { ACCIDENTS_ENUM } from "../../AccidentReport/constants/accident"

export const filterSchema = z.object({
  serviceType: z.enum(ACCIDENTS_ENUM.serviceType, {
    errorMap: () => ({ message: "Seleccione una opción válida" }),
  }),
  accidentSeverity: z.enum(ACCIDENTS_ENUM.accidentSeverity, {
    errorMap: () => ({ message: "Seleccione una opción válida" }),
  }),
})
