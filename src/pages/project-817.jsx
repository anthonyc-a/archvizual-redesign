import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { BsChevronLeft } from "react-icons/bs"
import Layout from "../components/Layout/Layout"
import "../styles/index.scss"
import ProjectPageImg from "../components/ProjectPage/ProjectPageImg"
import { project_817 } from "../components/Projects/ProjectImg/Project817"

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

const Project37 = () => {
  return (
    <>
      <Helmet>
        <title>Project | 817 - Archvizual</title>
      </Helmet>
      <Layout>
        <div className="project-page-contain">
          <div className="project-page-img-contain">
            {project_817.map((item, i) => (
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
                <motion.h3 variants={pageItem}>Project | 817</motion.h3>
                <motion.span variants={pageItem}>2017</motion.span>
              </div>
              <motion.div variants={pageItem} className="project-page-type">
                <span>Residential House</span>
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

export default Project37
