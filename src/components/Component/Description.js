import React from 'react'
import './Description.scss'

function Description() {
return (
    <div>
        <h1 className="description__header">BMX Rampage: 2021 Highlights</h1>
        <div className="description__container">
           <div>
             <h3 className="description__author">By Red Crow</h3>
             <h4 className="description__date">07/11/2021</h4>
           </div>
            <div className="description__container">
              <img src="./Icons/views.svg"/>
              <h4 className= "description__view">1,001,023</h4> 
              <img className= "" src="./Icons/likes.svg"/>
              <h4 className= "description__view">110,985</h4>
           </div>
        </div>

        <p className="description__paragraph">On a gustly day in Southerin Utah, 
          a group of 25 daring mountain 
          bikers blew the doors off what is possible on two wheels, unleashing 
          some of the biggest moments the spot has ever seen. While mother nature 
          only allowed for one full run before the condition made it impossible to 
          ride, that was all that was needed for event veteran Kyle Strait, who won 
          the event for the second time -- eight years after his first Red Cow
          Rampage title</p>
    </div>
)
}

export default Description

