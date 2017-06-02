
//** Other **// 
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { Store } from './store/store.js'

//** Student Component **// 
import { App } from './components/app.js';
import { MainPage } from './components/mainPage.js';

//** Admin Components **/
import { Admin } from '../src/components/adminPanel/admin.js'
import { AdminLogin } from '../src/components/adminPanel/adminLogin.js'
import { Dashboard } from '../src/components/adminPanel/dashboard.js'
import { CreateQuiz } from '../src/components/adminPanel/createQuiz.js'
import { CreateCourse } from '../src/components/adminPanel/createCourse.js'


ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>

      <Route path='/' component={App}>
        <IndexRoute component={MainPage} />
      </Route>

      <Route path='/admin' component={Admin}>
        <IndexRoute component={AdminLogin} />
        <Route path='/admin/dashboard' component={Dashboard} />
        <Route path='/admin/createquiz' component={CreateQuiz} />
        <Route path='/admin/createCourse' component={CreateCourse} />
      </Route>

    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
