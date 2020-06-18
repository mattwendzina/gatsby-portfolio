import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import classes from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={classes.Header}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <Link to="/">
            {" "}
            Wendz<span class={classes.transformLetter}>i</span>na{" "}
          </Link>
        </div>
        <div className={classes.navigation}>
          <ul>
            <li>
              <Link
                to="/about"
                className={classes.links}
                activeClassName={classes.activeNavItem}
              >
                About
              </Link>
            </li>
            <li className={classes.blog}>
              <Link
                to="/blog"
                className={classes.links}
                activeClassName={classes.activeNavItem}
              >
                Bl<span className={classes.embelish}>o</span>g
              </Link>
            </li>
            <li>
              <Link
                to="/photography"
                className={classes.links}
                activeClassName={classes.activeNavItem}
              >
                Photography
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={classes.links}
                activeClassName={classes.activeNavItem}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
