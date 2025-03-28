import { useLocation } from "react-router-dom"
import { BreadcrumNav } from "./BreadcrumNav"

export const Breadcrumb = () => {
  const { pathname } = useLocation()
  const paths = pathname.split("/").filter(Boolean)

  return (
    <aside>
      <BreadcrumNav paths={paths} />
    </aside>
  )
}
