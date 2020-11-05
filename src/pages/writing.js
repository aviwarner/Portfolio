import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Writing = () => (
  <Layout>
    <SEO title="Writing" />
    <h1>Writing will go here</h1>
    <p>Like Blog posts</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Writing
