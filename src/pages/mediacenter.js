import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageThree from "../components/imagethree"

const MediaCenterPage = () => (
  <Layout>
    <SEO title="MediaCenter Page" />
    <h1 id="P2">Hi from Media Center</h1>
    
    <ImageThree/>
    <p>Welcome to page 23333332</p>
    <Link to="/ampnado/">Go Back To Ampnado Page</Link>
    <p>
      <Link to="/deployments/">Go To Deployments Page</Link>
    </p>
  </Layout>
)

export default MediaCenterPage
