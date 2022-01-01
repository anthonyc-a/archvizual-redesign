import React from "react"
import { motion } from "framer-motion"
import { data } from "../Projects/ProjectData"
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
        {data.map((item, i) => (
          <IndexItem archiveOpen={archiveOpen} item={item} key={i} />
        ))}
      </motion.ul>
    </div>
  )
}

export default ProjectIndex
