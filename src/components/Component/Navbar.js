import React from "react"
import './Navbar.scss'

function Navbar() {
    return (
     <div className="navbar__nav">
        <div>
            <img src="Logo/BrainFlix-logo.svg" className="BrainFlix__logo"></img>
        </div>

        <div>
           <input type="text" placeholder= "Search..." ></input>
        </div>

        <div>
            <img src="Icons/upload.svg" className="upload"></img>
            <button  className="navbar__button">UPLOAD</button>
        </div>
     </div>
    )
}

export default Navbar 