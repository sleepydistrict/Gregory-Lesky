import React, { Component } from 'react';
import './App.css';
import Hobby from './hobby/Hobby';
import Exp from './exp/Exp';
import Nav from './nav/Nav';
import BucketList from './bucketList/BucketList';
import Greeting from './greeting/Greeting';

class App extends Component {
  constructor(props) { //exct by default
    super(props); //call compnent funct
    this.state = {
      greeting: '',
      nav: '',
      hobby: '',
      exp: 'Cooking, Constuction, Coding',
      bucketList: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header>
        {/* Welcome to Gregory's Resume */}
        </header>
        <Greeting superGreeting= {this.state.greeting} />
        <Nav superNav= {this.state.nav}/>
        <Exp superExp= {this.state.exp} />
        <Hobby superHobby= {this.state.hobby}/>
        <BucketList superbucketList= {this.state.bucketList} />
      </div>
    );
  }
}


export default App;
