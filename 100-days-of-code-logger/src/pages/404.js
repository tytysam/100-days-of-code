import React from "react"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 Error: Page not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
