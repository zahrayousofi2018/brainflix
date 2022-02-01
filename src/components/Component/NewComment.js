import React from 'react'
import './NewComment.scss'


  function NewComment () {
    return (
      <div className="main__div">
        <h3 className="comments__header">3 Comments</h3>
      <div className="NewComment__div">
        <div>
      <img src="Images/Mohan-muruge.jpg" className="Mohan__placeholder" alt="Mohan"></img>
      </div>
      <div>
      <label className="comment_box_text">JOIN THE CONVERSATION</label>
      <input className="new__comment__box" type="text" placeholder= "Add a new comment..." ></input>
      </div>
      <div>
      <button className="Comment__button">Comment</button>
      </div>
      </div>
       <hr></hr>
       </div>
    )
  };

  export default NewComment;

