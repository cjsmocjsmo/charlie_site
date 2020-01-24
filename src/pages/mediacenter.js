import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MediaCenterImage from "../components/MediaCenterImage"
import MediaCenter from '../components/MediaCenterTech'

const MediaCenterPage = () => (
  <Layout>
    <SEO title="MediaCenter Page" />
    <h1 id="P2">MediaCenter</h1>
    <div style={{height: 30}}></div>
    <p>MediaCenter is written in Golang and is primarily meant to be used on
      the <a href="/">Raspberry Pi</a>.  MediaCenter is a mashup of two other
      projects MovieGo and TVGo.  MediaCenter was written to solve three main
      problems.
    </p>
    <div style={{maxWidth: 400, margin: "auto"}}>
      <MediaCenterImage />
    </div>
    <div style={{height: 30}}></div>
    <p>
      <h4>Problem 1</h4>
      The inherent limited storage capability of the Raspberry Pi, 
      depending on the size of the SD card used that could only be 128GB.
      But with the help of a USB expansion board or "hat" that allows you
      to bolt on a HHD or SSD of your choice.  This basically turns the PI
      into a NAS on steroids.  I have around 2TB of movies being served up
      by MediaCenter.
    </p>
    <p>
      <h4>Problem 2</h4>
      Most CPU based video players have a hard time on the Raspberry Pi however
      Omxplayer is a video player that was written in C++ especially for the 
      Raspberry Pi's  Broadcom VideoCore chipset with near DVD video quality 
      playback in my opinion. 
    </p>
    <p>
      <h4>Problem 3</h4>
      I have one of those cheap TV's that's dumber than a box of rocks, it 
      has no smart capabilities, this is where the Raspberry Pi comes in.  
      It is a cheap way of turning my dumb TV into a smarter one.  
    </p>
    <p>
      MediaCenter can be accessed from any device that has a web browser.
      Currently Omxplayer playback is only supported.  Per device support
      is not there yet.  I find that an old phone can be used as a MovieGo 
      remote control.
    </p>

    <MediaCenter />
    <div style={{height: 30}}></div>
    <Link to="/ampnado/">Go Back To Ampnado Page</Link>
    <p>
      <Link to="/deployments/">Go To Deployments Page</Link>
    </p>
  </Layout>
)

export default MediaCenterPage
