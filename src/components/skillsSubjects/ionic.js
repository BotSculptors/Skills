import React, { Component } from 'react';
import ionicImg from '../../images/ionic.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Ionic extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Ionic</span>

        <Img src={ionicImg} />

        <Btn url='/sendSkillsData'/>

      </div>

    );
  }
}

export default Ionic;
