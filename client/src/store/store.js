
import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TokenReducer from '../store/reducers/adminReducers/tokenReducer'

const rootReducer = combineReducers({
    TokenReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));