import React from 'react'
import GOL from '../images/golang.jpg'
import Alpine from '../images/alpine.png'
import Docker from '../images/docker.png'
import BS from '../images/bootstrap.png'
import Html from '../images/html.png'
import Heroku from '../images/heroku.jpg'

const HerokuDepLogo = () => (
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
    <img src={ Heroku } style={{height: 48}} alt="" />
    <img src={ GOL } style={{height: 48}} alt="" />
    <img src={ Docker } style={{height: 48}} alt="" />
    <img src={ Alpine } style={{height: 48}} alt="" />
    <img src={ BS } style={{height: 48}} alt="" />
    <img src={ Html } style={{height: 48}} alt="" />
  </div>

)

export default HerokuDepLogo