import React, { Component } from 'react';
import ajaxImg from '../../images/ajax.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Ajax extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Ajax</span>

        <Img src={ajaxImg} />

        <Btn url='/nodeJs'/>

      </div>

    );
  }
}

export default Ajax;
