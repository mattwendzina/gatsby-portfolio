import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import classes from "./header.module.scss"
import navigation from "../constants/navigation"
import social from "../constants/social"
import { RiMenu3Line } from "react-icons/ri"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      defaultbkg: file(relativePath: { eq: "images/gray-surface.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

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
    <div className={classes.Header}>
      <div className={classes.headerMainContainer}>
        <div className={classes.title}>
          <Link to="/">
            <p className={classes.firstName}> Matt </p>
            <p className={classes.lastName}>
              Wendz<span className={classes.transformLetter}>i</span>na{" "}
            </p>
          </Link>
        </div>
        <nav className={classes.navigation}>
          <ul className={classes.navLinks}>{navigationLinks}</ul>
          <button className={classes.menuBtn} onClick={toggleNav}>
            <RiMenu3Line className={classes.menuIcon} />
          </button>
        </nav>
      </div>
      <div>
        <ul className={classes.socialMedia}>{socialLinks}</ul>
      </div>
      <div
        className={
          !isOpen
            ? `${classes.navContainerClosed}`
            : `${classes.navContainerOpen}`
        }
      >
        <ul
          className={!isOpen ? `${classes.hideLinks}` : `${classes.showLinks}`}
        >
          {navigationLinks}
        </ul>
      </div>
    </div>
  )
}

export default Header
