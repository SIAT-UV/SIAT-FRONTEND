import { useAuthContext, useFetchData } from "../../hooks"
import { Popup } from "../Popup"
import { ProfileHeader } from "./ProfileHeader"
import { ProfileMenu } from "./ProfileMenu"
import { logout as logoutUser } from "../../services"

const items = [
  {
    text: "Perfil",
    to: "/private/perfil",
  },
  {
    text: "Reportes",
    to: "/private/reportes",
  },
]

export const Profile = () => {
  const { fetch } = useFetchData(logoutUser)
  const { user, logout } = useAuthContext()

  const handleLogout = () => {
    const { promise } = fetch()
    promise
      .then(() => {
        logout()
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error)
      })
  }

  if (!user) return null

  return (
    <Popup
      header={<ProfileHeader username={user} />}
      menu={
        <ProfileMenu items={items}>
          <button type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </ProfileMenu>
      }
    />
  )
}
