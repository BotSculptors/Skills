import React, { Component } from 'react';
import mySqlImg from '../../images/mySql.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class MySql extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">mySQL</span>

        <Img src={mySqlImg} />

        <Btn url='/redis'/>

      </div>

    );
  }
}

export default MySql;
