import { NotifyCard } from "./NotifyCard"

export const Notify = ({ error, variant }) => {
  const { name, message } = error

  return (
    <NotifyCard variant={variant}>
      <span>{name}</span>
      <span>{message}</span>
    </NotifyCard>
  )
}
