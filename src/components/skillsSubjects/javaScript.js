import React, { Component } from 'react';
import javaScriptImg from '../../images/javaScript.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class JavaScript extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">JavaScript</span>

        <Img src={javaScriptImg} />

        <Btn url='/jquery'/>

      </div>

    );
  }
}

export default JavaScript;
