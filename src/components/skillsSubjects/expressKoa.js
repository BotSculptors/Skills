import React, { Component } from 'react';
import expressKoaImg from '../../images/expressKoa.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class ExpressKoa extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Express / Koa</span>

        <Img src={expressKoaImg} />

        <Btn url='/aspNetMvc'/>

      </div>

    );
  }
}

export default ExpressKoa;
