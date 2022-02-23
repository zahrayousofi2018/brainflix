import React from 'react';
import './Comments.scss';
// import React, {Component} from 'react';

  
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

// class Comment extends Component {
  
//   render() {
//     const {name, comment, likes } = this.props;
//     return (
//        <div>
//          <p>{name}</p>
//          <p>{comment}</p>
//          <p>{likes}</p>
//        </div>

//     );
//   }
// }

// export default Comment;