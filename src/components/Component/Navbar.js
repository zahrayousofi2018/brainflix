import React from "react"
import './Navbar.scss'

function Navbar() {
    return (
     <div className="navbar__nav">
        <div className="BrainFlix__first__container">
            <img src="Logo/BrainFlix-logo.svg" className="BrainFlix__logo" alt="logo"></img>
        </div>

        <div className="BrainFlix__second__container">  
            <img src="Images/Mohan-muruge.jpg" className="Mohan__nav__placeholder__two" alt="Mohan placeholder"></img>
           
           <input className="search__box" type="text" placeholder= "Search..." ></input>
          <img className="search__icon" src="Icons/search.svg" alt="search__icon"></img>
    
         
           
            <button  type="button" className="navbar__button">
                <span class="button__text">UPLOAD</span>
                <span class="button__icon">
                  <img src="Icons/upload.svg" className="upload" alt="upload"></img>
                </span>
                </button>
            <img src="Images/Mohan-muruge.jpg" className="Mohan__nav__placeholder__one" alt="Mohan placeholder"></img>
      
        </div>
     </div>
    )
}

export default Navbar 