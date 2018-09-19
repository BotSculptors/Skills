import React, { Component } from 'react';
import BtnNext from './btn/btnNext'


class Name extends Component {
  render() {
    return (

      <div className="Name">
      <div className="NameInfo">
        <span>Enter your name :</span>
        <textarea> </textarea>
      </div>
        <BtnNext />
      </div>

    );
  }
}

export default Name;
