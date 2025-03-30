import { createContext, useState } from "react"

export const modalContext = createContext()

export function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(null)

  const openModal = (modalId) => setModal(modalId)

  const closeModal = () => setModal(null)

  return <modalContext.Provider value={{ modal, setModal, openModal, closeModal }}>{children}</modalContext.Provider>
}

