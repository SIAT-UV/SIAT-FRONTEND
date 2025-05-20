import { FilterForm } from "../../../components/FilterForm"
import { SelectForm } from "../../../components/SelectForm"
import { HeatMapLeyend } from "../HeatMapLeyend"
import { ACCIDENTS_FILTERS } from "../../../constants"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { filterMapSchema } from "../schemas"
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
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(filterMapSchema),
    defaultValues: {
      type: "",
      value: "",
    },
  })

  const selectedFilter = watch("type")
  const filterOption = ACCIDENTS_FILTERS[selectedFilter] ?? []

  const onSubmit = handleSubmit((data) => {
    submitData(data)
  })

  return (
    <div className={container}>
      <div className={formContainer}>
        <FilterForm handleSubmit={onSubmit} className={form}>
          <SelectForm
            name="type"
            control={control}
            label="Filtro"
            options={ACCIDENTS_FILTERS.filterMap}
            error={errors.type}
            className={filterSelect}
          />
          <SelectForm
            name="value"
            control={control}
            label="Opción de Filtro"
            defaultOption={
              filterOption.length > 0
                ? "Seleccione una opción"
                : "No hay un filtro seleccionado"
            }
            options={filterOption}
            error={errors.value}
            className={filterSelect}
          />
        </FilterForm>
      </div>
      <HeatMapLeyend />
    </div>
  )
}
