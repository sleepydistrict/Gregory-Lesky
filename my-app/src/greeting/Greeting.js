import React, { Component } from 'react';
import './Greeting.css';


class Greeting extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return(
      <div className='Greeting'>
        <h1>Hello and Welcome to Gregory's Resume! </h1>
      </div>  
    )
  }
}

export default Greeting;