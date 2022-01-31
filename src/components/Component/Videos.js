import React from 'react';
import './Videos.scss';
// import MainVideo from './MainVideo';

export default function NextVideos () {
    const nextVideosData = [
       
         {"id":"c05b9a93-8682-4ab6-aff2-92ebb4bbfc14",
         "title":"Become A Travel Pro In One Easy Lesson",
         "channel":"Todd Welch",
         "image":"https://i.imgur.com/5qyCZrD.jpg"},

         {"id":"25ce5d91-a262-4dcf-bb87-42b87546bcfa",
         "title":"Les Houches The Hidden Gem Of The Chamonix",
         "channel":"Cornelia Blair",
         "image":"https://i.imgur.com/yFS8EBr.jpg"},

         {"id":"b6f35f03-7936-409b-bd2a-446bcc5f30e7",
         "title":"Travel Health Useful Medical Information For",
         "channel":"Glen Harper",
         "image":"https://i.imgur.com/MMDMgD7.jpg"},

         {"id":"1b964601-a6dd-4fcc-b5f3-1000338c9557",
         "title":"Cheap Airline Tickets Great Ways To Save",
         "channel":"Emily Harper",
         "image":"https://i.imgur.com/ibLw5q5.jpg"},

         {"id":"9c268c0a-83dc-4b96-856a-bb5ded2772b1",
         "title":"Take A Romantic Break In A Boutique Hotel",
         "channel":"Ethan Owen",
         "image":"https://i.imgur.com/7rD6Mf6.jpg"},

         {"id":"fc5261d1-58a0-47e4-9c19-2b7a1715fa1b",
         "title":"Choose the Perfect Accommodations",
         "channel":"Lydia Perez",
         "image":"https://i.imgur.com/0hi3N4B.jpg"},

         {"id":"99478bed-6428-49ed-8eaa-f245a5414336",
         "title":"Cruising Destination Ideas",
         "channel":"Timothy Austin",
         "image":"https://i.imgur.com/DDJNZNw.jpg"},

         {"id":"76ca28c0-7dea-4553-887f-8e5129a80fc3",
         "title":"Train Travel On Track For Safety",
         "channel":"Scotty Cranmer",
         "image":"https://i.imgur.com/i6S8m7I.jpg" 
        }
    ];

    return (
        <section className ="next__videos">
            <h2>NEXT VIDEOS</h2>
            {nextVideosData.map((element, index)=> {
                return <Videos clickHandler = {() => console.log("Change Me")}  video={element} key={'video' + index} />;
            })}
        </section>
    )
};


function Videos(props) {
     return (
       
         <div onClick={() => props.clickHandler()} className="next__video__main__container">
        <div className= "next__video__container">
           <div className= "next__video__image__container">
            <img src= {props.video.image} className= "next__video__image"/>
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


