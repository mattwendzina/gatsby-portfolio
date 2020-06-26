import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Banner from "../components/banner"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found =(" />
      <Banner title="Page not found!"></Banner>
      <Link to="/"> Head home</Link>
    </Layout>
  )
}

export default NotFound
