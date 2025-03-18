import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./AppRouter"
import { Header } from "./components/Header"
import { useEffect } from "react"
import { register } from "./services/register"

export const App = () => {
  useEffect(() => {
    register({ cedula: "512121", first_name: "Rony", last_name: "Muñoz", email: "rony@jsas.com", password: "1234567" }).then((res) => console.log(res.data))
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  )
}
