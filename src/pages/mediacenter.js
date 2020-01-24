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
    <p>MediaCenter is written in Golang and is primarily meant to be used on the
      <a href="/">Raspberry Pi</a>.  MediaCenter is a mashup of two other projects
      MovieGo and TVGo.  MediaCenter was written to solve three main problems.
    </p>
    <div style={{maxWidth: 400, margin: "auto"}}>
      <MediaCenterImage />
    </div>
    <div style={{height: 30}}></div>
    <p>Problem one is the inherent limited storage capability of the Raspberry Pi, 
      depending on the size of the SD card used that could only be 64GB.  I have around
      2TB of movies and music setting on my NAS so some type of streaming solution is 
      needed.  
    </p>
    <p>Problem two would be the crappy video playback from most if not all the 
      video players out there.  Omxplayer is a video player that was written in C++ 
      especially for the Raspberry Pi's  Broadcom VideoCore chipset with near DVD video 
      quality playback in my opinion. Problem three, my poor TV is dumber than a box of 
      rocks and has no smart capabilities, this is where the Raspberry Pi comes in.  It 
      is a cheap way of turning my dumb TV into a smarter one.  
      
      
      
      MovieGo web front end and

      organizes your movies while the backend written in golang
      serve up your movies.  MovieGo can be accessed from any device that has a web browser.
      I find that an old phone can be used as a MovieGo remote control.

      is a proof of concept application for MovieGo.  I
      MovieTime so I would have a clear road map on what would and wouldnt work before
      attempting to write MovieGo.

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
