import { FilterForm } from "../../../components/FilterForm"
import { SelectForm } from "../../../components/SelectForm"
import { HeatMapLeyend } from "../HeatMapLeyend"
import { ACCIDENTS_FILTERS } from "../../../constants"
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
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      filter: "",
      filterOption: "",
    },
  })

  const selectedFilter = watch("filter")
  const filterOption = ACCIDENTS_FILTERS[selectedFilter] ?? []

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    reset()
  })

  return (
    <div className={container}>
      <div className={formContainer}>
        <FilterForm handleSubmit={onSubmit} className={form}>
          <SelectForm
            name="filter"
            control={control}
            label="Filtro"
            options={ACCIDENTS_FILTERS.filterOptions}
            error={errors.filter}
            className={filterSelect}
          />
          <SelectForm
            name="filterOption"
            control={control}
            label="Opción de Filtro"
            defaultOption={
              filterOption.length > 0
                ? "Seleccione una opción"
                : "No hay un filtro seleccionado"
            }
            options={filterOption}
            error={errors.filterOption}
            className={filterSelect}
          />
        </FilterForm>
      </div>
      <HeatMapLeyend />
    </div>
  )
}
