import React from 'react';


  const Comments = props => {
      console.log(props);
    
      return (
        <div className="heading">
          <img className ="Mohan__image" src= {"src/assets/Images/Mohan-muruge.jpg"} alt={'Mohan Muruge'}></img>
          <p>{props.commentInformation.date}</p>
          <h2>{props.commentInformation.firstName}</h2>
          <h2>{props.commentInformation.lastName}</h2>
          <p>{props.commentInformation.comment}</p>
          
        </div>

      );
  }


export default Comments;