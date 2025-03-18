import React from 'react'

const NavBar = () => {
    
  return (

    <div>

    <nav class = "navbar" id = "navbar">
        <ul class = "nav-links">

          <div className = "logo"/>
          <span style = {{lineHeight : "35px" , marginLeft : "-2px" , fontFamily : "consolas" , fontWeight : "bolder" , fontSize : "25px" , opacity : "0.8"}}>
          RCOEM
          </span>
          <li id = "home"><a href = "#">About</a></li>
          <li><a href = "#">Contact</a></li>           
          <li><a href = "#">Preference</a></li>
          <div id = "customButton">
          <span id = "starIconTwo"></span>
          <span
          style = {{color : "rgb(73,77,80)" , fontFamily : 'Geist Mono, monospace' , fontSize : "14px" , fontWeight : "bold" , marginTop : "1px"}}>
          Give a Star</span>
          <span id = "starIcon"></span>
          </div>

          <div id = "socialIcons">

            <div id = "s1"/>
            <div id = "s2"/>
            <div id = "s3"/>

          </div>

        </ul>
    </nav>

    </div>

  )

}

export default NavBar