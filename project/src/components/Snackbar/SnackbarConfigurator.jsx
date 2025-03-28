import { useSnackbar } from "notistack"
import { snackbarManager } from "../../services"

export const SnackbarConfigurator = () => {
  snackbarManager.setSnackbarRef(useSnackbar())
}
