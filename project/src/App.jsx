import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Header } from "./components/Header";
import { useEffect } from "react";
import { register } from "./services/register";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
};
