import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <>

    <div className = "hero-content">
      <h1 className = "titleOne">Instant Event Access</h1><br></br>
      <h1 className = "titleTwo">
        Just <span className = 'animated-text'>Register</span> And <span className='animated-text'>Done</span>
      </h1>
    </div>

    <div className = "hero-content">
      <h4 className = "titleThree">Get all your events in one place — just register , and we'll keep you updated with timely notifications</h4><br></br>
      <h4 className = "titleFour">Managing events has never been easier</h4>
    </div>

    <div className = "hero-content">
      <h3 className = "titleFive">Built With</h3><br></br>
      </div>
      <div style = {{display : "flex" , width : "100%" , textAlign : "center" , justifyContent : "center" , border : "0px" , gap : "40px" , padding : "0px"}}>
      <div id = "one"/>
      <div id = "two"/>
      <div id = "three"/>
      <div id = "four"/>
    </div>

    <div className = "hero-content">
      <h3 className = "titleSix">ONGOING EVENTS</h3><br></br>
    </div>

    </>

  );
}

export default Hero;
