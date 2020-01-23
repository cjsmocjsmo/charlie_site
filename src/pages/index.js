import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import ImageTwo from "../components/imagetwo"
import PDF from '../images/resume.pdf'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p style={{marginTop: 20}}>
      Welcome to my projects page, my name is Charlie Smotherman and here
      is were I share some of my projects I have created with the world.
    </p>
    <a href={ PDF } >
      <button
        type="button" 
        style={{
          backgroundColor: "red",
          marginBottom: 35
          }}>
        <h1 style={{margin: "auto", color: "white"}}>HIRE ME</h1>
      </button>
    </a>

    <Link to="/ampnado/" >
      <h2>
        Ampnado
      </h2>
    </Link>
    <span style={{margin: 5}}></span>
    <Link to="/mediacenter/">
      <h2>
        MediaCenter
      </h2>
    </Link>
    <span style={{margin: 5}}></span>
      <Link to="/deployments/">
        <h2>
          AlphaTree
        </h2>
      </Link>
    <span style={{margin: 5}}></span>
    <Link to="/deployments/">
      <h2>
        Deployments
      </h2>
    </Link>
    <span style={{margin: 5}}></span>




    <div 
      style={{ 
        margin: 'auto', 
        maxWidth: `500px`, 
        marginBottom: `1.45rem`
      }}>
      {/* <Image />
      <ImageTwo/> */}
    </div>
    {/* <Link to="/ampnado/">Go To Ampnado Page</Link> */}
  </Layout>
)

export default IndexPage
