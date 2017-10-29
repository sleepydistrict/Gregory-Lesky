import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ButtonToolbar } from 'react-bootstrap';

import './Nav.css';


class Nav extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return(
      <div class= 'SocialIcon'>
        <ButtonToolbar>
            <SocialIcon network= 'google' url="mailto:sleepydistrict01@gmail.com"  />
        
            <SocialIcon url="https://github.com/sleepydistrict" />
          
            <SocialIcon url="https://www.linkedin.com/in/gregory-lesky-000b9612b/" />
        
            <SocialIcon url="https://twitter.com/sleepydistrict" />

            <SocialIcon url="https://www.facebook.com/gregory.lesky" />
        </ButtonToolbar>
      </div>  
    )
  }
}

export default Nav;