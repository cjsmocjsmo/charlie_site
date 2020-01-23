import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageThree from "../components/imagethree"

const MediaCenterPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1 id="P2">Hi from the third page</h1>
    
    <ImageThree/>
    <p>Welcome to page 23333332</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MediaCenterPage
