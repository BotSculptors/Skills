import React, { Component } from 'react';
import visualBasicImg from '../../images/visualBasic.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class VisualBasic extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Visual Basic</span>

        <Img src={visualBasicImg} />

        <Btn url='/ui'/>

      </div>

    );
  }
}

export default VisualBasic;
