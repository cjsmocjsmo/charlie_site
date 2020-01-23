import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const AlphaTreePage = () => (
  <Layout>
    <SEO title="AlphaTree Page" />
    <h1 id="P2">AlphaTree Service</h1>
    
  
 



    <div style={{height: 30}}></div>
    <Link to="/mediacenter/">Go Back To MediaCenter Page</Link>
    <p>
        <Link to="/">Go To Home Page</Link>
    </p>
  </Layout>
)

export default AlphaTreePage
