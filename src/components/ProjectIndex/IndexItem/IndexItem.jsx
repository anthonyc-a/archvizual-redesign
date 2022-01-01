import React from "react"
import { motion } from "framer-motion"

const inItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.51, 0.92, 0.24, 1],
      duration: 0.5,
    },
  },
}

const IndexItem = ({ item, key }) => {
  const [selected, setSelected] = React.useState(null)

  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const i = key

  return (
    <li
      onMouseEnter={() => {
        toggle(i)
      }}
      onMouseLeave={() => {
        setSelected(null)
      }}
    >
      <a href="/">
        <div className="info-contain">
          <span>{item.tag}</span>
          <div style={{ display: "inline-block", overflow: "hidden" }}>
            <motion.h3 variants={inItem}>{item.name}</motion.h3>
          </div>
        </div>
        <div className="index-arrow">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.08643 1H20.9999V17.9127" stroke="#CCCCCC" />
            <path d="M20.9983 1L1 20.9994" stroke="#CCCCCC" />
          </svg>
        </div>
      </a>

      <div className={selected === i ? "item-img active" : "item-img"}>
        <img src={item.img} alt="" />
      </div>
    </li>
  )
}

export default IndexItem
