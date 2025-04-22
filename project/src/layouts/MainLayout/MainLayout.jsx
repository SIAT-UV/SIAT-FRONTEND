import { Outlet } from "react-router-dom"
import { Breadcrumb } from "../../components/Breadcrumb"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
