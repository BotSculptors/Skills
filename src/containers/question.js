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

import MySql from '../components/skillsSubjects/mySql';
import Redis from '../components/skillsSubjects/redis';
import MongoDb from '../components/skillsSubjects/mongoDb';
import MsSql from '../components/skillsSubjects/msSql';
import PostgreSql from '../components/skillsSubjects/postgreSql';
import ExpressKoa from '../components/skillsSubjects/expressKoa';
import AspNetMvc from '../components/skillsSubjects/aspNetMvc';
import UnitTest from '../components/skillsSubjects/unitTest';
import CPlus from '../components/skillsSubjects/cPlus';
import CSharp from '../components/skillsSubjects/cSharp';
import Net from '../components/skillsSubjects/net';
import VisualBasic from '../components/skillsSubjects/visualBasic';
import Ui from '../components/skillsSubjects/ui';
import CorporateIdentityBranding from '../components/skillsSubjects/corporateIdentityBranding';
import PrintDesignServices from '../components/skillsSubjects/printDesignServices';
import WebDesignServices  from '../components/skillsSubjects/webDesignServices';
import ArtIllustration from '../components/skillsSubjects/artIllustration';
import D3 from '../components/skillsSubjects/d3';
import Angular1 from '../components/skillsSubjects/angular1';
import Angular5 from '../components/skillsSubjects/angular5';
import Ionic from '../components/skillsSubjects/ionic';




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

               <Route exact path='/mySql' render={() => <MySql />} />
               <Route exact path='/redis' render={() => <Redis />} />
               <Route exact path='/mongoDb' render={() => <MongoDb />} />
               <Route exact path='/msSql' render={() => <MsSql />} />
               <Route exact path='/postgreSql' render={() => <PostgreSql />} />
               <Route exact path='/expressKoa' render={() => <ExpressKoa />} />
               <Route exact path='/aspNetMvc' render={() => <AspNetMvc />} />
               <Route exact path='/unitTest' render={() => <UnitTest />} />
               <Route exact path='/cPlus' render={() => <CPlus />} />
               <Route exact path='/cSharp' render={() => <CSharp />} />
               <Route exact path='/net' render={() => <Net />} />
               <Route exact path='/visualBasic' render={() => <VisualBasic />} />
               <Route exact path='/ui' render={() => <Ui />} />
               <Route exact path='/corporateIdentityBranding' render={() => <CorporateIdentityBranding />} />
               <Route exact path='/printDesignServices' render={() => <PrintDesignServices />} />
               <Route exact path='/webDesignServices' render={() => <WebDesignServices />} />
               <Route exact path='/artIllustration' render={() => <ArtIllustration />} />
               <Route exact path='/d3' render={() => <D3 />} />
               <Route exact path='/angular1' render={() => <Angular1 />} />
               <Route exact path='/angular2-5' render={() => <Angular5 />} />
               <Route exact path='/ionic' render={() => <Ionic />} />


              </Switch>
          </BrowserRouter>
       </div>
    );
  }
}

export default question;
