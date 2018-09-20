import React, { Component } from 'react';
import BtnNext from '../btn/btnComponents/btnNext';



class Name extends Component {
  render() {
    return (

      <div className="Name">

        <div className="NameInfo">

          <span>Enter your name :</span>

          <textarea name="description" placeholder="This is a description." />

        </div>

        <BtnNext />

      </div>

    );
  }
}

export default Name;
