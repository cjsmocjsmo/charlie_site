import React from 'react'
import Gat from '../images/gatsby.jpg'
import AWS from '../images/aws.png'

const AWSDepLogo = () => (
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
    <img src={ AWS } style={{height: 48}} alt="" />
    <img src={ Gat } style={{height: 48}} alt="" />
  </div>

)

export default AWSDepLogo