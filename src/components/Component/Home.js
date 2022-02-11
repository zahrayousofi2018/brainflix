import React, { Component } from "react";
import Comments from './components/Component/Comments'
import NextVideos from './components/Component/Videos'
import Description from './components/Component/Description'
import Navbar from './components/Component/Navbar'
import MainVideo from './components/Component/MainVideo'
import NewComments from './components/Component/NewComment'

class Home extends Component {
    render(){
        return(
 <div className = "App">
      <div className="Navbar">
        <Navbar/>
      </div>
        
      <div className="video__main">  
        <MainVideo video={this.props.mainVideoData}/>
      </div>

     <div className="container">
        <div>
          <div>
          <Description/>
          </div>

          <div>
          <NewComments/>
          </div>

          <div className="comment__section">
           <Comments commentInformation ={this.props.customerComments[0]}></Comments>
           <Comments commentInformation ={this.props.customerComments[1]}></Comments>
           <Comments commentInformation ={this.props.customerComments[2]}></Comments>
          </div>
       </div>
     
       <div className="videos">
         <NextVideos clickhandler={(newVal)=>this.clickhandler(newVal)}/>
       </div>    

      </div>

    </div>
   

        )
    }
}

export default Home;