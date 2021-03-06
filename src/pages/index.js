import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <SimpleHero>
        <Banner
          title="I am a Web Developer"
          info=" Based in
        Coventry, UK. "
        ></Banner>
      </SimpleHero>
      <About />
      {/* <h1>Welcome</h1>
      <p>
        My name is Matt Wendzina and I'm a junior web developer based in
        Coventry, UK.
      </p>

      <p>I am currently work for Bravissimo as a full stack developer.</p>

      <p>
        {" "}
        I was very lucky to train at the <a href="#"> School of Code</a>, a 16
        week, completely free, amazing bootcamp based in Birmingham (
        <a href="#"> message me </a> if you'd like to know more)
      </p>

      <p>
        {" "}
        You can find out more about me <a href="#"> here </a>, head over to my
        <a href="#"> CV </a> to find here more about my professional background,
        or take a look at some of the <a href="#"> projects </a> that I have
        been working on.
      </p>

      <p>
        {" "}
        Alternatively if you'd like to see some cool photography, then{" "}
        <a href="#"> click here </a>
      </p>

      <p>
        Need a Developer? <Link to="/contact"> Contact me.</Link>
      </p> */}
    </Layout>
  )
}

export default IndexPage
