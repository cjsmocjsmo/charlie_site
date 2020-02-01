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
      support for playlist creation and playback.
    </p>
      <div style={{maxWidth: 400, margin: "auto"}}>
        <AmpnadoImage />
    </div>
    <div style={{height: 20}}></div>
    <p>
      Ampnado is heavely dependent on ID3 tag information for metadata and
      album cover art which is embedded in the MP3's. Currently Ampnado only
      supports the MP3 format.  Due to the fact the majority of my music 
      collection is in the MP3 format.  I felt no need to include OGG support
      at this time I may include it at a later date.  This metadata is then 
      placed into a MongoDB database for persistence.
    </p>
    <p>
      I have Ampnado running on a Raspberry Pi that has a 128GB microSD 
      card with 13,000 songs and growing.  Due to copyright restrictions I
      cannot provide a decent demo.  Besides Ampnado was not designed to be out
      on the larger internet but instead to be isolated on my home network.  Ampnado
      is my programing playground.  I am always trying to find ways of making it
      faster, more effecient.  Some of the upcoming changes will be to move away from 
      JQuery-Mobile and upgrade to React, GraphQl for the front end ( this will probable
      be a major rewrite ).
    </p>
    <h3>Tec Used</h3>
    <AmpnadoTech />
    {/* <Link to="/">Go Back To Home Page</Link> */}
    <p>
      <Link to="/mediacenter">Go To MediaCenter Page</Link>
    </p>
  </Layout>
)

export default AmpnadoPage
