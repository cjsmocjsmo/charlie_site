import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageThree from "../components/imagethree"

const MediaCenterPage = () => (
  <Layout>
    <SEO title="MediaCenter Page" />
    <h1 id="P2">MediaCenter</h1>
    
    <ImageThree/>
    <p>MediaCenter Page</p>
    <Link to="/ampnado/">Go Back To Ampnado Page</Link>
    <p>
      <Link to="/deployments/">Go To Deployments Page</Link>
    </p>
  </Layout>
)

export default MediaCenterPage
