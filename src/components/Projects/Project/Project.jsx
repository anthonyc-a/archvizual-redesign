import React from "react"
import img1 from "../../../images/proj1.jpg"
import { data } from "../ProjectData"

const Project = () => {
  return (
    <>
      {data.map((item, i) => (
        <a href="/" className="project" key={i}>
          <div className="project-tag">{item.tag}</div>
          <div className="project-img">
            <div className="img-contain">
              <img src={item.img} alt="" />
            </div>
          </div>
          <div className="project-info">
            <div className="project-name">{item.name}</div>
            <div className="project-type">{item.type}</div>
          </div>
        </a>
      ))}
    </>
  )
}

export default Project
