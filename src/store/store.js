
import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import InOutReducer from './reducers/InOutReducer.js';

const rootReducer = combineReducers({
      InOutReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));