import { NotifyCard } from "./NotifyCard"

export const Notify = ({ error, variant }) => {
  console.log(error)

  return (
    <NotifyCard variant={variant}>
      <span>{error?.response.statusText}</span>
      <span>{error?.message}</span>
    </NotifyCard>
  )
}
