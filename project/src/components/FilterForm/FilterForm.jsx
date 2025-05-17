import { Button } from "../Buttons"

export const FilterForm = ({ handleSubmit, className, children }) => {
  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
      <Button type="submit">Filtrar</Button>
    </form>
  )
}
