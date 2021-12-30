import React from "react"
import Flickity from "react-flickity-component"

const flickityOptions = {
  initialIndex: 1,
  freeScroll: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  dragThreshold: 1,
  selectedAttraction: 0.6,
  friction: 0.1,
}

const Projects = () => {
  return (
    <div className="project-contain">
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <a href="/" className="card"></a>
        <a href="/" className="card"></a>
        <a href="/" className="card"></a>
      </Flickity>
    </div>
  )
}

export default Projects
