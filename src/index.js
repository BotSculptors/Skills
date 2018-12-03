import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';



const listItems = str.map((number,i) =>
<div key={i}>
  <li >{number.SubjectName}</li>
  <li >{number.ImageSrc}</li>
  </div>
);

ReactDOM.render(


listItems, document.getElementById('root'));
registerServiceWorker();
