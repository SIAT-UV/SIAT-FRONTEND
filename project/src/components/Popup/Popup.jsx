import { template, popup, popupMain } from "./Popup.module.css"

export const Popup = ({ header, menu, className }) => {
  return (
    <div className={template}>
      <div tabIndex={0} className={className ? `${popup} ${className}` : popup}>
        <div>{header}</div>
        <div className={popupMain}>{menu}</div>
      </div>
    </div>
  )
}
