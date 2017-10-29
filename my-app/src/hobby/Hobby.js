import React, { Component } from 'react';
import './Hobby.css';  

class Hobby extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return(
      <div className= "Hobby">
        <h1>Hobbies:</h1>
        <p>Snow Boarding, White Water, Wood Working, Learnig to Code!!</p>
      </div>  
    )
  }
}

export default Hobby;