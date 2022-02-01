import React from "react"
import './MainVideo.scss'

//make this state component //






///

export default function MainVideo () {
    const mainVideoData = [
        {
         "id":"84e96018-4022-434e-80bf-000ce4cd12b8",
         "title":"BMX Rampage: 2021 Highlights",
         "channel":"Red Cow",
         "image":"https://i.imgur.com/l2Xfgpl.jpg"
        },
    ];

         return (
            <section className ="MainVideo">
                {mainVideoData.map((element, index)=> {
                    return <Main video={element} key={'mainVideo' + index} />;
                })}
            </section>
        )
    };


    function Main(props) {
        return (
           <div className= "main__video__container">
              <div className= "main__video__image__container">
               <img src= {props.video.image} className= "main__video__image" alt="main video"/>
              </div>
              <div className="main__video__text__container">
               <h3 className="main__video__header"> {props.video.title}</h3>
               <p>{props.video.channel}</p>
              </div>
          </div>
       )
   }
   ;

    // export default MainVideo;