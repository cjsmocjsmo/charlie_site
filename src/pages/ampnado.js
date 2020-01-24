import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Amp from '../images/ampnado.png'

import GOL from '../images/golang.jpg'
import Alpine from '../images/alpine.png'
import Docker from '../images/docker.png'
import BS from '../images/bootstrap.png'
import Html from '../images/html.png'
import AWS from '../images/aws.png'
import Heroku from '../images/heroku.jpg'


const AmpnadoPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 id="P2">Ampnado</h1>
    <p>Ampnado is a MP3 organizer and music server.  Ampnado catagorizes
your music by Album, Artist, Song, along with playlist creation and playback.  Ampnado
is heavely dependent on id3 tags for metadata and album cover art. Ampnado has been
written in python and utilizes the MongoDB database for data persistence.
HTML, CSS, JQuery, JQuery-Mobile were used for the front-end.  I have
Ampnado running on a Raspberry Pi with a 128GB microSD card.
    </p>
    <div style={{maxWidth: 400, margin: "auto"}}>
        <Image />
    </div>
    <div style={{height: 20}}></div>
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
          <img src={ Heroku } style={{height: 48}} />
          <img src={ GOL } style={{height: 48}} />
          <img src={ Docker } style={{height: 48}} />
          <img src={ Alpine } style={{height: 48}} />
          <img src={ BS } style={{height: 48}} />
          <img src={ Html } style={{height: 48}} />
      </div>


    <div style={{height: 50}}></div>
    <Link to="/">Go Back To Home Page</Link>
    <p>
      <Link to="/mediacenter">Go To MediaCenter Page</Link>
    </p>
  </Layout>
)

export default AmpnadoPage
