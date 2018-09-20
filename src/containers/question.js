import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Name from '../components/Name';
import Design from '../components/responsiveDesign';

class question extends Component {
  render() {
    return (

      <div className="question">
        <BrowserRouter>
        <Switch>
              <Route exact path='/' render={() => <Name />} />
            <Route exact path='/design' render={() => <Design />} />


      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default question;
