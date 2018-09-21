import React, { Component } from 'react';
import cPlusImg from '../../images/cPlus.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class CPlus extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">C++</span>

        <Img src={cPlusImg} />

        <Btn url='/cSharp'/>

      </div>

    );
  }
}

export default CPlus;
