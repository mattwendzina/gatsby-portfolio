import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 150px)" : "unset")};
  background: ${props =>
    props.home
      ? "none"
      : "linear-gradient(rgb(58, 58, 58,0.8), rgba(58, 58, 58, 0.6))"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: ${props => (props.home ? "flex" : "block")};
  justify-content: ${props => (props.home ? "center" : "none")};
  align-items: ${props => (props.home ? "center" : "none")};
`
