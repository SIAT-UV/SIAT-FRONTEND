import { FilterForm } from "../../../components/FilterForm"
import { SelectForm } from "../../../components/SelectForm"
import { HeatMapLeyend } from "../HeatMapLeyend"
import { ACCIDENTS_ENUM } from "../../AccidentReport/constants/accident"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { filterSchema } from "../schemas"
import {
  container,
  formContainer,
  form,
  filterSelect,
} from "./HeatMapFilters.module.css"

export const HeatMapFilters = ({ submitData }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      serviceType: "",
      accidentSeverity: "",
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    reset()
  })

  return (
    <div className={container}>
      <div className={formContainer}>
        <FilterForm handleSubmit={onSubmit} className={form}>
          <SelectForm
            name="serviceType"
            control={control}
            label="Clase de Servicio"
            options={ACCIDENTS_ENUM.serviceType}
            error={errors.serviceType}
            className={filterSelect}
          />
          <SelectForm
            name="accidentSeverity"
            control={control}
            label="Gravedad del Accidente"
            options={ACCIDENTS_ENUM.accidentSeverity}
            error={errors.accidentSeverity}
            className={filterSelect}
          />
        </FilterForm>
      </div>
      <HeatMapLeyend />
    </div>
  )
}
