import React from "react"

import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
import Banner from "../components/Banner"

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
