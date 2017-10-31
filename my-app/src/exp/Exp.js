import React, { Component } from 'react';
import './Exp.css';


class Exp extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return(
      <div className='Exp'>
        <h1>Training:</h1>
        HTML, CSS, BootStrap, Semantic, Node.js, Command Line, JSON, JavaScript, ES6<br/>
        My experience doing {this.props.superExp} is useful for this job.
      </div>  
    )
  }
}

export default Exp;