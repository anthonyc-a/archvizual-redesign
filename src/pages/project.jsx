import React from "react"
import { BsArrowDown } from "react-icons/bs"
import Layout from "../components/Layout/Layout"
import "../styles/index.scss"

const project = () => {
  return (
    <>
      <Layout>
        <div className="project-page-contain">
          <div className="project-page-img-contain">
            <div className="project-page-img">
              <img
                src="http://archvizual.com/wp-content/uploads/2017/05/gl_prev_19-1140x757.jpg"
                alt=""
              />
            </div>
            <div className="project-page-img">
              <img
                src="http://archvizual.com/wp-content/uploads/2017/05/pr_36.jpg"
                alt=""
              />
            </div>
            <div className="project-page-img">
              <img
                src="http://archvizual.com/wp-content/uploads/2017/05/pr_37.jpg"
                alt=""
              />
            </div>
            <div className="project-page-img">
              <img
                src="http://archvizual.com/wp-content/uploads/2017/05/pr_38.jpg"
                alt=""
              />
            </div>
            <div className="project-page-img">
              <img
                src="http://archvizual.com/wp-content/uploads/2017/05/pr_39.jpg"
                alt=""
              />
            </div>
            <div className="project-page-img">
              <img
                src="http://archvizual.com/wp-content/uploads/2017/05/pr_41.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="project-page-info-contain">
            <div className="project-page-info">
              <div className="project-info-section project-page-header">
                <h3>Project | 38</h3>
                <span>2017</span>
              </div>
              <div className="project-page-type">
                <span>Residential House</span>
              </div>
              <div className="project-info-section project-page-bottom">
                <span>
                  <BsArrowDown size={10} />
                  Scroll down
                </span>
                <span>02—022</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default project
