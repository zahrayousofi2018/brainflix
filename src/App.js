import React, { Component } from "react";
import './App.scss';
import Navbar from './components/Component/Navbar'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Component/Home";
import Uploads from "./components/Component/Uploads";


export const API_URL ="https://project-2-api.herokuapp.com/videos";

  class App extends Component {
    // constructor() {                     
    //   super();
    //   this.state = {
    //          mainVideoData: [
    //     {"id":"84e96018-4022-434e-80bf-000ce4cd12b8",
    //     "title":"BMX Rampage: 2021 Highlights",
    //     "channel":"Red Cow",
    //     "image":"https://i.imgur.com/l2Xfgpl.jpg"},
    //     ]
    //   }
    // }
    // clickhandler(newVal){
    //   console.log(newVal)

    //   this.setState({
    //     mainVideoData: [newVal]
    //   })
    // }
  
  render() {
    
  return (
       <div>
       <BrowserRouter>
       <Navbar/>
       <Switch>
         <Route path="/" exact> <Home/> </Route>
         <Route path={"/videos/:id"} render={(routerProps) => <Home  nextVideoData =  {this.state.nextVideoData}{...routerProps} /> } />
       <Route path= "/Uploads" component ={Uploads}/>
       </Switch>
       </BrowserRouter>
       </div>
       
  )
  };
};

  export default App;