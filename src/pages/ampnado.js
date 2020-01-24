import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AmpnadoImage from "../components/AmpnadoImage"
import AmpnadoTech from '../components/AmpnadoTech'

const AmpnadoPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 id="P2">Ampnado</h1>
    <p>Ampnado is a MP3 organizer and music server.  Ampnado 
      catagorizes your music by Album, Artist, Song, along with 
      playlist creation and playback.
    </p>
      <div style={{maxWidth: 400, margin: "auto"}}>
        <AmpnadoImage />
    </div>
    <div style={{height: 20}}></div>
    <p>
      Ampnado is heavely 
      dependent on id3 tags for metadata and album cover art. 
      Ampnado has been written in python and utilizes the MongoDB 
      database for data persistence.  HTML, CSS, JQuery, 
      JQuery-Mobile were used for the front-end.  I have Ampnado 
      running on a Raspberry Pi with a 128GB microSD card.
    </p>
    <AmpnadoTech />
    <Link to="/">Go Back To Home Page</Link>
    <p>
      <Link to="/mediacenter">Go To MediaCenter Page</Link>
    </p>
  </Layout>
)

export default AmpnadoPage
