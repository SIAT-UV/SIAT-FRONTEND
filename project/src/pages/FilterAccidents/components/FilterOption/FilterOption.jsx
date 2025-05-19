import React from "react"

export const FilterOption = ({ selectedFilter, children }) => {
  const matchedChild = React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) && child.props.filter === selectedFilter,
  )

  return <>{matchedChild}</>
}
