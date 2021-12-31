import React from "react"
import img1 from "../../../images/proj1.jpg"

const Project = () => {
  return (
    <a href="/" className="project">
      <div className="project-tag">02—022</div>
      <div className="project-img">
        <div className="img-contain">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="project-info">
        <div className="project-name">Project | 38</div>
        <div className="project-type">Residential</div>
      </div>
    </a>
  )
}

export default Project
