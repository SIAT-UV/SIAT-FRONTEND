import { useAuthContext } from "../../hooks"
import { Popup } from "../Popup"
import { ProfileHeader } from "./ProfileHeader"
import { ProfileMenu } from "./ProfileMenu"

export const Profile = () => {
  const { user, logout } = useAuthContext()
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
