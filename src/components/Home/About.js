import React from "react"
import Title from "../Title"
import classes from "./about.module.css"
import img from "../../images/headshot.jpg"

const About = () => {
  return (
    <section className={classes.About}>
      <Title title="About" />
      <div className={classes.aboutContent}>
        <div className={classes.aboutPicture}>
          <img src={img} alt="react image" />
        </div>
        <div className={classes.aboutText}>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
