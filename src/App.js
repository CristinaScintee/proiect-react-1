import React from 'react';
import logo from './logo.svg';
import './App.css';

import CustomNavbar from './Components/CustomNavbar/custom-navbar.component';
import Post from './Components/Post/post.component';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
    	name: "Bardas",
      age: "23"
    }
  }
  
  render() {
    return (
      <div>
      <CustomNavbar/>
      
      <Post title="TITLU 1" content="CONTENT 1"/>
      <Post title="TITLU 2" content="CONTENT 2"/>
      </div>
    )
  }
}

export default App;
