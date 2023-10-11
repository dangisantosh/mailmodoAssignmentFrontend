import React from 'react'
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div className='navbar_top'>
        <span style={{fontWeight:"800", fontSize:"20px", marginLeft:"3px"}}>Database Query Manager: MongoDB</span>
      <a href="https://drive.google.com/file/d/10Dw_yfjJRAEyS3UNKkFgGRapkY2xT8Tj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <span style={{marginRight:"3px"}}>Sample Queries</span>
      <FontAwesomeIcon icon={faFilePdf} style={{marginRight:"20px"}}/>
      
      </a>
      
    </div>
  )
}

export default Navbar
