import React, { Component } from 'react';
import openCartImg from '../../images/openCart.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class OpenCart extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">OpenCart</span>

        <Img src={openCartImg} />

        <Btn url='/facebookMessengerApi'/>

      </div>

    );
  }
}

export default OpenCart;
