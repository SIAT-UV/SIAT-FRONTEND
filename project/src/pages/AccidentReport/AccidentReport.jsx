import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { schema } from "./schemas/accident.model"
import { AccidentForm } from "./components/AccidentForm"

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
      trafficControls: "",
      accidentType: "",
      serviceType: "",
      accidentSeverity: "",
      vehicleType: "",
      accidentArea: "",
      // accidentAddress: "",
      accidentImage: undefined,
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <>
      <h2>Registrar Accidente</h2>
      <AccidentForm control={control} handleSubmit={onSubmit} errors={errors} />
    </>
  )
}
