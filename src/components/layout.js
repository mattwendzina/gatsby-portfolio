import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
import classes from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <div className={classes.mainContent}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
