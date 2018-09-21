import React, { Component } from 'react';
import artIllustrationImg from '../../images/artIllustration.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class ArtIllustration extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Art & Illustration</span>

        <Img src={artIllustrationImg} />

        <Btn url='/d3'/>

      </div>

    );
  }
}

export default ArtIllustration;
