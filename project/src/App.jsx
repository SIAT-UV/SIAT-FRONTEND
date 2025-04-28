import { AppProviders } from "./AppProviders"
import { AppRouter } from "./AppRouter"

export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  )
}
