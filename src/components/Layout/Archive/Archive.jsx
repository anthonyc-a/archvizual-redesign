import React from "react"
import { Helmet } from "react-helmet"
import ProjectIndex from "../../ProjectIndex/ProjectIndex"

const Archive = ({ archiveOpen }) => {
  return (
    <div className={!archiveOpen ? "archive" : "archive active"}>
      <Helmet>
        <body className={!archiveOpen ? "" : "archive-open"} />
      </Helmet>

      <div className="archive-contain">
        <div className="archive-header">
          <ul className="filter">
            <li>Public</li>
            <li>Concept</li>
            <li>Residential</li>
          </ul>

          <ul className="socials">
            <li>
              <a href="/" className="link-hover">
                Instagram
              </a>
            </li>
            <li>
              <a href="/" className="link-hover">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <ProjectIndex archiveOpen={archiveOpen} />
      </div>
    </div>
  )
}

export default Archive
