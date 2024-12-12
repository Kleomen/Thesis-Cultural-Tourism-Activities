import React from 'react'
import creteIcon from '../icons/creteIcon.png'
import { FaGripLinesVertical } from "react-icons/fa";
import "./NavBar.css"

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
        <div>Home</div>
        <div>About Crete</div>
        <div>Activities</div>
        <div>Map</div>
        <div>Plan Your Trip</div>
        <div>Experiences</div>
        <div>"Language Flag"</div>
    </div>
  )
}
