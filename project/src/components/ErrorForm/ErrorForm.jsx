import { errorInfo } from "./ErrorForm.module.css"

export const ErrorForm = ({ error }) => {
  if (!error) return null

  return <p className={errorInfo}>{error.message}</p>
}
