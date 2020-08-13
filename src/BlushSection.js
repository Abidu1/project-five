import React, { Component } from 'react'
import axios from 'axios'


class BlushSection extends Component {
    constructor(){
        super();
        this.state = {
            blushProducts: []
        }

    }



    componentDidMount() {
        axios({
          url: `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`,
          method: `GET`,
          responseType: `json`
        })
        .then( (response) => {
            console.log(response)
          this.setState({
            blushProducts: response.data
          })
        })
      }


 
render(){
    return(
        <div class="wrapper">
            {this.state.blushProducts.map(blushProduct => 
           <div key={blushProduct.id}> 
           <div>
            <img src={blushProduct.image_link}></img> 
            <p>{blushProduct.name}</p>
            </div>
           </div> )}
           
           {/* {this.state.eyeProducts.map(product => )} */}
        </div>
    )
}
}

export default BlushSection;