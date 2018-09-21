import React, { Component } from 'react';
import mongoDbImg from '../../images/mongoDb.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class MongoDb extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">MongoDb</span>

        <Img src={mongoDbImg} />

        <Btn url='/msSql'/>

      </div>

    );
  }
}

export default MongoDb;
