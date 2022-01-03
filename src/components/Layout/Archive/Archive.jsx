import React from "react"
import { Helmet } from "react-helmet"
import {
  FilterStateContext,
  FilterDispatchContext,
} from "../../Context/ToggleFilterProvider"
import ProjectIndex from "../../ProjectIndex/ProjectIndex"

const Archive = ({ archiveOpen }) => {
  const filter = React.useContext(FilterStateContext)
  const toggleFilter = React.useContext(FilterDispatchContext)
  const [scrollTop, setScrollTop] = React.useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100

    setScrollTop(scrolled)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onscroll)
  }, [])

  console.log(scrollTop)

  return (
    <div
      className={`${!archiveOpen ? "archive" : "archive active"} ${
        scrollTop > 2.5 ? "archive inactive" : "archive"
      }`}
    >
      <Helmet>
        <body className={!archiveOpen ? "" : "archive-open"} />
      </Helmet>

      <div className="archive-contain">
        <div className="archive-header">
          <ul className="filter">
            <li
              onClick={() => {
                toggleFilter({ type: "SET_PUBLIC" })
              }}
              className={filter.filter === "public" ? "active" : ""}
            >
              Public
            </li>
            <li
              onClick={() => {
                toggleFilter({ type: "SET_CONCEPT" })
              }}
              className={filter.filter === "concept" ? "active" : ""}
            >
              Concept
            </li>
            <li
              onClick={() => {
                toggleFilter({ type: "SET_RESI" })
              }}
              className={filter.filter === "residential" ? "active" : ""}
            >
              Residential
            </li>
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
