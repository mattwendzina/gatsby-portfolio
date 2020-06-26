import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import classes from "./footer.module.scss"
import social from "../constants/social"
import navigation from "../constants/navigation"
import StyledHero from "./StyledHero"

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

  const socialLinks = social.map((link, idx) => {
    return (
      <li key={idx}>
        <a href={link.url} target="_blank">
          {link.icon}
        </a>
      </li>
    )
  })

  const navigationLinks = navigation.map((link, idx) => {
    return (
      <li key={idx}>
        <Link
          to={link.path}
          className={classes.links}
          activeClassName={classes.activeNavItem}
        >
          {link.text}
        </Link>
      </li>
    )
  })

  return (
    <div className={classes.Footer}>
      <div className={classes.navLinks}>{navigationLinks}</div>
      <ul className={classes.socialMedia}>{socialLinks}</ul>
      <p> Created by {data.site.siteMetadata.author}, © 2020</p>
    </div>
  )
}

export default Footer
