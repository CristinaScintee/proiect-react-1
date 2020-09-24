import React from 'react';

import Likes from '../Likes/likes.component';

export default class Post extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
      }
    }
    
    render() {
      return (
              <div className="post-container">
        <p>Titlu: {this.props.title}</p>
        <p>Continut: {this.props.content}</p>
        <Likes />
        </div>
      )
    }
  }
