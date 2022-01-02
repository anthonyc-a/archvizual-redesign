import React from "react"

const Project = ({ project, key }) => {
  const [selected, setSelected] = React.useState(null)

  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const i = key
  return (
    <a
      href="/"
      className="project"
      onMouseEnter={() => {
        toggle(i)
      }}
      onMouseLeave={() => {
        setSelected(null)
      }}
    >
      <div className="project-tag">{project.tag}</div>
      <div className="project-img">
        <div className="img-contain">
          <img
            src={project.img}
            alt=""
            className={selected === i ? "proj-img active" : "proj-img"}
          />
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
