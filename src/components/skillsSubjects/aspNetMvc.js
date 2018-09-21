import React, { Component } from 'react';
import aspNetMvcImg from '../../images/aspNetMvc.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class AspNetMvc extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">asp .Net MVC</span>

        <Img src={aspNetMvcImg} />

        <Btn url='/unitTest'/>

      </div>

    );
  }
}

export default AspNetMvc;
