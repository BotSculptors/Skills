import React, { Component } from 'react';
import unitTestImg from '../../images/unitTest.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class UnitTest extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Unit Test</span>

        <Img src={unitTestImg} />

        <Btn url='/cPlus'/>

      </div>

    );
  }
}

export default UnitTest;
