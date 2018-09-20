import React, { Component } from 'react';
import '../btnStyle/btn.css';
import {Link} from 'react-router-dom';

class btnNext extends Component {
  render() {
    return (
  <Link to='/design'>
      <div className="btnNext">
          <span  className="next">Next &raquo;</span>
      </div>
  </Link>
    );
  }
}

export default btnNext ;
