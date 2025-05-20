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
import { useState } from "react"

export const FilterAccidentsForm = ({ submitData, filterDate }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(filterAccidentSchema),
    defaultValues: {
      filterDate: {
        startDate: "",
        endDate: "",
      },
      filter: {
        type: "",
        value: "",
      },
    },
  })

  const onSubmit = handleSubmit((data) => {
    submitData(data)
  })

  const selectedFilter = watch("filter.type")

  return (
    <>
      <FilterForm handleSubmit={onSubmit} className={form}>
        <div className={formContainer}>
          <InputForm
            name="filterDate.startDate"
            control={control}
            type="date"
            label="Fecha Inicial del Accidente"
            error={errors.filterDate?.startDate}
          />
          <InputForm
            name="filterDate.endDate"
            control={control}
            type="date"
            label="Fecha Final del Accidente"
            error={errors.filterDate?.endDate}
          />
          <SelectForm
            name="filter.type"
            control={control}
            label="Filtro"
            options={ACCIDENTS_FILTERS.filterAccident}
            error={errors.filter?.type}
          />
          {selectedFilter ? (
            <FilterOption selectedFilter={selectedFilter}>
              <InputForm
                name="filter.value"
                control={control}
                type="text"
                label="Dirección del Accidente"
                placeholder="Ingrese la dirección del accidente"
                error={errors.filter?.value}
                filter="Dirección del Accidente"
              />
            </FilterOption>
          ) : (
            <div className={noFilterSelected}>
              <span>No hay filtros seleccionados</span>
            </div>
          )}
        </div>
      </FilterForm>
      {filterDate && (
        <p>
          Filtrando accidentes entre el {filterDate.startDate} y el{" "}
          {filterDate.endDate}
        </p>
      )}
    </>
  )
}
