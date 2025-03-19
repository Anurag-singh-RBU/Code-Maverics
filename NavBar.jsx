import React from 'react'

const NavBar = () => {
    
  return (

    <div>

    <nav class = "navbar" id = "navbar">
        <ul class = "nav-links">

          <div id = "logo"/>
          <span style = {{lineHeight : "35px" , marginLeft : "-2px" , fontFamily : "consolas" , fontWeight : "bolder" , fontSize : "25px" , opacity : "0.8"}}>
          RCOEM
          </span>
          <li id = "home"><a href = "#">About</a></li>
          <li><a href = "#">Contact</a></li>           
          <li><a href = "#">Preference</a></li>

        </ul>
    </nav>

    </div>

  )

}

export default NavBar