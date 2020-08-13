import React, { Component } from 'react'
import axios from 'axios'


class EyeSection extends Component {
    constructor(){
        super();
        this.state = {
            eyeProducts: []
        }

    }



    componentDidMount() {
        axios({
          url: `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow`,
          method: `GET`,
          responseType: `json`
        })
        .then( (response) => {
            console.log(response)
          this.setState({
            eyeProducts: response.data
          })
        })
      }

 
render(){
    return(
        <div class="wrapper">
            {/* <button onClick></button> */}
           {this.state.eyeProducts.map(product => 
           <div key={product.id}> 
           <div>
            <img src={product.image_link}></img> 
            <p>{product.name}</p>
            </div>
           </div> )}
           {/* {this.state.eyeProducts.map(product => )} */}
        </div>
    )
}
}

export default EyeSection;

  

