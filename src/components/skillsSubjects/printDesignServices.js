import React, { Component } from 'react';
import printDesignServicesImg from '../../images/printDesignServices.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class PrintDesignServices extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Print Design Services</span>

        <Img src={printDesignServicesImg} />

        <Btn url='/webDesignServices'/>

      </div>

    );
  }
}

export default PrintDesignServices;
