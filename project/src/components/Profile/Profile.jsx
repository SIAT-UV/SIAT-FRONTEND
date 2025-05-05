import { useAuthContext } from "../../hooks"
import { Popup } from "../Popup"
import { ProfileHeader } from "./ProfileHeader"
import { ProfileMenu } from "./ProfileMenu"

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
  const { user, logout } = useAuthContext()

  if (!user) return null

  return (
    <Popup
      header={<ProfileHeader username={user} />}
      menu={
        <ProfileMenu items={items}>
          <button type="button" onClick={logout}>
            Cerrar sesión
          </button>
        </ProfileMenu>
      }
    />
  )
}
