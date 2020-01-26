import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AWSDepLogo from '../components/AWSDepLogo'
import HerokuDepLogo from '../components/HerokuDepLogo'
const DeploymentsPage = () => (
  <Layout>
    <SEO title="Deployments Page" />
    <h1 id="P2">Cloud Deployments</h1>
    
  
    <p>To make myself familiar with the Cloud ecosystem, I have
      deployed several sites with an assortment of cloud providers.
    </p>
    <p>
        <h2>AWS Cloud Services</h2>
        <Link to="http:/54.200.123.91:9191/">
          MyBlog
        </Link>
        <p style={{marginTop: 20}}>
          <AWSDepLogo />
        </p>
    </p>
    <p>
        <h2>Heroku Cloud Services</h2>
        <a href="https://aqueous-shore-04475.hrokuapp.com/alphatree">
          AlpaTree
        </a>
        {/* <Link to="http:/54.200.123.91:9191/">
          link2
        </Link> */}
    </p>
    <p style={{marginTop: 20}}>
      <HerokuDepLogo />
    </p>
    <div style={{height: 30}}></div>


    {/* <Link to="/alphatree/">Go Back To AlphaTree Page</Link> */}
    <p>
        <Link to="/">Go To Home Page</Link>
    </p>
  </Layout>
)

export default DeploymentsPage
