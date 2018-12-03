import React, { Component } from 'react';

export class SubjectImg extends Component {
  render() {
    return (
      <img alt="foto" className="questionImg" src={this.props.src} />
    );
  }
}
