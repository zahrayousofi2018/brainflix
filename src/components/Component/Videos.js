import React from 'react';
import './Videos.scss';
// import MainVideo from './MainVideo';


export default function NextVideos (props) {

    

    return (
        <section className ="next__videos">
            <h2 className="Next__Videos__Heading">NEXT VIDEOS</h2>
            {props.nextVideos.map((element, index)=> {
                // if element.id= this.props.nextVideos{ }
                return <Videos video={element} key={'video' + index}  clickhandler = {props.clickhandler}/>;

            })}


        </section>
    )
};


function Videos(props) {

     return (
       
         <div onClick={()=>props.clickhandler(props.video)} className="next__video__main__container">
        <div className= "next__video__container">
           <div className= "next__video__image__container">
            <img src= {props.video.image} className= "next__video__image" alt="next video"/>
           </div>
           <div className="next__video__text__container">
            <h3 className="next__video__header"> {props.video.title}</h3>
            <p className="next__video__paragraph">{props.video.channel}</p>
           </div>
           </div>
       </div>
    )
}
;




