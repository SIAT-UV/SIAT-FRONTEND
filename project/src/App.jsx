import { AppRouter } from "./AppRouter"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Breadcrumb } from "./components/Breadcrumb/Breadcrumb"
import { Modal } from "./components/Modal/Modal"
import { Formulario } from "./components/Register/"
import { Login } from "./components/Login/"

export const App = () => {
  return (
    <>
      <Modal modalId="register">
        <Formulario />
      </Modal>
      <Modal modalId="login">
        <Login />
      </Modal>
      <Header />
      <main>
        <Breadcrumb />
        <AppRouter />
      </main>
      <Footer />
    </>
  )
}
