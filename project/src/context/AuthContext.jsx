import { createContext } from "react"

export const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
  const login = (auth) => {}

  return <userAuthContext.Provider value={{ login }}>{children}</userAuthContext.Provider>
}
