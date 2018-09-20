import React, { Component } from 'react';
import linuxSystemAdministrationImg from '../../images/linuxSystemAdministration.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class LinuxSystemAdministration extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">linux System Administration</span>

        <Img src={linuxSystemAdministrationImg} />

        <Btn url='/python'/>

      </div>

    );
  }
}

export default LinuxSystemAdministration;
