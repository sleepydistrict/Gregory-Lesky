import React, { Component } from 'react';
import './Pride.css';


class Pride extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return(
      <div className='Pride'>
        <h1>I Am Most Proud Of: </h1>
        The trade I made with Geyser Whitewater in which I set up a lunch kitchen in exchange for training on the river.<br/>
        Learning to oporate heavy machinary, such as a boom lift and a skid ster. 
      </div>  
    )
  }
}

export default Pride;