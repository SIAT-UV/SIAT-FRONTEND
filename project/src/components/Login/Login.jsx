import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Buttons"
import { CamposRegister } from "../CamposRegister/CamposRegister"
import { FormLayout } from "../FormLayout/FormLayout"
import { titulo, subtitulo } from "./Login.module.css"
import { useAuthContext, useFetchData } from "../../hooks"
import { login } from "../../services"
import { Loader } from "../Loader"
import { userAuthContext } from "../../context"
import { schemaLogin } from "../../schemas"

export const Login = () => {
  const { login: loginUser } = useAuthContext(userAuthContext)
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
    promise.then((response) => console.log(response))
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
