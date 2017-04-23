
import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import InOutReducer from './reducers/InOutReducer.js';
import Student from './reducers/student.js';

const rootReducer = combineReducers({
      InOutReducer,
      Student
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));