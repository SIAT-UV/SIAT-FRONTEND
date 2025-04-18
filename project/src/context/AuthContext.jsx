import { useEffect, useState } from "react"
import { createContext } from "react"
import { refresh, tokenService } from "../services"
import { Loader } from "../components/Loader"

export const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
  const [isRefreshing, setIsRefreshing] = useState(true)
  const [user, setUser] = useState(null)

  const login = (user) => {
    if (!user) return

    setUser(user.username)
    tokenService.setToken(user.access)
  }

  const logout = () => {
    setUser(null)
    tokenService.setToken(null)
  }

  useEffect(() => {
    const { call, controller } = refresh()

    call
      .then((response) => {
        login({ username: response.data.user?.nombre, access: response.data.access })
      })
      .catch((error) => {
        if (error.code === "ERR_CANCELED") return

        logout()
      })
      .finally(() => {
        setIsRefreshing(false)
      })

    return () => {
      controller.abort()
    }
  }, [])

  if (isRefreshing) {
    return <Loader />
  }

  return <userAuthContext.Provider value={{ user, login, logout }}>{children}</userAuthContext.Provider>
}
