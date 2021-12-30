import React from "react"
import Archive from "./Archive/Archive"
import ArchiveBtn from "./Archive/ArchiveBtn/ArchiveBtn"
import ContactBtn from "./ContactBtn/ContactBtn"
import Logo from "./Header/Logo/Logo"

const Layout = ({ children }) => {
  const [archiveOpen, setArchiveOpen] = React.useState(false)

  return (
    <>
      <ContactBtn />
      <Logo />
      <ArchiveBtn archiveOpen={archiveOpen} setArchiveOpen={setArchiveOpen} />
      <Archive archiveOpen={archiveOpen} />
      <main>{children}</main>
    </>
  )
}

export default Layout
