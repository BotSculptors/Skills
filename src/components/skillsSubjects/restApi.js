import React, { Component } from 'react';
import restApiImg from '../../images/restApi.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class RestApi extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Rest Api</span>

        <Img src={restApiImg} />

        <Btn url='/webSockets'/>

      </div>

    );
  }
}

export default RestApi;
