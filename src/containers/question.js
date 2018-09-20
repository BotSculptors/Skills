import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Name from '../components/skillsSubjects/Name';
import Design from '../components/skillsSubjects/responsiveDesign';
import JavaScript from '../components/skillsSubjects/javaScript';
import Jquery from '../components/skillsSubjects/jquery';
import ChromeExtensions from '../components/skillsSubjects/chromeExtensions';
import English from '../components/skillsSubjects/english';
import TelegramApi from '../components/skillsSubjects/telegramApi';
import GoogleApi from '../components/skillsSubjects/googleApi';
import Php from '../components/skillsSubjects/php';
import RestApi from '../components/skillsSubjects/restApi';
import WebSockets from '../components/skillsSubjects/webSockets';
import Ajax from '../components/skillsSubjects/ajax';
import NodeJs from '../components/skillsSubjects/nodeJs';
import ReactJs from '../components/skillsSubjects/reactJs';
import VueJs from '../components/skillsSubjects/vueJs';
import LinuxSystemAdministration from '../components/skillsSubjects/linuxSystemAdministration';
import Python from '../components/skillsSubjects/python';
import Django from '../components/skillsSubjects/django';
import Wordpress from '../components/skillsSubjects/wordpress';
import OpenCart from '../components/skillsSubjects/openCart';
import FacebookMessengerApi from '../components/skillsSubjects/facebookMessengerApi';
import StripeApi from '../components/skillsSubjects/stripeApi';
import PaypalApi from '../components/skillsSubjects/paypalApi';
import RSS from '../components/skillsSubjects/rss';
import Laravel from '../components/skillsSubjects/laravel';




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
               <Route exact path='/english' render={() => <English />} />
               <Route exact path='/telegramApi' render={() => <TelegramApi />} />
               <Route exact path='/googleApi' render={() => <GoogleApi />} />
               <Route exact path='/php' render={() => <Php />} />
               <Route exact path='/restApi' render={() => <RestApi />} />
               <Route exact path='/webSockets' render={() => <WebSockets />} />
               <Route exact path='/ajax' render={() => <Ajax/>} />
               <Route exact path='/nodeJs' render={() => <NodeJs />} />
               <Route exact path='/reactJs' render={() => <ReactJs />} />
               <Route exact path='/vueJs' render={() => <VueJs />} />
               <Route exact path='/linuxSystemAdministration' render={() => <LinuxSystemAdministration />} />
               <Route exact path='/python' render={() => <Python />} />
               <Route exact path='/django' render={() => <Django />} />
               <Route exact path='/wordpress' render={() => <Wordpress />} />
               <Route exact path='/openCart' render={() => <OpenCart />} />
               <Route exact path='/facebookMessengerApi' render={() => <FacebookMessengerApi />} />
               <Route exact path='/stripeApi' render={() => <StripeApi />} />
               <Route exact path='/paypalApi' render={() => <PaypalApi />} />
               <Route exact path='/rss' render={() => <RSS />} />
               <Route exact path='/laravel' render={() => <Laravel />} />


              </Switch>
          </BrowserRouter>
       </div>
    );
  }
}

export default question;
