import React from "react"
import ToggleFilterProvider from "./src/components/Context/ToggleFilterProvider"

export const wrapRootElement = ({ element }) => {
  return (
    <ToggleFilterProvider>
        {element}
    </ToggleFilterProvider>
  )
}