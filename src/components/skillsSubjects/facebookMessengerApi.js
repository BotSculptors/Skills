import React, { Component } from 'react';
import facebookMessengerApiImg from '../../images/facebookMessengerApi.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class FacebookMessengerApi extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Facebook/MessengerApi</span>

        <Img src={facebookMessengerApiImg} />

        <Btn url='/stripeApi'/>

      </div>

    );
  }
}

export default FacebookMessengerApi;
