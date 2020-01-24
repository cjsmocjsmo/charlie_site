import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GOL from '../images/golang.jpg'
import Alpine from '../images/alpine.png'
import Docker from '../images/docker.png'
import BS from '../images/bootstrap.png'
import Html from '../images/html.png'
import AWS from '../images/aws.png'
import Heroku from '../images/heroku.jpg'

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
        <div 
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "stretch",
            alignContent: "center"

          }}>
          <img src={ AWS } style={{height: 60}}></img>
          <img src={ GOL } style={{height: 60}}></img>
          <img src={ Docker } style={{height: 60}}></img>
          <img src={ Alpine } style={{height: 60}}></img>
          <img src={ BS } style={{height: 60}}></img>
          <img src={ Html } style={{height: 60}}></img>
        </div>
        </p>
    </p>
    <p>
        <h2>Heroku Cloud Services</h2>
        <Link to="http:/54.200.123.91:9191/">
          AlpaTree
        </Link>
    </p>
    <p style={{marginTop: 20}}>
      
      <div 
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "stretch",
          alignContent: "center"

        }}>
          <img src={ Heroku } style={{height: 60}}></img>
          <img src={ GOL } style={{height: 60}}></img>
          <img src={ Docker } style={{height: 60}}></img>
          <img src={ Alpine } style={{height: 60}}></img>
          <img src={ BS } style={{height: 60}}></img>
          <img src={ Html } style={{height: 60}}></img>
      </div>
    </p>
    <div style={{height: 30}}></div>
    <Link to="/alphatree/">Go Back To AlphaTree Page</Link>
    <p>
        <Link to="/">Go To Home Page</Link>
    </p>
  </Layout>
)

export default DeploymentsPage
