import { useContext } from "react"
import { userAuthContext } from "../context"

export function useAuthContext() {
  const context = useContext(userAuthContext)

  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider")
  }

  return context
}
