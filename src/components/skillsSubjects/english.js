import React, { Component } from 'react';
import englishImg from '../../images/english.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class English extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">English</span>

        <Img src={englishImg} />

        <Btn url='/telegramApi'/>

      </div>

    );
  }
}

export default English;
