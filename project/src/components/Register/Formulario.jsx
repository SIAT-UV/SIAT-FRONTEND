import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Buttons"
import { CamposRegister } from "../CamposRegister/CamposRegister"
import { FormLayout } from "../FormLayout/FormLayout"
import { titulo, subtitulo } from "./Formulario.module.css"
import { useFetchData, useFromLocation } from "../../hooks"
import { snackbarManager, register as userRegister } from "../../services"
import { Loader } from "../Loader"
import { schemaRegister } from "../../schemas"
import { Link, useNavigate } from "react-router-dom"

export const Formulario = () => {
  const navigate = useNavigate()
  const { from } = useFromLocation()
  const { loading, fetch } = useFetchData(userRegister)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaRegister),
  })

  const onSubmit = (user) => {
    const newUser = structuredClone(user)
    delete newUser.confirmPassword
    const { promise } = fetch({ data: newUser })
    promise.then(() => {
      navigate(from, { replace: true })
    })
  }

  if (loading) <Loader />

  return (
    <FormLayout>
      <h1 className={titulo}>Formulario Registro</h1>
      <div className={subtitulo}>
        {" "}
        Por favor, ingrese sus datos para registrarse
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CamposRegister
          register={register}
          name="identificacion"
          errors={errors.identificacion}
          label="Identificación"
        />
        <CamposRegister
          register={register}
          name="first_name"
          errors={errors.first_name}
          label="Nombre"
        />
        <CamposRegister
          register={register}
          name="last_name"
          errors={errors.last_name}
          label="Apellido"
        />
        <CamposRegister
          register={register}
          name="email"
          errors={errors.email}
          label="Correo"
        />
        <CamposRegister
          register={register}
          name="password"
          type="password"
          errors={errors.password}
          label="Contraseña"
        />
        <CamposRegister
          register={register}
          name="confirmPassword"
          type="password"
          errors={errors.confirmPassword}
          label="Confirmar Contraseña"
        />
        <p>
          Ya tienes una cuenta?
          <span> </span>
          <Link to="/login">Inicia Sesión</Link>
        </p>
        <Button type="submit">Registrarme</Button>
      </form>
    </FormLayout>
  )
}
