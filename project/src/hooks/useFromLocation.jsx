import { useLocation } from "react-router-dom"

export const useFromLocation = (defaultPath = "/") => {
  const location = useLocation()

  return location.state?.from?.pathname ?? defaultPath
}
