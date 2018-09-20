import React, { Component } from 'react';
import phpImg from '../../images/php.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Php extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">php</span>

        <Img src={phpImg} />

        <Btn url='/restApi'/>

      </div>

    );
  }
}

export default Php;
