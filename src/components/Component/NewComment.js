import React from 'react'
import './NewComment.scss'
// import React, { Component } from "react";
// import Comment from "./Comment";
// import { API_URL } from "./App";
// import axios from 'axios';




  function NewComment () {
    return (
    <div className="main__div">
          <h3 className="comments__header">3 Comments</h3>
      <div className="NewComment__div">
 
        <div>
         <img src="Images/Mohan-muruge.jpg" className="Mohan__placeholder" alt="Mohan"></img>
        </div>
      
        <div className="new__comment__div">
          <label className="comment_box_text">JOIN THE CONVERSATION</label>
          <input className="new__comment__box" type="text" placeholder= "Add a new comment..." ></input>
        </div>

        <div className="new__comment__div">
          <button className="Comment__button">Comment</button>
        </div>

     </div>
        <hr></hr>
  </div>
    )
  };

  export default NewComment;


// class NewComment extends Component {
//   likePoster(id) {
//     axios.put (
//       API_URL + "/" + id + "like?api_key=74bc90a5-a15b-42e3-b65e-1c82a08e64d3"
//     );
//   }

//   render() {
//     return (
//       <div> 
//         {this.props.comments.map((comment) => {
//           return (
//             <Comment 
//             key={comment.id}
//             name={comment.name}
//             comment={comment.comment}
//             likes={comment.likes}
//             id={comment.id}
//             clickHandler={this.likePoster}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default NewComment

