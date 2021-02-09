/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles"
import theme from "../theme/theme.js"

const MuiTheme = createMuiTheme(theme)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
          author
          githubUrl
          twitterUrl
        }
      }
      avatar: file(relativePath: { eq: "TCS_main.png" }) {
        childImageSharp {
          fixed(height: 84) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <MuiThemeProvider theme={MuiTheme}>
      <Header
        siteDescription={data.site.siteMetadata.description}
        avatar={data.avatar}
        twitterUrl={data.site.siteMetadata.twitterUrl}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}. Built by
          {` `}
          <a
            target="_blank"
            rel="noreferrer"
            href={data.site.siteMetadata.githubUrl}
          >
            {data.site.siteMetadata.author}
          </a>
          .
        </footer>
      </div>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
