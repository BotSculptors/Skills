import React, { Component } from 'react';
import googleApiImg from '../../images/googleApi.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class GoogleApi extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Google Api</span>

        <Img src={googleApiImg} />

        <Btn url='/php'/>

      </div>

    );
  }
}

export default GoogleApi;
