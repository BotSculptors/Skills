import React, { Component } from 'react';
import telegramApiImg from '../../images/telegramApi.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class TelegramApi extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Telegram Api</span>

        <Img src={telegramApiImg} />

        <Btn url='/googleApi'/>

      </div>

    );
  }
}

export default TelegramApi;
