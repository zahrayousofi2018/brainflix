import React from "react"



function Uploads(props){
   return(
       <div>
         <div>
           
         </div>

       <div>
           <h1>Upload Video</h1>
       </div>

      
       <label className="upload_box_text">TITLE YOUR VIDEO</label>
          <input className="new__comment__box" type="text" placeholder= "Add a title to your video..."
        ></input>

        <label className="upload_box_text">ADD A VIDEO DESCRIPTION</label>
          <input className="new__comment__box" type="text" placeholder= "Add a description to your video..."
        ></input>

          <button type="button">PUBLISH</button>
          <button type="button">CANCEL</button>
        
        </div>
       
   );
}

export default Uploads;