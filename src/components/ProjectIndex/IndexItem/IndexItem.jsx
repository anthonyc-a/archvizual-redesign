import React from "react"
import { motion } from "framer-motion"

const item = {
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

const IndexItem = () => {
  return (
    <li>
      <a href="/">
        <div className="info-contain">
          <span>02—022</span>
          <div style={{ display: "inline-block", overflow: "hidden" }}>
            <motion.h3 variants={item}>Project | 38</motion.h3>
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
    </li>
  )
}

export default IndexItem
