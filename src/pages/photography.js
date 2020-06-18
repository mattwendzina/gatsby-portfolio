import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import classes from "./photography.module.scss"

const Photography = () => {
  return (
    <Layout>
      <Head title="Photography" />
      <h1>
        {" "}
        I love photography <span className={classes.embelish}>.</span>{" "}
      </h1>
      <h3>Here's some of my favourite work!</h3>
    </Layout>
  )
}

export default Photography
