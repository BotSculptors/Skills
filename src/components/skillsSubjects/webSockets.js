import React, { Component } from 'react';
import webSocketsImg from '../../images/webSockets.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class WebSockets extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Web Sockets</span>

        <Img src={webSocketsImg} />

        <Btn url='/ajax'/>

      </div>

    );
  }
}

export default WebSockets;
