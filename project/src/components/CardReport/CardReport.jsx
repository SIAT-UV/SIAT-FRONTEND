import { useEffect } from "react"
import {
  wrapper,
  scrollMessage,
  reportContainer,
  reportHeader,
  reportBody,
  listTitles,
  listValues,
} from "./CardReport.module.css"
import { useRef } from "react"
import { useState } from "react"
import { REPORT_FIELDS } from "../../constants"
import { capitalizeLastWord } from "../../utilities"

export const CardReport = ({ report }) => {
  const scrollRef = useRef(null)
  const [showMessage, setShowMessage] = useState(false)

  const filteredReport = { ...report }
  delete filteredReport[REPORT_FIELDS.REPORT_ID]
  filteredReport[REPORT_FIELDS.CONFIRMED] = report[REPORT_FIELDS.CONFIRMED]
    ? "Sí"
    : "No"

  const titles = Object.keys(filteredReport).map((key) =>
    capitalizeLastWord(key),
  )
  const values = Object.values(filteredReport)

  useEffect(() => {
    const scrollContainer = scrollRef.current

    const handleScroll = () => {
      if (scrollContainer.scrollLeft > 0) {
        setShowMessage(false)
      }
    }

    if (
      scrollContainer &&
      scrollContainer.scrollWidth > scrollContainer.clientWidth
    ) {
      setShowMessage(true)
    }

    scrollContainer.addEventListener("scroll", handleScroll)

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={wrapper} ref={scrollRef}>
      <div className={reportContainer}>
        <header className={reportHeader}>
          <ul className={listTitles}>
            {titles.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </header>
        <section className={reportBody}>
          <ul className={listValues}>
            {values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </section>
      </div>
      {showMessage && <div className={scrollMessage}>Desliza para ver mas</div>}
    </div>
  )
}
