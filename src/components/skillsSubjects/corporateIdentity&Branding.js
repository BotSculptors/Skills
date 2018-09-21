import React, { Component } from 'react';
import corporateIdentityBrandingImg from '../../images/corporateIdentityBranding.png'

import Btn from '../btn/btn';
import Img from '../img/img';

class CorporateIdentityBranding extends Component {
  render() {
    return (

      <div className="question">

        <span className="subject">Corporate Identity & Branding</span>

        <Img src={corporateIdentityBrandingImg} />

        <Btn url='/printDesignServices'/>

      </div>

    );
  }
}

export default CorporateIdentityBranding;
