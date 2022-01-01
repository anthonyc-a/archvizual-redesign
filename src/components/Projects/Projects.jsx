import React from "react"
import Flickity from "react-flickity-component"
import { FilterStateContext } from "../Context/ToggleFilterProvider"
import { publicProjects } from "./ProjectData/PublicProjects"
import { conceptProjects } from "./ProjectData/ConceptProjects"
import { residentialProjects } from "./ProjectData/ResidentialProjects"
import Project from "./Project/Project"

const flickityOptions = {
  initialIndex: 0,
  freeScroll: true,
  friction: 0.01,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  dragThreshold: 1,
  selectedAttraction: 0.2,
  cellAlign: "center",
}

const Projects = () => {
  const filter = React.useContext(FilterStateContext)

  return (
    <div className="project-contain">
      <div className="project-carousel">
        {filter.filter === "public" && (
          <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={true}
            reloadOnUpdate={true}
          >
            {publicProjects.map((project, i) => (
              <Project project={project} key={i} />
            ))}
          </Flickity>
        )}

        {filter.filter === "concept" && (
          <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={true}
            reloadOnUpdate={true}
          >
            {conceptProjects.map((project, i) => (
              <Project project={project} key={i} />
            ))}
          </Flickity>
        )}

        {filter.filter === "residential" && (
          <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={true}
            reloadOnUpdate={true}
          >
            {residentialProjects.map((project, i) => (
              <Project project={project} key={i} />
            ))}
          </Flickity>
        )}
      </div>
    </div>
  )
}

export default Projects
