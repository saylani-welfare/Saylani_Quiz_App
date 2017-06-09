
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import TokenReducer from '../store/reducers/adminReducers/tokenReducer';
import MakeMCQsReducer from '../store/reducers/adminReducers/makeMCQsReducer';

const rootReducer = combineReducers({
    TokenReducer,
    MakeMCQsReducer
})

export const Store = compose(
    applyMiddleware(thunk),
    autoRehydrate()
)(createStore)(rootReducer)

persistStore(Store, {});

// store = createStore(rootReducer, applyMiddleware(thunk));
// export const store
