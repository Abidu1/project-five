import React, { Component } from 'react';

class DropDown extends Component {
    constructor() {
      super();
      this.state = {
        userSelection: ""
      }
    }
  
    userpicks = (event) => {
      this.setState({
        userSelection: event.target.value
      })
    }
  
    render() {
      return(
        <form>
          
          <label htmlFor="makeupProduct">Choose a Makeup Product!</label>
          <select onChange={ this.userpicks } name="makeupProduct" id="makeupProduct">
            <option value="lipstick">Lipsticks</option>
            <option value="eyeshadow">Eye Shadow</option>
            <option value="blush">Blush</option>
          </select>
  
          <button
            onClick={ (event) => this.props.getUserInput(event, this.state.userSelection) }
          > Submit
          </button>
  
        </form>
      )
    }
  }
  
  export default DropDown;