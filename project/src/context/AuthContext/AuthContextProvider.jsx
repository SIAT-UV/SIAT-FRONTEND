import { Loader } from "../../components/Loader"
import { STATUS } from "../../constants"
import { useAuthRefresh } from "../../hooks"
import { userAuthContext } from "./AuthContext"

export function UserAuthContextProvider({ children }) {
  const { user, status, login, logout } = useAuthRefresh()

  if (status === STATUS.loading) {
    return <Loader />
  }

  return <userAuthContext.Provider value={{ user, status, login, logout }}>{children}</userAuthContext.Provider>
}
