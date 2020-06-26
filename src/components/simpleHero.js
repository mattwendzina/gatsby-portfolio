import React from "react"
import classes from "./simpleHero.module.scss"

const SimpleHero = ({ children }) => {
  return <header className={classes.background}>{children}</header>
}

export default SimpleHero
