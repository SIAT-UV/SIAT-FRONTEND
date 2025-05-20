import { z } from "zod"
import { ACCIDENTS_FILTERS } from "../../../constants"

const dateValidator = z
  .string()
  .date("Formato inválido, se requiere (YYYY-MM-DD)")
  .refine((date) => date <= new Date().toLocaleDateString("en-ca"), {
    message: "La fecha no debe ser mayor que la actual",
  })

const dateSchema = z.object({
  startDate: dateValidator,
  endDate: dateValidator,
})

const addressType = z.string()

const filterSchema = z.object({
  type: z.enum(["", ...ACCIDENTS_FILTERS.filterAccident], {
    message: "Seleccione un filtro válido",
  }),
  value: z.union([addressType]),
})

export const filterAccidentSchema = z
  .object({
    filterDate: dateSchema,
    filter: filterSchema,
  })
  .refine((data) => data.filterDate.startDate <= data.filterDate.endDate, {
    path: ["filterDate", "endDate"],
    message: "La fecha inicial no puede ser mayor que la fecha final",
  })
  .refine((data) => data.filter.value !== "" || data.filter.type === "", {
    path: ["filter", "value"],
    message: "Ingrese un valor para el filtro seleccionado",
  })
