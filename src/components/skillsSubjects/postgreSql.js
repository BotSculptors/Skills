import React, { Component } from 'react';
import postgreSqlImg from '../../images/postgreSql.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class PostgreSql extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">PostgreSQL</span>

        <Img src={postgreSqlImg} />

        <Btn url='/expressKoa'/>

      </div>

    );
  }
}

export default PostgreSql;
