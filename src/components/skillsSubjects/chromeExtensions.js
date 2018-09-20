import React, { Component } from 'react';
import chromeExtensionsImg from '../../images/chromeExtension.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class ChromeExtensions extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Chrome Extensions</span>

        <Img src={chromeExtensionsImg} />

        <Btn url='/english'/>

      </div>

    );
  }
}

export default ChromeExtensions;
