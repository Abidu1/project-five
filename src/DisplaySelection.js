import React from 'react';

const DisplaySection = ( props ) => {
    return(
      <section class="imageDisplay">
        
        {
          props.items.map((displayItem) => {
            return(
            <div class="wrapper">
            <div key={displayItem._id} >
              <div>
                  <img src={displayItem.image_link} alt={displayItem.name}></img> 
                  <p>{displayItem.name}</p> 
              </div>
            </div>
            </div>
          );    
        })
      }
    </section>
  )
}


export default DisplaySection;
