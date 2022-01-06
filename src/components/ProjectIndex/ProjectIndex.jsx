import React from "react"
import { motion } from "framer-motion"
import { FilterStateContext } from "../Context/ToggleFilterProvider"
import { allProjects } from "../Projects/ProjectData/AllProjects"
import { publicIndexProjects } from "../Projects/ProjectData/PublicIndexData"
import { conceptIndexProjects } from "../Projects/ProjectData/ConceptIndexData"
import { residentialIndexProjects } from "../Projects/ProjectData/ResidentialIndexData"
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
      {filter.filter === "all" && (
        <motion.ul
          variants={indexItems}
          initial="hidden"
          animate={archiveOpen === true ? "show" : "hidden"}
        >
          {allProjects.map((item, i) => (
            <IndexItem archiveOpen={archiveOpen} item={item} key={i} />
          ))}
        </motion.ul>
      )}

      {filter.filter === "public" && (
        <motion.ul
          variants={indexItems}
          initial="hidden"
          animate={archiveOpen === true ? "show" : "hidden"}
        >
          {publicIndexProjects.map((item, i) => (
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
          {conceptIndexProjects.map((item, i) => (
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
          {residentialIndexProjects.map((item, i) => (
            <IndexItem archiveOpen={archiveOpen} item={item} key={i} />
          ))}
        </motion.ul>
      )}
    </div>
  )
}

export default ProjectIndex
