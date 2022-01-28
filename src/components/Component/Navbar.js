import React from "react"
import './Navbar.scss'

function Navbar() {
    return (
     <div className="navbar__nav">
        <div>
            <img src="./BrainFlix-logo.svg"></img>
            <h3>BrainFlix</h3>
        </div>

        <div>
           <input type="text" placeholder= "Search..." ></input>
        </div>

        <div>
            <button className="navbar__button">UPLOAD</button>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24"/></g><g><path d="M7.4,10h1.59v5c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-5h1.59c0.89,0,1.34-1.08,0.71-1.71L12.7,3.7 c-0.39-0.39-1.02-0.39-1.41,0L6.7,8.29C6.07,8.92,6.51,10,7.4,10z M5,19c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1s-0.45-1-1-1H6 C5.45,18,5,18.45,5,19z"/></g></svg>
        </div>
     </div>
    )
}

export default Navbar 