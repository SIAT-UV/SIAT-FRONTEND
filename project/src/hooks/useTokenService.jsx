import { useSyncExternalStore } from "react"
import { tokenService } from "../services/token.service"

export const useTokenService = () => {
  return useSyncExternalStore(tokenService.subscribe.bind(tokenService), tokenService.getSnapshot.bind(tokenService))
}
