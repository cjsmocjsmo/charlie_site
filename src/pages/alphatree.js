import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AlphaTreeImage from '../components/AlphaTreeImage'
import HerokuDepLogo from '../components/HerokuDepLogo'

const AlphaTreePage = () => (
  <Layout>
    <SEO title="AlphaTree Page" />

    <h1 id="P2">AlphaTree Service</h1>
    <p style={{marginTop: 30}}>
      AlphaTree is designed to give its owner a web presence, and to 
      mainly generate telephone leads.
    </p>
    <p> The website was built using HTML5
      and the BootStrap CSS framework. Golang was used to write the HTTP 
      server and a 

      was used to create the 17MB container image that is being
      hosted on Heroku Cloud Services
    </p>
    <div style={{maxWidth: 400, margin: "auto"}}>
      <AlphaTreeImage />
    </div>
    <div style={{height: 30}}></div>
    <HerokuDepLogo />
    <div style={{height: 30}}></div>
    {/* <Link to="/deployments/">Go Back To Deployments Page</Link> */}
    <p>
        <Link to="/deployments/">Go To Deployment Page</Link>
    </p>
  </Layout>
)

export default AlphaTreePage
