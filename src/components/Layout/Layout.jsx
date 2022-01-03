import React from "react"
import Archive from "./Archive/Archive"
import ArchiveBtn from "./Archive/ArchiveBtn/ArchiveBtn"
import ContactBtn from "./ContactBtn/ContactBtn"
import Logo from "./Header/Logo/Logo"
import Scrollbar from "./Scrollbar/Scrollbar"

const Layout = ({ children }) => {
  const [archiveOpen, setArchiveOpen] = React.useState(false)
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

  return (
    <>
      <ContactBtn />
      <Logo />
      <ArchiveBtn archiveOpen={archiveOpen} setArchiveOpen={setArchiveOpen} />
      <Archive archiveOpen={archiveOpen} scrollTop={scrollTop} />
      <Scrollbar scrollTop={scrollTop} />
      <main>{children}</main>
    </>
  )
}

export default Layout
