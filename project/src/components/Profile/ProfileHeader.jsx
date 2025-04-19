import { ProfileIcon } from "./ProfileIcon"
import { profileHeader } from "./ProfileHeader.module.css"

export const ProfileHeader = ({ username }) => {
  return (
    <div tabIndex={0} className={profileHeader}>
      <span>{username}</span>
      <ProfileIcon />
    </div>
  )
}
