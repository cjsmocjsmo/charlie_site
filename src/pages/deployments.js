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
        <h2>AWS Amplify</h2>
        {/* <a href="http://54.200.123.91:9191/"> */}
        <div>
          <a href="https://master.d2zt8y9jdefmo9.amplifyapp.com/">
            Charlie
          </a>
        </div>
        <div>
          <a href="https://master.d2tvn6b4xguc2q.amplifyapp.com">
            Hello/Goodbye
          </a>
        </div>
        <p style={{marginTop: 20}}>
          <AWSDepLogo />
        </p>

    </p>
    <p>
        <h2>Heroku Cloud Services</h2>
        <a href="https://aqueous-shore-04475.herokuapp.com/alphatree">
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
