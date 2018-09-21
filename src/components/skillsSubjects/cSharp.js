import React, { Component } from 'react';
import cSharpImg from '../../images/cSharp.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class CSharp extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">C#</span>

        <Img src={cSharpImg} />

        <Btn url='/net'/>

      </div>

    );
  }
}

export default CSharp;
