import React, { Component } from 'react';

class Img extends Component {
  render() {
    return (
      <img alt="foto" className="questionImg" src={this.props.src} />
    );
  }
}

export default Img ;
