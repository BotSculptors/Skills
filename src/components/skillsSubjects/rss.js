import React, { Component } from 'react';
import rssImg from '../../images/rss.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class rss extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">RSS</span>

        <Img src={rssImg} />

        <Btn url='/laravel'/>

      </div>

    );
  }
}

export default rss;
