import React, { Component } from "react";
// import Comments from './components/Component/Comments'
// import NextVideos from './components/Component/Videos'
import './App.scss';
// import Description from './components/Component/Description'
// import Navbar from './components/Component/Navbar'
// import MainVideo from './components/Component/MainVideo'
// import NewComments from './components/Component/NewComment'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Component/Home";
import Uploads from "./components/Component/Uploads";
import {Link} from 'react-router-dom'



  class App extends Component {
    constructor() {
      super();
      this.state = {
             mainVideoData: [
        {"id":"84e96018-4022-434e-80bf-000ce4cd12b8",
        "title":"BMX Rampage: 2021 Highlights",
        "channel":"Red Cow",
        "image":"https://i.imgur.com/l2Xfgpl.jpg"},
        ]
      }
    }
    clickhandler(newVal){
      console.log(newVal)

      this.setState({
        mainVideoData: [newVal]
      })
    }
  
  render() {


  // const customerComments =  [
  //   {firstName: "Michael", lastName: "Lyons", comment: "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.", date: "08/09/2021"},

  //   {firstName: "Gary", lastName: "Wong", comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like hin one day so I can really enjoy myself!", date: "07/15/2021"},

  //   {firstName: "Theodore", lastName: "Duncan", comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitly my favorite ever!", date: "07/11/2021"},
  // ];
  
  return (
       
       <BrowserRouter>
       <Link to ="/">Home</Link>
       <Switch>
         <Route path="/" exact>
           <Home video={this.state.mainVideoData} />
        </Route>
       <Route path= "/Uploads" component ={Uploads}/>
       </Switch>
       </BrowserRouter>
  )
  };
};

  export default App;