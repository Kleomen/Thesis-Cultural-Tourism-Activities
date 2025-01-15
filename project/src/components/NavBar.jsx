import React from 'react'
import creteIcon from '../icons/creteIcon.png'
import { FaGripLinesVertical } from "react-icons/fa";
import "./NavBar.css"
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="navBar">
        {/* Logo Image */}
        <img 
        src={creteIcon} 
        alt="Crete Logo" 
        style={{ width: '50px', height: '50px', marginRight: '10px' }} 
        />               
      
        <div>Crete Cultural Tourism</div>  
        <FaGripLinesVertical /> 
        
        <Link to="/">Home</Link>
        <Link to="/about-crete">About Crete</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/map">Map</Link>
        <Link to="/plan-your-trip">Plan Your Trip</Link>
        <Link to="/experiences">Experiences</Link>

    </div>
  )
}
