import { useSyncExternalStore } from "react"

const subscribe = (observer) => {
  window.addEventListener("resize", observer)

  return () => {
    window.removeEventListener("resize", observer)
  }
}

const getSnapshot = () => window.innerWidth < 968

export const useMobile = () => {
  return useSyncExternalStore(subscribe, getSnapshot)
}
