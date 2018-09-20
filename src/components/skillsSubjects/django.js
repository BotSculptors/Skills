import React, { Component } from 'react';
import djangoImg from '../../images/django.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Django extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Django</span>

        <Img src={djangoImg} />

        <Btn url='/wordpress'/>

      </div>

    );
  }
}

export default Django;
