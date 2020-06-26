import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1> About me </h1>
      <p>
        For the past year I have worked as a Junior Software Engineer for
        Bravissimo after having completed a 16 week bootcamp with the{" "}
        <a href="#">School of Code. </a>
      </p>
      <p>Previous to this I worked in the education sector for over 8 years.</p>
      <p>
        {" "}
        You can watch a video of myself and another bootcamper describing our
        experience of the bootcamp here:
      </p>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HR6bAoyn_6s"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p>
        Want to find out more?
        <Link to="/contact"> Feel free to contact me! </Link>
      </p>
    </Layout>
  )
}

export default AboutPage
