import React, { Component } from "react";
import "./Uploads.scss";
import { Link, Redirect} from "react-router-dom";


// function Uploads(props) {

class Uploads extends Component {
     state ={
       title: "",
       description: "",
     }
   handleChange = (event) => {
     this.setState({[event.target.name]: event.target.value},
  
      ) };
    
     istitleValid = () => {
       const title = this.state.title;
       if (title.length < 8 ) {
         return false;
       }
       return true;
     }

     isdescriptionValid = () => {
       const description = this.state.description;
       if(description.length < 8) {
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
       return true;
     };

     handleSubmit = (event) => {
       event.preventDefault();
       if(this.isFormValid()) {
         alert("Success");
       } else {
         alert("Please complete the form")
       }
     };
     

  render () {

   return(
    <div>
      <form onSubmit= {this.handleSubmit}>
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
        
         <div className="">
            <button className="cancel__button__one"type="button">CANCEL</button>
            <button type="submit" className="publish__button">PUBLISH</button>
            <button className="cancel__button__two"type="button">CANCEL</button>
         </div>
         </form>
     </div>
    
       
   );
   }
}

export default Uploads;