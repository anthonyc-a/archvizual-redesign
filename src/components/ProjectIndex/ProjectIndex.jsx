import React from "react"
import { motion, useAnimation } from "framer-motion"
import IndexItem from "./IndexItem/IndexItem"

const indexItems = {
  show: {
    transition: {
      staggerChildren: 0.125,
      delayChildren: 0.25,
    },
  },
}

const ProjectIndex = ({ archiveOpen }) => {
  return (
    <div className="project-index-contain">
      <motion.ul
        variants={indexItems}
        initial="hidden"
        animate={archiveOpen === true ? "show" : "hidden"}
      >
        <IndexItem archiveOpen={archiveOpen} />
        <IndexItem archiveOpen={archiveOpen} />
        <IndexItem archiveOpen={archiveOpen} />
      </motion.ul>
    </div>
  )
}

export default ProjectIndex
