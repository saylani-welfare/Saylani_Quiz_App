
import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import InOutReducer from './reducers/InOutReducer.js';
import Student from './reducers/student.js';
import VerifyAdmin from './reducers/adminReducers/verifyAdmin.js';


const rootReducer = combineReducers({
      InOutReducer,
      Student,
      VerifyAdmin
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));