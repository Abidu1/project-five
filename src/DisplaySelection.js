import React from 'react';

const DisplaySection = ( props ) => {
    return(
      <main class="imageDisplay">
        {
          props.item.map((displayItem) => {
            return(
                <div key={displayItem._id} >
                <div>
                  <img src={displayItem.image_link}></img> 
                  <h2>{displayItem.name}</h2> 
                </div>
                </div>
          );    
          })
         }
      </main>
    )
  }


export default DisplaySection;
