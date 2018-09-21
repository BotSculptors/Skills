import React, { Component } from 'react';
import d3Img from '../../images/d3.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class D3 extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">D3</span>

        <Img src={d3Img} />

        <Btn url='/angular1'/>

      </div>

    );
  }
}

export default D3;
