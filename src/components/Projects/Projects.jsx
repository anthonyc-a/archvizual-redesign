import React from "react"
import Flickity from "react-flickity-component"
import Project from "./Project/Project"

const flickityOptions = {
  initialIndex: 1,
  freeScroll: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  dragThreshold: 1,
  selectedAttraction: 0.2,
  friction: 0.01,
}

const Projects = () => {
  return (
    <div className="project-contain">
      <div className="project-carousel">
        <Flickity
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          <Project />
          <Project />
          <Project />
        </Flickity>
      </div>
    </div>
  )
}

export default Projects
