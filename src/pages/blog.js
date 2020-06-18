import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import classes from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM DD YYYY")
          }
        }
      }
    }
  `)

  const mappedData = (
    <ul className={classes.posts}>
      {data.allContentfulBlogPost.edges.map((edge, idx) => {
        return (
          <Link
            className={classes.post}
            key={edge.node.title + idx}
            to={`/blog/${edge.node.slug}`}
          >
            <li>
              <h2>{edge.node.title}</h2>
              <h4> {edge.node.publishedDate} </h4>
            </li>
          </Link>
        )
      })}
    </ul>
  )

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1> Blog</h1>
        {mappedData}
      </Layout>
    </div>
  )
}

export default BlogPage
