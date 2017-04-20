import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app.js';
import { MassTraining } from './components/massTraining.js';
import {Courses} from './components/courses.js';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import {Store} from './store/store.js'
import * as firebase from 'firebase';
 var config = {
    apiKey: "AIzaSyDgcbsyI0ZXVkatsAaWh-jBEccFL8p5lSg",
    authDomain: "mass-training-quizz-app.firebaseapp.com",
    databaseURL: "https://mass-training-quizz-app.firebaseio.com",
    projectId: "mass-training-quizz-app",
    storageBucket: "mass-training-quizz-app.appspot.com",
    messagingSenderId: "712227249171"
  };
  firebase.initializeApp(config);
ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Courses}/>
        <Route path='/courses' component={Courses} />  
      </Route>
    </Router> 
  </Provider>
  ,
  document.getElementById("root")
);
