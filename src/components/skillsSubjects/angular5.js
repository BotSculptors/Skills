import React, { Component } from 'react';
import angular5Img from '../../images/angular5.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Angular5 extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Angular 2-5</span>

        <Img src={angular5Img} />

        <Btn url='/ionic'/>

      </div>

    );
  }
}

export default Angular5;
