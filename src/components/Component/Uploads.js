import React from "react";
import "./Uploads.scss";


function Uploads(props) {

   return(
       <div>
        

       <div>
           <hr></hr>
           <h1>Upload Video</h1>  
       </div>
      
       <div class="Uploads__video">
           <label className="uploads__label">VIDEO THUMBNAIL</label>
           <img src="Images/Upload-video-preview.jpg" alt="Uploads__Image"className="Uploads__image"/>
       </div>

      <div>
       <label className="uploads__label__title">TITLE YOUR VIDEO</label>
          <input className="new__comment__box" type="text" placeholder= "Add a title to your video..."
        ></input>
        </div>
        <div>

        <label className="uploads__label__description">ADD A VIDEO DESCRIPTION</label>
          <input className="new__comment__box" type="text" placeholder= "Add a description to your video..."
        ></input>
        </div>
        <hr></hr>
        <div>
            <button className="cancel__button"type="button">CANCEL</button>
          <button className="publish__button"type="button">PUBLISH</button>
          
        </div>
        </div>
       
   );
}

export default Uploads;