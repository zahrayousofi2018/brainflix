import React from "react"
import './Navbar.scss'

function Navbar() {
    return (
     <div className="navbar__nav">
        <div className="BrainFlix__first__container">
            <img src="Logo/BrainFlix-logo.svg" className="BrainFlix__logo" alt="logo"></img>
        </div>

        <div className="BrainFlix__second__container">  
           
           <img className="search__icon" src="Icons/search.svg" alt="search__icon"></img>
    
           <input className="search__box" type="text" placeholder= "Search..." ></input>
           {/* <img src="Images/Mohan-muruge.jpg" className="Mohan__nav__placeholder__two" alt="Mohan placeholder"></img> */}
         
            <img src="Icons/upload.svg" className="upload" alt="upload"></img>
            <button  className="navbar__button">UPLOAD</button>
            <img src="Images/Mohan-muruge.jpg" className="Mohan__nav__placeholder__one" alt="Mohan placeholder"></img>
      
        </div>
     </div>
    )
}

export default Navbar 