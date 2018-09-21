import React, { Component } from 'react';
import netImg from '../../images/net.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Net extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">.Net</span>

        <Img src={netImg} />

        <Btn url='/visualBasic'/>

      </div>

    );
  }
}

export default Net;
