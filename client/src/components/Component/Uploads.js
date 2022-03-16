// import { useHistory} from 'react-router-dom';
import React, { Component } from "react";
import "./Uploads.scss";
import { Link, Redirect} from "react-router-dom";
import axios from "axios"


class Uploads extends Component {
     state ={
       title: "",
       description: "",
       image:"",
     }
   handleChange = (event) => {
     this.setState({[event.target.name]: event.target.value},
  
      ) };
    
     istitleValid = () => {
       const title = this.state.title;
       if (title.length < 2 ) {
         return false;
       }
       return true;
     }

     isdescriptionValid = () => {
       const description = this.state.description;
       if(description.length < 2) {
         return false;
       }
       return true;
     }

     isFormValid = () => {
       const {title, description } = this.state;

       if (!title || !description ){
         return false;
       }

       if (!this.istitleValid()) {
         return false;
       }
       if (!this.isdescriptionValid()){
         return false;
       }
       if (title || description ){
       return 
        
       }
       return  <Redirect to= {"/"} />;
     };

    //  handleSubmit = (event) => {
    //    event.preventDefault();
    //    this.setState({
    //      title: event.target.title.value,
    //    })
    //   //  if(this.isFormValid()) {
    //   //    alert("Thank you for completing the form!")
    //   //  } else {
    //   //    alert("Please complete the form")
    //   //  }
    //   console.log("Hi", event)
    //  };

    //  routeChange = () => {
    //    let path = `/`;
    //    let history = useHistory();
    //    history.push(path);
    //  }

     handleUpload =(e)=> {
       e.preventDefault()
       axios.post('http://localhost:9000/videos', {
         title: this.state.title,
         channel: this.state.description,
         image: 'http://localhost:9000/static/imagesFile/image0.jpeg',
        });
        
    };
/*
1. get all the form information and print it


*/
   

render () {
console.log(this.state.title)
console.log(this.state.description)
   return(
    <div class="div">
      {/* <form method="POST" onSubmit= {(e)=> this.handleSubmit(e)} > */}
        <form method="POST" onSubmit= {(e)=> this.handleUpload(e)} >

           <div>
             <hr></hr>
             <h1 className="heading__text">Upload Video</h1>  
           </div>
      
        <div className="uploads__desktop__container">
        
             
             <div class="Uploads__video">
              <label className="uploads__label">VIDEO THUMBNAIL</label>
              <img src="Images/Upload-video-preview.jpg" alt="Uploads__Image"className="Uploads__image"/>
            </div>


          <div>

           <div>
             <label  className="uploads__label__title">TITLE YOUR VIDEO</label>
             <input value={this.state.title} onChange={this.handleChange} name="title" className="uploads__comment__box" type="text" placeholder= "Add a title to your video..." ></input> 
           </div>

           <div>
             <label className="uploads__label__description">ADD A VIDEO DESCRIPTION</label>
             <input value={this.state.description} onChange={this.handleChange} name="description" className="uploads__comment__box__description" type="text" placeholder= "Add a description to your video..." ></input>
            </div>
         </div>
         </div>
        
         <div className="buttons__uploads__div">
             <Link to="/">
            <button className="cancel__button__one"type="button">CANCEL</button>
              </Link>
            <button  value={this.state.image} onChange={this.handleChange} type="submit" className="publish__button">PUBLISH</button>
            <img className="publish__icon" src="Icons/publish.svg" alt="publish__icon"></img>
             <Link to="/">
            <button className="cancel__button__two"type="button">CANCEL</button>
            </Link>
         </div>
         </form>
     </div>
    
       
   );
   }
}

export default Uploads;