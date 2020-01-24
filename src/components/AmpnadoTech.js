import React from 'react'
import Docker from '../images/docker.png'
import Html from '../images/html.png'
import CSS from '../images/CSS3.png'
import JQM from '../images/jquery_mobile.png'
import MDB from '../images/mongodb.png'
import JQ from '../images/jquery-logo.png'
import PythonL from '../images/python-logo.png'


const AmpnadoTech = () => (
  <div 
      className="container"
      style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "center",
      alignItems: "stretch",
      alignContent: "center",
    }}>
      <img src={ Html } style={{height: 48}} alt="" />
      <img src={ CSS } style={{height: 48}} alt="" />
      <img src={ MDB } style={{height: 48}} alt="" />
      <img src={ JQ } style={{height: 48}} alt="" />
      <img src={ JQM } style={{height: 48}} alt="" />
      <img src={ Docker } style={{height: 48}} alt="" />
      <img src={ PythonL } style={{height: 48}} alt="" />
  </div>

)
export default AmpnadoTech