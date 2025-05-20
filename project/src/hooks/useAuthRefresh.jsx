import { useEffect, useState } from "react"
import { STATUS } from "../constants"
import { useTokenService } from "./useTokenService"
import { refresh, tokenService } from "../services"

export const useAuthRefresh = () => {
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

    call()
      .then((response) => {
        login({
          username: response.data.username,
          access: response.data.access,
        })
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

  return { user, status, login, logout }
}
