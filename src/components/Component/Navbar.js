import React from "react"
import './Navbar.scss'

function Navbar() {
    return (
     <div className="navbar__nav">
        <div className="BrainFlix__first__container">
            <img src="Logo/BrainFlix-logo.svg" className="BrainFlix__logo"></img>
        </div>

        <div className="BrainFlix__second__container">  
           
           <img className="search__icon" src="Icons/search.svg"></img>
    
           <input className="search__box" type="text" placeholder= "Search..." ></input>
         
            <img src="Icons/upload.svg" className="upload"></img>
            <button  className="navbar__button">UPLOAD</button>
            <img src="Images/Mohan-muruge.jpg" className="Mohan__placeholder"></img>
      
        </div>
     </div>
    )
}

export default Navbar 