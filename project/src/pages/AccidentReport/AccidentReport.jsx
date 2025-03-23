import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { InputForm } from "../../components/InputForm"
import { Button } from "../../components/Buttons"
import { SelectForm } from "../../components/SelectForm"
import { FileForm } from "./components/FileForm"

const schema = z.object({
  accidentDate: z.string().date("Formato inválido, se requiere (YYYY-MM-DD)"),
  accidentTime: z.string().time("Formato inválido, se requiere (HH:MM:SS)"),
  trafficControls: z.enum(["Semáforo", "Horizontales", "Verticales", "No Informa"]),
  accidentType: z.enum(["Choque", "Atropello", "Volcamiento"]),
  serviceType: z.enum(["Particular", "Público", "No Informa"]),
  accidentSeverity: z.enum(["Con Heridos", "Solo Daños", "Con Muertos", "No Informa"]),
  vehicleType: z.enum(["Motocicleta", "Camión", "Taxi", "Automóvil", "Bus"]),
  accidentArea: z.enum(["Urbana", "Rural"]),
  accidentAddress: z.string().min(1, "Se requiere la dirección del accidente"),
  accidentImage: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "El archivo no puede estar vació" })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), { message: "El archivo debe ser una imagen en formato jpeg o png" })
    .optional(),
})

export const AccidentReport = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      accidentDate: "",
      accidentTime: "",
      trafficControls: "Semáforo",
      accidentType: "Choque",
      serviceType: "Particular",
      accidentSeverity: "Solo Daños",
      vehicleType: "Automóvil",
      accidentArea: "Urbana",
      accidentAddress: "",
      accidentImage: undefined,
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <h2>Registrar Accidente</h2>
      <h3>Información General</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm name="accidentDate" control={control} label="Fecha del Accidente" type="date" error={errors.accidentDate} />
        <InputForm name="accidentTime" control={control} label="Hora del Accidente" type="time" step="1" error={errors.accidentTime} />
        <SelectForm name="trafficControls" control={control} label="Controles de Tránsito" error={errors.trafficControls}>
          <option value="">Seleccione una opción</option>
          <option value="Semáforo">Semáforo</option>
          <option value="Verticales">Verticales</option>
          <option value="Horizontales">Horizontales</option>
          <option value="No Informa">No Informa</option>
        </SelectForm>
        <SelectForm name="accidentType" control={control} label="Tipo de Accidente" error={errors.accidentType}>
          <option value="">Seleccione una opción</option>
          <option value="Choque">Choque</option>
          <option value="Atropello">Atropello</option>
          <option value="Volcamiento">Volcamiento</option>
        </SelectForm>
        <SelectForm name="serviceType" control={control} label="Clase de Servicio" error={errors.serviceType}>
          <option value="">Seleccione una opción</option>
          <option value="Particular">Particular</option>
          <option value="Público">Público</option>
          <option value="No Informa">No Informa</option>
        </SelectForm>
        <SelectForm name="accidentSeverity" control={control} label="Gravedad del Accidente" error={errors.accidentSeverity}>
          <option value="">Seleccione una opción</option>
          <option value="Con Heridos">Con Heridos</option>
          <option value="Solo Daños">Solo Daños</option>
          <option value="Con Muertos">Con Muertos</option>
          <option value="No Informa">No Informa</option>
        </SelectForm>
        <SelectForm name="vehicleType" control={control} label="Clase de Vehiculo" error={errors.vehicleType}>
          <option value="">Seleccione una opción</option>
          <option value="Motocicleta">Motocicleta</option>
          <option value="Camión">Camión</option>
          <option value="Taxi">Taxi</option>
          <option value="Automóvil">Automóvil</option>
          <option value="Bus">Bus</option>
        </SelectForm>
        <SelectForm name="accidentArea" control={control} label="Área del Accidente" error={errors.accidentArea}>
          <option value="">Seleccione una opción</option>
          <option value="Urbana">Urbana</option>
          <option value="Rural">Rural</option>
        </SelectForm>
        <InputForm name="accidentAddress" control={control} label="Dirección del Accidente" type="text" error={errors.accidentAddress} />
        <FileForm name="accidentImage" control={control} label="Imagen del Accidente" accept="image/jpeg, image/png" error={errors.accidentImage} />
        <Button type="submit">Enviar</Button>
      </form>
    </>
  )
}
