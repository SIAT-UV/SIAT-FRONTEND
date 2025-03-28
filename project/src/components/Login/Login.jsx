import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "../Buttons"
import { CamposRegister } from "../CamposRegister/CamposRegister"
import { FormLayout } from "../FormLayout/FormLayout"
import { titulo, subtitulo } from "./Login.module.css"
import { useFetchData } from "../../hooks"
import { login } from "../../services"
import { Loader } from "../Loader"

const schema = z.object({
  identificacion: z.string().min(1, { message: "La cédula es requerida" }),
  contraseña: z.string().min(3, { message: "La contraseña es incorrecta" }),
})

export const Login = () => {
  const { loading, data, error, fetch } = useFetchData(login)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (user) => {
    fetch(user)
  }

  if (loading) return <Loader />
  return (
    <FormLayout>
      <h1 className={titulo}>Iniciar Sesión</h1>
      <h2 className={subtitulo}>Ingresa tus datos para iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CamposRegister register={register} name="identificacion" errors={errors.identificacion} label="Identificación" />
        <CamposRegister register={register} type="password" name="contraseña" errors={errors.contraseña} label="contraseña" />
        <Button type="submit">Iniciar Sesión</Button>
      </form>
    </FormLayout>
  )
}
