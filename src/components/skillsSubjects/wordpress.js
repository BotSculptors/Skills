import React, { Component } from 'react';
import wordpressImg from '../../images/wordPress.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Wordpress extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Wordpress</span>

        <Img src={wordpressImg} />

        <Btn url='/openCart'/>

      </div>

    );
  }
}

export default Wordpress;
