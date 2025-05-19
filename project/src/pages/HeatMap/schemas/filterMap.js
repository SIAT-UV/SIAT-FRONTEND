import { z } from "zod"
import { ACCIDENTS_FILTERS } from "../../../constants"

export const filterSchema = z
  .object({
    filter: z.enum(ACCIDENTS_FILTERS.filterOptions, {
      message: "Seleccione un filtro",
    }),
    filterOption: z.string(),
  })
  .superRefine((data, ctx) => {
    if (!ACCIDENTS_FILTERS[data.filter].includes(data.filterOption)) {
      ctx.addIssue({
        path: ["filterOption"],
        code: z.ZodIssueCode.custom,
        message: "Seleccione una opción del filtro",
      })
    }
  })
