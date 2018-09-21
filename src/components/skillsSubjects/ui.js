import React, { Component } from 'react';
import uiImg from '../../images/ui.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Ui extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">UI</span>

        <Img src={uiImg} />

        <Btn url='/corporateIdentityBranding'/>

      </div>

    );
  }
}

export default Ui;
