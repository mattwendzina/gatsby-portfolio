import React from "react"
import Title from "../Title"
import classes from "./about.module.css"
import Img from "gatsby-image"
import StyledHero from "../StyledHero"
import { useStaticQuery, graphql } from "gatsby"

const aboutImage = graphql`
  query headshotImage {
    headshotImage: file(relativePath: { eq: "images/headshot.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    defaultbkg: file(relativePath: { eq: "images/gray-surface.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

const About = () => {
  const { headshotImage } = useStaticQuery(aboutImage)
  const { defaultbkg } = useStaticQuery(aboutImage)

  return (
    <StyledHero
      img={defaultbkg.childImageSharp.fluid}
      className={classes.About}
    >
      <Title title="About" />
      <div className={classes.aboutContent}>
        <div className={classes.aboutPicture}>
          <Img fluid={headshotImage.childImageSharp.fluid} />
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
    </StyledHero>
  )
}

export default About
