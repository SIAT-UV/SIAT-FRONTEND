import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "../Buttons"
import { CamposRegister } from "../CamposRegister/CamposRegister"
import { FormLayout } from "../FormLayout/FormLayout"
import { titulo, subtitulo } from "./Formulario.module.css"
import { useFetchData } from "../../hooks"
import { register as userRegister } from "../../services"

const campos = z
  .object({
    identificacion: z.string().min(6, { message: "La identificación es requerida" }),
    first_name: z.string().min(2, { message: "El nombre debe tener por lo menos 2 caracteres" }),
    last_name: z.string().min(2, { message: "El apellido debe tener por lo menos 2 caracteres" }),
    email: z.string().email({ message: "Debe ser un correo electrónico válido" }),
    password: z.string().min(6, { message: "La contraseña debe tener por lo menos 6 caracteres" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  })

export const Formulario = () => {
  const { data, error, fetch } = useFetchData(userRegister)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(campos),
  })

  const onSubmit = (user) => {
    const newUser = user
    delete newUser.confirmPassword
    fetch(newUser)
  }

  return (
    <FormLayout>
      <h1 className={titulo}>Formulario Registro</h1>
      <div className={subtitulo}> Por favor, ingrese sus datos para registrarse</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CamposRegister register={register} name="identificacion" errors={errors.identificacion} label="Identificación" />
        <CamposRegister register={register} name="first_name" errors={errors.first_name} label="Nombre" />
        <CamposRegister register={register} name="last_name" errors={errors.last_name} label="Apellido" />
        <CamposRegister register={register} name="email" errors={errors.email} label="Correo" />
        <CamposRegister register={register} name="password" type="password" errors={errors.password} label="Contraseña" />
        <CamposRegister register={register} name="confirmPassword" type="password" errors={errors.confirmPassword} label="Confirmar Contraseña" />

        <Button type="submit">Registrarme</Button>
      </form>
    </FormLayout>
  )
}

