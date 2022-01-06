import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { BsChevronLeft } from "react-icons/bs"
import Layout from "../components/Layout/Layout"
import "../styles/index.scss"
import ProjectPageImg from "../components/ProjectPage/ProjectPageImg"
import { project_717 } from "../components/Projects/ProjectImg/Project717"

const pageItems = {
  show: {
    transition: {
      delayChildren: 0.125,
    },
  },
}

const pageItem = {
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

const Project717 = () => {
  return (
    <>
      <Helmet>
        <title>Project | 717 - Archvizual</title>
      </Helmet>
      <Layout>
        <div className="project-page-contain">
          <div className="project-page-img-contain">
            {project_717.map((item, i) => (
              <ProjectPageImg url={item.img} key={i} />
            ))}
          </div>
          <div className="project-page-info-contain">
            <motion.div
              className="project-page-info"
              variants={pageItems}
              initial="hidden"
              animate="show"
            >
              <div className="project-info-section project-page-header">
                <motion.h3 variants={pageItem}>Project | 717</motion.h3>
                <motion.span variants={pageItem}>2015</motion.span>
              </div>
              <motion.div variants={pageItem} className="project-page-type">
                <span>Public Space</span>
              </motion.div>
              <div className="project-info-section project-page-bottom">
                <motion.span href="" variants={pageItem}>
                  <BsChevronLeft size={10} />
                  <Link to="/">Back Home</Link>
                </motion.span>
                <motion.span variants={pageItem}>02—022</motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Project717
