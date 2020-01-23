import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import ImageTwo from "../components/imagetwo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 
      style={{
        marginTop: 50
      }}
    >
      Hello
    </h1>
    <p>
      Welcome to my projects page, my name is Charlie Smotherman and here
      is were I share some of my projects I have created with the world.
    </p>
    <Link to="/ampnado/">
      <h2>
        Ampnado
      </h2>
    </Link>
    <span style={{margin: 5}}></span>
    <Link to="/ampnado/">
      <h2>
        MediaCenter
      </h2>
    </Link>
    <span style={{margin: 5}}></span>
    
    <span style={{margin: 5}}></span>
    <Link to="http:/54.200.123.91:9191/">
      <h2>
        AWS Deployments
      </h2>
    </Link>
    <span style={{margin: 5}}></span>
    <Link to="/ampnado/">
      <h2>
        Huroku Deployments
      </h2>
    </Link>
    <span style={{margin: 5}}></span>
    <Link to="/page-3/">
      <h2>
        Page three
      </h2>
    </Link>


    <div 
      style={{ 
        margin: 'auto', 
        maxWidth: `500px`, 
        marginBottom: `1.45rem`
      }}>
      {/* <Image />
      <ImageTwo/> */}
    </div>
    <Link to="/ampnado/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
