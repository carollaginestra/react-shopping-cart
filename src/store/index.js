import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import cart from './cart/reducers/index';

export default createStore(combineReducers({
    cart,
}),
    applyMiddleware(thunk)
)