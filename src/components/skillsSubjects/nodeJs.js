import React, { Component } from 'react';
import nodeJsImg from '../../images/nodeJs.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class NodeJs extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">NodeJS</span>

        <Img src={nodeJsImg} />

        <Btn url='/reactJs'/>

      </div>

    );
  }
}

export default NodeJs;
