import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/Layout"
import Projects from "../components/Projects/Projects"
import "../styles/index.scss"

const index = () => {
  return (
    <>
      <Helmet>
        <title>Home | Archvizual</title>
      </Helmet>
      <Layout>
        <Projects />
      </Layout>
    </>
  )
}

export default index
