import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AmpnadoPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 id="P2">Ampnado</h1>
    <p> Put some stuff here</p>
    <Image />
    <p>Welcome to page 2</p>



    <Link to="/">Go To Home Page</Link>
    <p>
      <Link to="/mediacenter">Go To MediaCenter Page</Link>
    </p>
  </Layout>
)

export default AmpnadoPage
