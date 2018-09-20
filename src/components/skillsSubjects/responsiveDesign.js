import React, { Component } from 'react';
import ResponsiveDesignImg from '../../images/ResponsiveDesign.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Design extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Responsive Design</span>

        <Img src={ResponsiveDesignImg} />

        <Btn url='/javaScript'/>

      </div>

    );
  }
}

export default Design;
