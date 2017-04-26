
import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import InOutReducer from './reducers/InOutReducer.js';
import Student from './reducers/student.js';
import VerifyAdmin from './reducers/adminReducers/verifyAdmin.js';
import CoursesReducer from './reducers/adminReducers/coursesReducer.js';


const rootReducer = combineReducers({
      InOutReducer,
      Student,
      VerifyAdmin,
      CoursesReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));