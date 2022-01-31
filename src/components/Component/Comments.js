import React from 'react';
import './Comments.scss';

  
  const Comments = props => {
      console.log(props);
    
      return (

        <div className="heading">
              <hr className="line__break"></hr>
         <div>
         
          <img className ="grey__image" src= "./Images/Grey.png"></img>
          </div>
         
          <div className="comment__container">
     
          <h2 className="comment__heading__fastName">{props.commentInformation.firstName}</h2>
          <h2 className="comment__heading__lastName">{props.commentInformation.lastName}</h2>
          <p className="comment__date">{props.commentInformation.date}</p>
      
          </div>
          <p className="comment">{props.commentInformation.comment}</p>
        </div>

    
      );
  }


export default Comments;