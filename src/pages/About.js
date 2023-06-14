import React from 'react';
import BannerImage from "../assets/veg_wallpaper.jpg"
import "../styles/About.css";

function About() {
  return (
    <div className="about">

        <div 
        className='aboutTop'
        style={{ backgroundImage: `url(${BannerImage})`}}>
        </div>

        <div className='aboutBottom'>
            <h1> ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit. 
            </p>

        </div>
    </div>
  )
}

export default About