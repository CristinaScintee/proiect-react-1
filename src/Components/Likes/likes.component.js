import React from 'react';

export default class Likes extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
          likes: 0,
        nume: "ceva",
        prenume: "altceva",
        list: []
      }
    }
    
    likeThePost = () => {
        this.setState({ likes: this.state.likes + 1, nume: "altceva" })
    }
    
    
    render() {
      return (
        <div className="post-container">
        <p>Likes: {this.state.likes}</p>
        <button onClick={this.likeThePost}>Like</button>
        <h1>{this.state.nume}</h1>
        </div>
      )
    }
  }
  