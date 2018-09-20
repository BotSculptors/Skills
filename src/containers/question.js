import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Name from '../components/skillsSubjects/Name';
import Design from '../components/skillsSubjects/responsiveDesign';
import JavaScript from '../components/skillsSubjects/javaScript';
import Jquery from '../components/skillsSubjects/jquery';
import ChromeExtensions from '../components/skillsSubjects/chromeExtensions';

class question extends Component {
  render() {
    return (

      <div >
         <BrowserRouter>
              <Switch>
               <Route exact path='/' render={() => <Name />} />
               <Route exact path='/design' render={() => <Design />} />
               <Route exact path='/javaScript' render={() => <JavaScript />} />
               <Route exact path='/jquery' render={() => <Jquery />} />
              <Route exact path='/chromeExtensions' render={() => <ChromeExtensions />} />


              </Switch>
          </BrowserRouter>
       </div>
    );
  }
}

export default question;
