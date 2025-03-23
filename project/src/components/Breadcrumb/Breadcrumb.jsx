import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { BreadcrumNav } from "./BreadcrumNav"

export const Breadcrumb = () => {
  const { pathname } = useLocation()
  const paths = useMemo(() => pathname.split("/").filter(Boolean), [pathname])

  return <BreadcrumNav paths={paths} />
}
