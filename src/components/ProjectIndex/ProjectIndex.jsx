import React from "react"
import { motion } from "framer-motion"
import { FilterStateContext } from "../Context/ToggleFilterProvider"
import { publicProjects } from "../Projects/ProjectData/PublicProjects"
import { conceptProjects } from "../Projects/ProjectData/ConceptProjects"
import { residentialProjects } from "../Projects/ProjectData/ResidentialProjects"
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
  const filter = React.useContext(FilterStateContext)

  return (
    <div className="project-index-contain">
      {filter.filter === "public" && (
        <motion.ul
          variants={indexItems}
          initial="hidden"
          animate={archiveOpen === true ? "show" : "hidden"}
        >
          {publicProjects.map((item, i) => (
            <IndexItem archiveOpen={archiveOpen} item={item} key={i} />
          ))}
        </motion.ul>
      )}
      {filter.filter === "concept" && (
        <motion.ul
          variants={indexItems}
          initial="hidden"
          animate={archiveOpen === true ? "show" : "hidden"}
        >
          {conceptProjects.map((item, i) => (
            <IndexItem archiveOpen={archiveOpen} item={item} key={i} />
          ))}
        </motion.ul>
      )}
      {filter.filter === "residential" && (
        <motion.ul
          variants={indexItems}
          initial="hidden"
          animate={archiveOpen === true ? "show" : "hidden"}
        >
          {residentialProjects.map((item, i) => (
            <IndexItem archiveOpen={archiveOpen} item={item} key={i} />
          ))}
        </motion.ul>
      )}
    </div>
  )
}

export default ProjectIndex
