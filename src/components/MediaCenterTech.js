import React from 'react'
import Docker from '../images/docker.png'
import Html from '../images/html.png'
import BS from '../images/bootstrap.png'
import Alpine from '../images/alpine.png'
import MDB from '../images/mongodb.png'
import GL from '../images/golang.jpg'
import Berry from '../images/berry.jpg'

const MediaCenterTech = () => (
  <div 
      className="container"
      style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "stretch",
      alignContent: "center",
    }}>
    <img src={ Html } style={{height: 48}} alt=""/>
    <img src={ BS } style={{height: 48}} alt=""/>
    <img src={ MDB } style={{height: 48}} alt=""/>
    <img src={ Alpine } style={{height: 48}} alt=""/>
    <img src={ Docker } style={{height: 48}} alt=""/>
    <img src={ GL } style={{height: 48}} alt=""/>
    <img src={ Berry } style={{height: 48}} alt="" />
  </div>

)
export default MediaCenterTech