import React, { Component } from 'react';
import msSqlImg from '../../images/msSql.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class MsSql extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">MsSQL</span>

        <Img src={msSqlImg} />

        <Btn url='/postgreSql'/>

      </div>

    );
  }
}

export default MsSql;
