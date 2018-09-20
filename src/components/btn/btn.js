import React, { Component } from 'react';
import './btnStyle/btn.css';

import BtnPlus from './btnComponents/btnPlus';
import BtnMinus from './btnComponents/btnMinus';

class btn extends Component {
  render() {
    return (
      <div className="rating">
        <BtnPlus url={this.props.url}/>
        <BtnMinus url={this.props.url}/>
      </div>
    );
  }
}

export default btn;
