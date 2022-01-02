import React from "react"

const Project = ({ project }) => {
  return (
    <a href={project.link} className="project">
      <div className="project-tag">{project.tag}</div>
      <div className="project-img">
        <div className="img-contain">
          <img src={project.img} alt="" />
        </div>
      </div>
      <div className="project-info">
        <div className="project-name">{project.name}</div>
        <div className="project-type">{project.type}</div>
      </div>
    </a>
  )
}

export default Project
