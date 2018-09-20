import React, { Component } from 'react';
import '../btnStyle/btn.css';
import {Link} from 'react-router-dom';

class btnPlus extends Component {
  render() {
    return (
    <Link to={this.props.url}>
      <div >
          <button className="plus"></button>
      </div>
    </Link>
    );
  }
}

export default btnPlus ;
