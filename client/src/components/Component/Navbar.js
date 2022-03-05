import React from "react"
import './Navbar.scss'
import { Link } from "react-router-dom";

function Navbar() {
    return (
     <div className="navbar__nav">
        <div className="BrainFlix__first__container">
            <Link to="/" className="BrainFlix__link">
            <img src="Logo/BrainFlix-logo.svg" className="BrainFlix__logo" alt="logo"></img>
            </Link>
        </div>

        <div className="BrainFlix__second__container">  
            <img src="Images/Mohan-muruge.jpg" className="Mohan__nav__placeholder__two" alt="Mohan placeholder"></img>
           <input className="search__box" type="text" placeholder= "Search..." ></input>
          <img className="search__icon" src="Icons/search.svg" alt="search__icon"></img>
    
            <Link to= "/Uploads" className="Upload__link">
            <button  type="button" className="navbar__button">
                <span class="button__text">UPLOAD</span>
                <span class="button__icon">
                  <img src="Icons/upload.svg" className="upload" alt="upload"></img>
                </span>
            </button>
            </Link>

            <img src="Images/Mohan-muruge.jpg" className="Mohan__nav__placeholder__one" alt="Mohan placeholder"></img>
      
        </div>
     </div>
    )
}

export default Navbar 