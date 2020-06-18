const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   //   console.log("actions: ", actions)
//   const { createNodeField } = actions
//   //   console.log("createNodeField: ", createNodeField)
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
