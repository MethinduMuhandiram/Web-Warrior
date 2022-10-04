import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects I have created</h3>
      </div>
      <div className={styles.projects}>
        {projects.map(project => {
          return (
            <Link key={project.id} to={"/projects/" + project.frontmatter.slug}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          )
        })}
      </div>
      <p>Contact Me : {contact}</p>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
