import React, { Component } from 'react';
import Header from './Header.js';
import axios from 'axios';
import DropDown from './DropDown'
import DisplaySection from './DisplaySelection.js'
import './App.css';
//on change 
//dropdown component 

class App extends Component{

  getProduct = (userChoice) =>  {
      //run getProduct with userChoice as an argument 
    axios({ 
      url: `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${userChoice} `,
      method: `GET`,
      responseType: `json`
    })
    .then( (response) => {
        console.log(response)
      this.setState({
        currentProducts: response.data
      
      })
    })
  }

    getUserInput = (event) => {
      event.preventDefault();
  }


  render(){
      return (
        // drop down 
        //div should render a loop through your page
        <div className="App">
          <Header />
          <DropDown getUserInput={ this.getUserInput } / >
          {/* <DisplaySection item={this.getProduct} /> */}
        </div>
      );
  }
}

export default App;