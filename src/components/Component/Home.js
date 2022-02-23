// import React from "react";
import React, { Component } from "react";
import axios from "axios";
// import Comments from './Comments'
import NextVideos from './Videos'
import Description from './Description'
// import Navbar from './Navbar'
// import MainVideo from './MainVideo'
import NewComment from './NewComment'


// function Home () {

export const API_URL= "https://project-2-api.herokuapp.com/videos";

  class Home extends Component {
    state = {
    nextVideoData: [],
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
       console.log(response)
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

render () {
return (

   <div className = "App">
      <div className="Navbar">
        {/* <Navbar/> */}
      </div>


      {/* <div>
        <h1 className="header">Comments</h1>
        <NewComment comments={this.state.comments} />
      </div> */}

        
      {/* <div className="video__main">  
        <MainVideo video={this.state.mainVideoData}/>
      </div> */}

     <div className="container">
        <div>
          <div>
          <Description/>
          </div>

          <div>
          <NewComment/>
          </div>

          {/* <div className="comment__section">
           <Comments commentInformation ={customerComments[0]}></Comments>
           <Comments commentInformation ={customerComments[1]}></Comments>
           <Comments commentInformation ={customerComments[2]}></Comments>
          </div> */}

       </div> 
     
       <div className="videos">
          <NextVideos nextVideos= {this.state.nextVideoData} clickhandler={(newVal)=>this.clickhandler(newVal)}/>
           {/* {nextVideosData.map((element, index)=> {
                return <Videos video={element} key={'video' + index}  clickhandler = {props.clickhandler}/>; */}


         {/* {this.state.nextVideoData.map(nextVideo => <h3 key={nextVideo.id}>{nextVideo.title}{nextVideo.channel}{nextVideo.image}</h3>)} */}

          
        
       </div>   

      
      </div>

      </div>
  )
  }
}

  // };
 
//  const customerComments =  [
//     {firstName: "Michael", lastName: "Lyons", comment: "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.", date: "08/09/2021"},

//     {firstName: "Gary", lastName: "Wong", comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like hin one day so I can really enjoy myself!", date: "07/15/2021"},

//     {firstName: "Theodore", lastName: "Duncan", comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitly my favorite ever!", date: "07/11/2021"},
  // ];


  // axios
  //    .get("https://project-2-api.herokuapp.com/?api_key=74bc90a5-a15b-42e3-b65e-1c82a08e64d3")
  //    .then((response) => {
  //      console.log(response)
  //      this.updateVideos(response.data);
     
  //  }
  //  );

  

export default Home;

