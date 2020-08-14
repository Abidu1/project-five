import React, { Component } from 'react';

class Header extends Component {
//header has title of the app and description of what it does
  render() {
    return (
      <header>
        <div class ="wrapper">
          <h1>Welcome to Makeup Finder!</h1>
          <p>This website is designed to help you find makeup products!</p>
        </div>
      </header>
    )
  }
}

export default Header;