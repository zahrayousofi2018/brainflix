import React, { Component } from 'react';
import './MainVideo.scss'
import './Videos'
import axios from "axios";


class MainVideo extends Component {
   
    state = {
    mainVideoData: [],
    };

    updateVideos(array){
    this.setState({
      nextVideoData: array,
    });
}
  
 
  componentDidMount() {
     axios
     .get("https://project-2-api.herokuapp.com/videos?api_key=74bc90a5-a15b-42e3-b65e-1c82a08e64d3")
     .then((response) => {
       console.log(response.data[0])
       this.updateVideos(response.data);
     
   }
   );
  }

  componentDidUpdate () {
    axios
    .get("https://project-2-api.herokuapp.com/videos?api_key=74bc90a5-a15b-42e3-b65e-1c82a08e64d3")
    .then((response) => {
      this.updateVideos(response.data);
    });
  }



  

render() {

    return (
        <section className="MainVideo">
             <Main video={this.props.video}></Main>
        </section >
      )
      }}



export default MainVideo

    function Main(props) {
        const [video] = props.video
       
        return (
           <div className= "main__video__container">
              <div className= "main__video__image__container">
               <img src={video.image} className= "main__video__image" alt="main video"/>
               <img src="Icons/play.svg" className="play__icon" alt="play icon"></img>
               <img src="Icons/fullscreen.svg" className="full__screen" alt="full screen"></img>
               <img src="Icons/pause.svg" className="pause__icon" alt="pause"></img>
               <img src="Icons/volume_up.svg" className="volume__up" alt="volume__up"></img>
               
              </div>
              <div className="main__video__text__container">
               <h3 className="main__video__header"> {video.title}</h3>
               <p>{video.channel}</p>
              </div>
          </div>
       )
   }
   ;

