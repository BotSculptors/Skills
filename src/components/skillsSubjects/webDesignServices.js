import React, { Component } from 'react';
import webDesignServicesImg from '../../images/webDesignServices.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class WebDesignServices extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Web Design Services</span>

        <Img src={webDesignServicesImg} />

        <Btn url='/artIllustration'/>

      </div>

    );
  }
}

export default WebDesignServices;
