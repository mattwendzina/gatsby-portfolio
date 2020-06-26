import React from "react"

import Header from "./Header"
import Footer from "./Footer"

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
