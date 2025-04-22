import { AppRouter } from "./AppRouter"
import { Modal } from "./components/Modal/Modal"
import { Formulario } from "./components/Register/"

export const App = () => {
  return (
    <>
      <Modal modalId="register">
        <Formulario />
      </Modal>
      <AppRouter />
    </>
  )
}
