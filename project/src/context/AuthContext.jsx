import { createContext, useState } from "react"
import { initialState } from "../constants"
import { tokenService } from "../services"

export const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const user = window.localStorage.getItem("user")
    return user ? JSON.parse(user) : initialState
  })

  const login = (auth) => {
    setAuth(auth)
    tokenService.setToken(auth.access)
  }

  return <userAuthContext.Provider value={{ auth, login }}>{children}</userAuthContext.Provider>
}
