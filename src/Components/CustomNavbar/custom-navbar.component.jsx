import React from 'react';

import './custom-navbar.styles.css';

class CustomNavbar extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
      }
    }
    
    render() {
      return (
        <div className="navbar-container">
          <a href="#">HOME</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )
    }
  }
  
  export default CustomNavbar