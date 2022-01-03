import React from "react"

const Scrollbar = ({ scrollTop }) => {
  return (
    <div className="scrollbar">
      <div
        className="scrollbar-inner"
        style={{ height: `${scrollTop}%` }}
      ></div>
    </div>
  )
}

export default Scrollbar
