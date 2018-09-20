import React, { Component } from 'react';
import laravelImg from '../../images/laravel.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class Laravel extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Laravel</span>

        <Img src={laravelImg} />

        <Btn url='/mySql'/>

      </div>

    );
  }
}

export default Laravel;
