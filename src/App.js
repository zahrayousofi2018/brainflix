import logo from './logo.svg';
import Comments from './components/Component/Comments'
import NextVideos from './components/Component/Videos'
import './App.scss';
import Description from './components/Component/Description'
// import './Videos.scss';


export default function App () {
  const customerComments =  [
    {firstName: "Michael", lastName: "Lyons", comment: "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.", date: "08/09/2021"},
    {firstName: "Gary", lastName: "Wong", comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like hin one day so I can really enjoy myself!", date: "07/15/2021"},
    {firstName: "Theodore", lastName: "Duncan", comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitly my favorite ever!", date: "07/11/2021"},
  ];

  return (
    <div className = "App">
      <div className="video__main">
        <h1>Main Video</h1>     
      </div>
      <div className= "description">
        <Description/>
      </div>
      <div className="videos">
         <NextVideos>
          

         </NextVideos>


      </div>
       <div className="comment__section">
      <section>
        <Comments commentInformation ={customerComments[0]}></Comments>
        <Comments commentInformation ={customerComments[1]}></Comments>
        <Comments commentInformation ={customerComments[2]}></Comments>
      </section>
      </div>
      
    </div>
  );
}




