import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { schema } from "./schemas/accident.model"
import { AccidentForm } from "./components/AccidentForm"
import { useFetchData } from "../../hooks"
import { report } from "../../services"
import { formatData } from "../../utilities"
import { ACCIDENT_FIELDS } from "../../constants"

export const AccidentReport = () => {
  const { loading, fetch } = useFetchData(report)
  const methods = useForm({
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
      accidentNeighbor: "",
      accidentAddress: "",
      accidentImage: undefined,
    },
  })

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    // const formatedData = formatData(data, ACCIDENT_FIELDS)

    // console.log(formatedData)
    const formData = new FormData()

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })

    fetch(formData)
    reset()
  })

  if (loading) return <Loader />

  return (
    <FormProvider {...methods}>
      <h2>Registrar Accidente</h2>
      <AccidentForm control={control} register={register} handleSubmit={onSubmit} errors={errors} />
    </FormProvider>
  )
}
