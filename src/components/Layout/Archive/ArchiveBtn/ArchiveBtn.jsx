import React from "react"

const ArchiveBtn = ({ archiveOpen, setArchiveOpen }) => {
  const itemLoop = () => {
    var listItems = []
    for (var i = 0; i < 9; i++) {
      listItems.push(<div key={i} className="btn-item"></div>)
    }
    return listItems
  }

  return (
    <a href="#" className="archive-btn-contain">
      <div
        className={!archiveOpen ? "archive-btn" : "archive-btn active"}
        onClick={() => {
          setArchiveOpen(!archiveOpen)
        }}
      >
        {itemLoop()}
      </div>
    </a>
  )
}

export default ArchiveBtn
