import React from 'react';
import './Comments.scss';
// import React, {Component} from 'react';
// import axios from "axios"
// import { render } from 'sass';

  const Comments = props => {
      console.log(props);

      return (
 <div>
          <div className="heading">
            <img className ="grey__image" src= "./Images/Grey.png" alt="grey__placeholder"></img>
            <div className="comment__container"> 
              <h2 className="comment__heading__fastName">{props.commentInformation.firstName}</h2>
              <h2 className="comment__heading__lastName">{props.commentInformation.lastName}</h2>
            </div>
         
          <p className="comment__date">{props.commentInformation.date}</p>
         
          </div>
            <p className="comment">{props.commentInformation.comment}</p>
            <hr className="line__break"></hr>
          </div>
          
      );
  }


export default Comments;


//   class Comments extends Component {
//     state = {
//     customerComments: [],
//     };

//     updateVideos(commentArray){
//     this.setState({
//       customerComments: commentArray,
//     });
// }
  
 
  // componentDidMount() {
  //    axios
  //    .get(`https://project-2-api.herokuapp.com/videos/${props.video.id}/?api_key=74bc90a5-a15b-42e3-b65e-1c82a08e64d3`)
  //    .then((response) => {
  //      console.log(response)
  //      this.updateVideos(response.data.comments);
     
  //  }
  //  );
  // };



// render() {
  //  return( 
