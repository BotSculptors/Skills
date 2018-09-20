import React, { Component } from 'react';
import vueJsImg from '../../images/vueJs.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class VueJs extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">VueJS</span>

        <Img src={vueJsImg} />

        <Btn url='/linuxSystemAdministration'/>

      </div>

    );
  }
}

export default VueJs;
