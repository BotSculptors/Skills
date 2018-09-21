import React, { Component } from 'react';
import angular1Img from '../../images/angular1.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Angular1 extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Angular 1</span>

        <Img src={angular1Img} />

        <Btn url='/angular2-5'/>

      </div>

    );
  }
}

export default Angular1;
