import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const DeploymentsPage = () => (
  <Layout>
    <SEO title="Deployments Page" />
    <h1 id="P2">Cloud Deployments</h1>
    
  
    <p>These are my Cloud deployments.</p>
    <p>
        <h2>AWS Cloud Services</h2>
        <Link to="http:/54.200.123.91:9191/">
            
                MyBlog
            
        </Link>

    </p>
    <p>
        <h2>Huroku Cloud Services</h2>
        <Link to="http:/54.200.123.91:9191/">
           
                AlpaTree
            
        </Link>
        <p style={{marginTop: 20}}>
            <h4>Tech:</h4>
            Golang, Bootstrap 4, HTML

        </p>


      



    </p>




    <div style={{height: 30}}></div>
    <Link to="/mediacenter/">Go Back To MediaCenter Page</Link>
    <p>
        <Link to="/">Go To Home Page</Link>
    </p>
  </Layout>
)

export default DeploymentsPage
