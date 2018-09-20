import React, { Component } from 'react';
import stripeApiImg from '../../images/stripeApi.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class StripeApi extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">StripeApi</span>

        <Img src={stripeApiImg} />

        <Btn url='/paypalApi'/>

      </div>

    );
  }
}

export default StripeApi;
