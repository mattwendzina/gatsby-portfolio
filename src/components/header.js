import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import classes from "./header.module.scss"
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import navigation from "../constants/navigation"
import social from "../constants/social"
import { RiMenu3Line } from "react-icons/ri"

const Header = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  console.log(isOpen)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
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
    <header className={classes.Header}>
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
    </header>
  )
}

export default Header
