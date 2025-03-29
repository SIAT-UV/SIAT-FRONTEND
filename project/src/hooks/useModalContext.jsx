import { useContext } from "react"
import { modalContext } from "../context"

export const useModalContext = () => {
  const context = useContext(modalContext)

  if (!context) {
    throw new Error("useModalContext must be used within a ModalContextProvider")
  }

  return context
}
