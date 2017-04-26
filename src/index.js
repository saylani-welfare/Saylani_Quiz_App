import React from 'react';
import ReactDOM from 'react-dom';

//** Component **// 
import { App } from './components/app.js';
import { MassTraining } from './components/massTraining.js';
import { Courses } from './components/courses.js';
import { StudentForm } from '../src/components/studentForm.js'
import { Admin } from '../src/components/adminPanel/admin.js'
import { AdminLogin } from '../src/components/adminPanel/adminLogin.js'
import { Dashboard } from '../src/components/adminPanel/dashboard.js'
import { CreateQuiz } from '../src/components/adminPanel/createQuiz.js'
import { CreateCourse } from '../src/components/adminPanel/createCourse.js'

//** Component **// 

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { Store } from './store/store.js'
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

      {/*<Route path='/' component={App}>
        <IndexRoute component={Courses} />
        <Route path='./studentform' component={StudentForm} />
        <Route path='./courses' component={Courses} />
      </Route>*/}

      <Route path='/admin' component={Admin}>
        <IndexRoute component={Dashboard} />
        <Route path='/admin/dashboard' component={Dashboard} />
        <Route path='/admin/createquiz' component={CreateQuiz} />
        <Route path='/admin/createcourse' component={CreateCourse} />
      </Route>

    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
