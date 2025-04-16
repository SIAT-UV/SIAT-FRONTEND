import { useState } from "react"
import { createContext } from "react"
import { tokenService } from "../services"

export const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (user) => {
    if (!user) return

    setUser(user.username)
    tokenService.setToken(user.access)
  }

  return <userAuthContext.Provider value={{ user, login }}>{children}</userAuthContext.Provider>
}
