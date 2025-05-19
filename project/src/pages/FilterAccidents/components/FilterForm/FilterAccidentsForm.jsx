import { useForm } from "react-hook-form"
import { FilterForm } from "../../../../components/FilterForm"
import { SelectForm } from "../../../../components/SelectForm"
import { ACCIDENTS_FILTERS } from "../../../../constants"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import { filterAccidentSchema } from "../../schemas"
import { FilterOption } from "../FilterOption"
import { InputForm } from "../../../../components/InputForm"
import {
  form,
  formContainer,
  noFilterSelected,
} from "./FilterAccidentsForm.module.css"

export const FilterAccidentsForm = ({ submitData }) => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(filterAccidentSchema),
    defaultValues: {
      type: "",
      value: "",
      startDate: "",
      endDate: "",
    },
  })

  const onSubmit = handleSubmit((data) => {
    submitData(data)
    reset()
  })

  const selectedFilter = watch("type")

  return (
    <FilterForm handleSubmit={onSubmit} className={form}>
      <div className={formContainer}>
        <SelectForm
          name="type"
          control={control}
          label="Filtro"
          options={ACCIDENTS_FILTERS.filterAccident}
          error={errors.type}
        />
        {selectedFilter.length === 0 ? (
          <div className={noFilterSelected}>
            <span>No hay filtros seleccionados</span>
          </div>
        ) : (
          <FilterOption selectedFilter={selectedFilter}>
            <InputForm
              name="startDate"
              control={control}
              type="date"
              label="Fecha Inicial del Accidente"
              error={errors.startDate}
              filter="Fecha del Accidente"
            />
            <InputForm
              name="endDate"
              control={control}
              type="date"
              label="Fecha Final del Accidente"
              error={errors.endDate}
              filter="Fecha del Accidente"
            />
            <InputForm
              name="value"
              control={control}
              type="text"
              label="Dirección del Accidente"
              placeholder="Ingrese la dirección del accidente"
              error={errors.value}
              filter="Dirección del Accidente"
            />
          </FilterOption>
        )}
      </div>
    </FilterForm>
  )
}
