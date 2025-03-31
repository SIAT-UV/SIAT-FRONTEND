import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { schema } from "./schemas/accident.model"
import { AccidentForm } from "./components/AccidentForm"
import { useFetchData } from "../../hooks"
import { report } from "../../services"

export const AccidentReport = () => {
  const { loading, fetch } = useFetchData(report)
  const {
    control,
    register,
    handleSubmit,
    reset,
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
      accidentAddress: "",
      accidentImage: undefined,
    },
  })

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData()

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })

    fetch(formData)
    reset()
  })

  if (loading) return <Loader />

  return (
    <>
      <h2>Registrar Accidente</h2>
      <AccidentForm control={control} register={register} handleSubmit={onSubmit} errors={errors} />
    </>
  )
}
