import React, { Component } from 'react';
import jqueryImg from '../../images/jquery.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Jquery extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Jquery</span>

        <Img src={jqueryImg} />

        <Btn url='/chromeExtensions'/>

      </div>

    );
  }
}

export default Jquery;
