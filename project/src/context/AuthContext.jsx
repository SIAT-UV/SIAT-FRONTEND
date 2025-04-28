import { useEffect, useState } from "react"
import { createContext } from "react"
import { refresh, tokenService } from "../services"
import { Loader } from "../components/Loader"
import { useTokenService } from "../hooks/useTokenService"
import { STATUS } from "../constants"

export const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
  const { isAuthenticated } = useTokenService()
  const [status, setStatus] = useState(STATUS.loading)
  const [user, setUser] = useState(null)

  const login = (user) => {
    if (!user) return

    setUser(user.username)
    tokenService.setToken(user.access)
    tokenService.setIsAuthenticated(true)
    setStatus(STATUS.authenticated)
  }

  const logout = () => {
    setUser(null)
    tokenService.setToken(null)
    tokenService.setIsAuthenticated(false)
    setStatus(STATUS.unauthenticated)
  }

  useEffect(() => {
    const { call, controller } = refresh()

    call
      .then((response) => {
        login({ username: response.data.username, access: response.data.access })
      })
      .catch((error) => {
        if (error.code === "ERR_CANCELED") return

        logout()
      })

    return () => {
      controller.abort()
    }
  }, [])

  useEffect(() => {
    if (!user || isAuthenticated) return

    logout()
  }, [isAuthenticated, user])

  if (status === STATUS.loading) {
    return <Loader />
  }

  return <userAuthContext.Provider value={{ user, status, login, logout }}>{children}</userAuthContext.Provider>
}
