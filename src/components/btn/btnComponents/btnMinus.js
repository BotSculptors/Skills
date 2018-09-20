import React, { Component } from 'react';
import '../btnStyle/btn.css';
import {Link} from 'react-router-dom';

class btnMinus extends Component {
  render() {
    return (
    <Link to={this.props.url}>
      <div >
          <button className="minus"></button>
      </div>
    </Link>
    );
  }
}

export default btnMinus ;
