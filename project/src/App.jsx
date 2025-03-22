import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./AppRouter"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}
