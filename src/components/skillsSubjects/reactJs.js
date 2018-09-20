import React, { Component } from 'react';
import reactJsImg from '../../images/reactJs.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class ReactJs extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">ReactJS</span>

        <Img src={reactJsImg} />

        <Btn url='/vueJs'/>

      </div>

    );
  }
}

export default ReactJs;
