import React from 'react'
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div className='navbar_top'>
        <span style={{fontWeight:"800", fontSize:"20px", marginLeft:"3px"}}>Database Query Manager</span>
      <a href="https://drive.google.com/file/d/1Z244REojL6bvnhxkfYhQA6_ClSkannBe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
     
      <FontAwesomeIcon icon={faFilePdf} />

      </a>
      
    </div>
  )
}

export default Navbar
