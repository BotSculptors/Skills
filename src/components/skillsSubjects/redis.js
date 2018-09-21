import React, { Component } from 'react';
import redisImg from '../../images/redis.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Redis extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Redis</span>

        <Img src={redisImg} />

        <Btn url='/mongoDb'/>

      </div>

    );
  }
}

export default Redis;
