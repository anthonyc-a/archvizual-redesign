import React from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { BsArrowDown } from "react-icons/bs"
import Layout from "../components/Layout/Layout"
import "../styles/index.scss"
import ProjectPageImg from "../components/ProjectPage/ProjectPageImg"

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

const project = () => {
  return (
    <>
      <Helmet>
        <title>Project | 38 - Archvizual</title>
      </Helmet>
      <Layout>
        <div className="project-page-contain">
          <div className="project-page-img-contain">
            <ProjectPageImg url="http://archvizual.com/wp-content/uploads/2017/05/gl_prev_19-1140x757.jpg" />
            <ProjectPageImg url="http://archvizual.com/wp-content/uploads/2017/05/pr_36.jpg" />
            <ProjectPageImg url="http://archvizual.com/wp-content/uploads/2017/05/pr_37.jpg" />
            <ProjectPageImg url="http://archvizual.com/wp-content/uploads/2017/05/pr_38.jpg" />
            <ProjectPageImg url="http://archvizual.com/wp-content/uploads/2017/05/pr_39.jpg" />
            <ProjectPageImg url="http://archvizual.com/wp-content/uploads/2017/05/pr_41.jpg" />
          </div>
          <div className="project-page-info-contain">
            <motion.div
              className="project-page-info"
              variants={pageItems}
              initial="hidden"
              animate="show"
            >
              <div className="project-info-section project-page-header">
                <motion.h3 variants={pageItem}>Project | 38</motion.h3>
                <motion.span variants={pageItem}>2017</motion.span>
              </div>
              <motion.div variants={pageItem} className="project-page-type">
                <span>Residential House</span>
              </motion.div>
              <div className="project-info-section project-page-bottom">
                <motion.span variants={pageItem}>
                  <BsArrowDown size={10} />
                  Scroll down
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

export default project
