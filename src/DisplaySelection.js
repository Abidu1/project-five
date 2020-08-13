import React from 'react';

const DisplaySection = ( props ) => {
    return(
      <main>
        {
          props.item.map((displayItem) => {
            return(
                <h3 key={displayItem._id} >{displayItem.name}</h3>
            );    
          })
         }
      </main>
    )
  }


export default DisplaySection;
