import { createContext, useContext, useState } from "react"
import { initialState } from "../constants"

export const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const user = window.localStorage.getItem("user")
    return user ? JSON.parse(user) : initialState
  })

  const login = (auth) => setAuth(auth)

  return <userAuthContext.Provider value={{ auth, login }}>{children}</userAuthContext.Provider>
}
