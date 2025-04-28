import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Buttons"
import { CamposRegister } from "../CamposRegister/CamposRegister"
import { FormLayout } from "../FormLayout/FormLayout"
import { titulo, subtitulo } from "./Login.module.css"
import { useAuthContext, useFetchData, useFromLocation } from "../../hooks"
import { login } from "../../services"
import { Loader } from "../Loader"
import { schemaLogin } from "../../schemas"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  const from = useFromLocation()
  const { login: loginUser } = useAuthContext()
  const { loading, fetch } = useFetchData(login)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLogin),
  })

  const onSubmit = (user) => {
    const { promise } = fetch(user)
    promise.then((response) => {
      loginUser(response)
      navigate(from, { replace: true })
    })
  }

  if (loading) return <Loader />

  return (
    <FormLayout>
      <h1 className={titulo}>Iniciar Sesión</h1>
      <h2 className={subtitulo}>Ingresa tus datos para iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CamposRegister register={register} name="identificacion" errors={errors.identificacion} label="Identificación" />
        <CamposRegister register={register} type="password" name="contraseña" errors={errors.contraseña} label="Contraseña" />
        <p>
          No tienes una cuenta?
          <span> </span>
          <Link to="/register">Registrate</Link>
        </p>
        <Button type="submit">Iniciar Sesión</Button>
      </form>
    </FormLayout>
  )
}
