import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import classes from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={classes.Footer}>
      <p> Created by {data.site.siteMetadata.author}, © 2020</p>
    </div>
  )
}

export default Footer
