import React, { Component } from 'react';
import paypalApiImg from '../../images/paypalApi.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class PaypalApi extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">PaypalApi</span>

        <Img src={paypalApiImg} />

        <Btn url='/rss'/>

      </div>

    );
  }
}

export default PaypalApi;
