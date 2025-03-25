import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./AppRouter"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Breadcrumb } from "./components/Breadcrumb/Breadcrumb"

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Breadcrumb />
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
