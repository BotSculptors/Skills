import React, { Component } from 'react';
import pythonImg from '../../images/python.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Python extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Python</span>

        <Img src={pythonImg} />

        <Btn url='/django'/>

      </div>

    );
  }
}

export default Python;
