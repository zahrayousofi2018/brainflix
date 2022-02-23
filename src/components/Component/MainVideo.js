import React, { Component } from 'react';
import './MainVideo.scss'
import './Videos'
// import axios from "axios";


class MainVideo extends Component {
   

render() {

    console.log(this.props)

    return (
        <section className="MainVideo">
             <Main video={this.props.video}></Main>
        </section >
      )
      }}


export default MainVideo

    function Main(props) {
        // const [video] = props.video
       
        return (
           <div className= "main__video__container">
              <div className= "main__video__image__container">
               <img src={props.video.image} className= "main__video__image" alt="main video"/>
               <img src="Icons/play.svg" className="play__icon" alt="play icon"></img>
               <img src="Icons/fullscreen.svg" className="full__screen" alt="full screen"></img>
               <img src="Icons/pause.svg" className="pause__icon" alt="pause"></img>
               <img src="Icons/volume_up.svg" className="volume__up" alt="volume__up"></img>
               
              </div>
              <div className="main__video__text__container">
               <h3 className="main__video__header"> {props.video.title}</h3>
               <p>{props.video.channel}</p>
              </div>
          </div>
       )
   }
   ;

