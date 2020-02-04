import React from 'react'
import Gat from '../images/gatsby.jpg'

const GatLogo = () => (
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
    <img src={ Gat } style={{height: 48}} alt="" />
  </div>

)

export default GatLogo