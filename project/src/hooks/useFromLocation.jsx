import { useLocation } from "react-router-dom"

export const useFromLocation = (defaultPath = "/") => {
  const location = useLocation()

  return { from: location.state?.from?.pathname ?? defaultPath }
}
