import React from "react";
import './Hero.css';
import worldmap from '../img/worldmap.png';


const Hero = () => {
  return (
    <header>
    <img className="world" src={worldmap}></img>
    <h2 className ="title">The world</h2>
    </header>
  )
}
export default Hero