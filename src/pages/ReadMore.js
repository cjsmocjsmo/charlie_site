import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import ImageTwo from "../components/imagetwo"
// import PDF from '../images/resume.pdf'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <p>
      <h3>Education</h3>
      Graduated from Denison High School Denison Texas.  I went on to graduate
      with an Associates Degree in Nursing from Indiana State University,
      Terra Haute Indiana.  I have no formal Computer Science education, 
      I am completely self taught so let me tell you about my open source 
      journey.
    </p>
    <p>
      <h3>Journey Begins</h3>
      It all started one day when I had just installed my Windows XP 
      service-pack 2 updates (2001) and I was looking around for a way to 
      organize all of my MP3s.  After looking around the net for a while 
      I found <Link to="http://Ampache.org">Ampache</Link> so I started 
      reading the docs and found out to get Ampache up and running 
      you needed to install Apache, MySql, and PHP on a Linux machine (LAMP).
      As I found out Apache, MySql and PHP couldn't be installed on Windows 
      back then so I had to make a decision stay with Windows and forget 
      about using Ampache or give linux a try.
    </p>
    <p>
      <h3>Ubuntu</h3>
      I found and tried a little known linux distribution called 
      Ubuntu 4.10 (Warty Warthog) it was billed as being one on the most user 
      friendly linux flavors, so I gave it a try.  I have been using either 
      Debian or Ubuntu ever since.  Got Ampache installed and running in about 
      a day after learning some basic commandline tools such as ls mkdir mv.  
      I liked Ubuntu so much I became a community member, at this same time I 
      was also active in the Ampache community.  Ampaches lead developer 
      jokingly said to me one day, it sure would be nice to be able to apt-get 
      install Ampache so I took that as my que to get Ampnado into the Debian 
      Archives.  So I went to work learning the Ubuntu/Debian ecosystems and 
      packaging tools such as dpkg, apt, deb, pbuilder, cowbuilder, svn, 
      svn-buildpackage (Debian Python Packaging Team before git), git and
      git-buildpackage, bzr and bzr-buildpackage (

    , Ubuntus launchpad bug tracker and Debians email bug tracker.  While I 
    was learning this I was applying what I learned to the Ampache project 
    and actually got Ampache accepted by the world famous Debian FTP Masters 
    and had it included into the Debian archives.  Most if not all the 
    packages in the Debian archive are synced over to Ubuntu.

    Up to this point to get any of my bug fixes or new packages uploaded to 
    the archive I needed a Ubuntu/Debian developer with upload permissions or 
    a Master Of The Universe repository (MOTU).  This grew tiresome so I 
    applied for and was accepted into the ranks of MOTU (126 people world wide).
    That allows me to work on and upload any of about 20,000 packages to 
    include any NEW package I feel the community would benifit from.  But with 
    great power comes great responsibility.  As MOTU we are gatekeepers
    to the archive tasked with not only uploading bug fixes and new package 
    we also keep garbage out and get non-maintained packages removed.  During 
    this time I was introduced to Python. 
    </p>
    <p>
      <h4>Python</h4>
      Like any new programer I was having 
      a hard time thinking of a project that would help teach me.  So I thought 
      why not reproduce Ampache except with a different technology stack like 
      HTML5, CSS, JQuery, JQuery-Mobile, MongoDB, python Tornado and make it 
      into an SPA.  And so Ampnado was born (see projects page).
    </p>
  

    <Link to="/ampnado/">Go To Ampnado Page</Link>
    {/* <p>
      <Link to="/">Go To Home Page</Link>
    </p> */}
  </Layout>
)

export default IndexPage