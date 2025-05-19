import { z } from "zod"
import { ACCIDENTS_ENUM } from "../../../constants"

export const schema = z.object({
  accidentDate: z
    .string()
    .date("Formato inválido, se requiere (YYYY-MM-DD)")
    .refine((date) => date <= new Date().toLocaleDateString("en-ca"), {
      message: "La fecha no debe ser mayor que la actual",
    }),
  accidentTime: z.string().time("Formato inválido, se requiere (HH:MM:SS)"),
  trafficControls: z.enum(ACCIDENTS_ENUM.trafficControls, {
    errorMap: () => ({ message: "Seleccione una opción válida" }),
  }),
  accidentType: z.enum(ACCIDENTS_ENUM.accidentType, {
    errorMap: () => ({ message: "Seleccione una opción válida" }),
  }),
  serviceType: z.enum(ACCIDENTS_ENUM.serviceType, {
    errorMap: () => ({ message: "Seleccione una opción válida" }),
  }),
  accidentSeverity: z.enum(ACCIDENTS_ENUM.accidentSeverity, {
    errorMap: () => ({ message: "Seleccione una opción válida" }),
  }),
  vehicleType: z.enum(ACCIDENTS_ENUM.vehicleType, {
    errorMap: () => ({ message: "Seleccione una opción válida" }),
  }),
  accidentArea: z.enum(ACCIDENTS_ENUM.accidentArea, {
    errorMap: () => ({ message: "Seleccione una opción válida" }),
  }),
  accidentNeighbor: z.string().min(1, "Se requiere el barrio del accidente"),
  accidentAddress: z.string().min(3, "Se requiere la dirección del accidente"),
  accidentImage: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "El archivo no puede estar vacío",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "El archivo debe ser una imagen en formato jpeg o png",
    })
    .optional(),
  accidentGeo: z.string(),
})
