import React from 'react'
import './NewComment.scss'


  function NewComment () {
    return (
      <div className="NewComment__div">
      <img src="Images/Mohan-muruge.jpg" className="Mohan__placeholder"></img>
      <p>JOIN THE CONVERSATION</p>
      <input className="new__comment__box" type="text" placeholder= "Add a new comment..." ></input>
      <button className="Comment__button">Comment</button>
      <hr></hr>
      </div>
    )
  };

  export default NewComment;

