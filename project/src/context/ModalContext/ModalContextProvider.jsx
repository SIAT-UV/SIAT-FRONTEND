import { useState } from "react"
import { modalContext } from "./ModalContext"

export function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(null)

  const openModal = (modalId) => setModal(modalId)

  const closeModal = () => setModal(null)

  return <modalContext.Provider value={{ modal, setModal, openModal, closeModal }}>{children}</modalContext.Provider>
}
