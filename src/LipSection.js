import React, { Component } from 'react'
import axios from 'axios'


class LipSection extends Component {
    constructor(){
        super();
        this.state = {
            lipProducts: []
        }

    }



    componentDidMount() {
        axios({
          url: `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`,
          method: `GET`,
          responseType: `json`
        })
        .then( (response) => {
            console.log(response)
          this.setState({
            lipProducts: response.data
          })
        })
      }



 
render(){
    return(
        <div class="wrapper">
           {this.state.lipProducts.map(lipProduct => 
           <div key={lipProduct.id}> 
           <div>
            <img src={lipProduct.image_link}></img> 
            <p>{lipProduct.name}</p>
            </div>
           </div> )}

        </div>
    )
}
}

export default LipSection;




