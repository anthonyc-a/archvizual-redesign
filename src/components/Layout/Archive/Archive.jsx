import React from "react"

const Archive = ({ archiveOpen }) => {
  return (
    <div className={!archiveOpen ? "archive" : "archive active"}>
      <div className="archive-contain">
        <div className="archive-header">
          <ul className="filter">
            <li>All</li>
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
      </div>
    </div>
  )
}

export default Archive
