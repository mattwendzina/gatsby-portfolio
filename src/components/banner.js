import React from "react"
import classes from "./banner.module.scss"

const Banner = ({ title, info, children }) => {
  return (
    <div className={classes.banner}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.subTitle}>{info}</p>
      {children}
    </div>
  )
}

export default Banner
