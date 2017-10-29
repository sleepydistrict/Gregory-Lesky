import React, { Component } from 'react';
import './BucketList.css';


class BucketList extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return(
      <div className= 'BucketList'>
        <h1>Bucket List:</h1>
          Take a Jeong Kwan cooking class<br/>
          Learn to fly<br/>
          Spend a year in a South American country  
      </div>  
    )
  }
}

export default BucketList;